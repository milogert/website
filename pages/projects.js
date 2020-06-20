import Head from 'next/head'

import getPinnedRepos from '../lib/projects'
import RepoRow from '../components/repoRow'
import Hero from '../components/hero'

const Projects = ({ error, pinnedRepos }) => <>
  <Head>
    <title>Projects - Milo Gertjejansen</title>
  </Head>

  <div className="projects-page">
    <Hero>
      <div className="text-5xl">Projects</div>
      <p>These are personal projects I have worked on in the past. Feel free to send me an email if you have questions or suggestions!</p>
    </Hero>

    { error && <p>
      {error.message} <code>{error.code}</code>
    </p>}

    { pinnedRepos.map(({ id, ...rest }, idx) => <RepoRow key={id} {...rest} wrapRow={idx % 2 === 1} /> ) }

  </div>
</>

export async function getStaticProps() {
  const { error, pinnedRepos = [] } = await getPinnedRepos()
  return {
    props: {
      error,
      pinnedRepos,
    },
  }
}

export default Projects
