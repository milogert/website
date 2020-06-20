import axios from 'axios'

import { isProd } from './utils'

const domain =
  isProd()
    ? 'http://backend.site.milogert.com'
    : 'http://localhost:8000'

const getPinnedRepos = async () => {
  let pinned_repos
  try {
    const res = await axios(`${domain}/gql/pinned_repos`)
    const { data: { repos, errors } } = res
    console.log('ERRORS:', errors)
  } catch (error) {
    return {
      error: {
        message: 'Oops! For some reason the pinned repositories were unavailable...',
        code: `${error.code} - ${domain}`,
      },
    }
  }

  const newRepos = await Promise.all(repos.map(async repo => {
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
  }))
  return { pinnedRepos: newRepos }
}

export default getPinnedRepos
