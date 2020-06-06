import axios from 'axios'

const getPinnedRepos = async () => {
  const res = await axios('http://localhost:8000/gql/pinned_repos')
  const { data: { repos, errors } } = res
  console.log('REPOS:', repos)
  console.log('ERRORS:', errors)
  return repos
}

export default getPinnedRepos
