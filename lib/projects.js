import axios from 'axios'
import {
  pipe,
  prop,
  map,
  evolve,
  path,
} from 'ramda'

import { isProd } from './utils'

const query = `query UserRepositories {
  user(login: "milogert") {
    pinnedItems(first: 5) {
      nodes {
        __typename
        ... on Repository {
          name
          description
          homepageUrl
          id
          languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              color
              name
            }
          }
          licenseInfo {
            name
            nickname
            url
          }
          url
          repositoryTopics(first: 5) {
            nodes {
              topic {
              	name
              }
              url
            }
          }
        }
      }
    }
  }
}`

const convertRepositoryTopic = evolve({
  topic: prop('name'),
})

const convertRepositoryTopics = pipe(
  prop('nodes'),
  map(convertRepositoryTopic),
)

const convertRepo = pipe(
  evolve({
    languages: prop('nodes'),
    repositoryTopics: convertRepositoryTopics,
  }),
)

const convertGraphQLResults = pipe(
  path([ 'data', 'data', 'user', 'pinnedItems', 'nodes' ]),
  map(convertRepo),
)

const fetchScreenshots = async repo => {
  let screenshots
  try {
    const screenshotRes = await axios(`https://api.github.com/repos/milogert/${repo.name}/contents/screenshots`)
    screenshots = screenshotRes.data.map(({ download_url }) => download_url)
  } catch(error) {
    screenshots = []
  }
  console.log(`screenshots for ${repo.name}`, screenshots)
  const newRepo = { ...repo, screenshots }
  return newRepo
}

const getPinnedRepos = async () => {
  try {
    const res = await axios({
      url: 'https://api.github.com/graphql',
      method: 'POST',
      data: {
        query,
      },
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_KEY}`,
      },
    })
    console.log(res)
    const repos = convertGraphQLResults(res)

    const newRepos = await Promise.all(repos.map(fetchScreenshots))
    console.log('repos', newRepos)
    return { pinnedRepos: newRepos }
  } catch (error) {
    console.error(error)
    return {
      error: {
        message: 'Oops! For some reason the pinned repositories were unavailable...',
        code: `${error.code}`,
      },
    }
  }

}

export default getPinnedRepos
