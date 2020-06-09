import axios from 'axios'

const getPinnedRepos = async () => {
  const res = await axios('http://localhost:8000/gql/pinned_repos')
  const { data: { repos, errors } } = res
  console.log('ERRORS:', errors)
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
  return newRepos
}

export default getPinnedRepos
