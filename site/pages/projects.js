import getPinnedRepos from '../lib/projects'
import RepoRow from '../components/repoRow'

const Projects = ({ pinnedRepos }) => <div>
  { pinnedRepos.map(({ id, ...rest }) => <RepoRow key={id} {...rest} /> ) }
</div>

export async function getStaticProps() {
  const pinnedRepos = await getPinnedRepos()
  return {
    props: {
      pinnedRepos,
    },
  }
}

export default Projects
