import Head from 'next/head'
import React from 'react'
import { Hero } from 'components/hero'
import { RepoRow } from 'components/repo-row'
import { getPinnedRepos } from 'lib/projects'

type ProjectsProps = {
  error: RepoError
  pinnedRepos: Repo[]
}

const Projects = ({ error, pinnedRepos }: ProjectsProps) => (
  <>
    <Head>
      <title>Projects - Milo Gertjejansen</title>
    </Head>

    <div className="flex flex-col gap-8">
      <div className="text-5xl">Projects</div>
      <p>
        These are personal projects I have worked on in the past. Feel free to
        send me an email if you have questions or suggestions!
      </p>

      {error && (
        <div className="content">
          <div className="p-4 bg-error bg-opacity-25 border-2 rounded border-error-border text-primary shadow-lg">
            {error.message}
            <pre>
              <code>{error.code}</code>
            </pre>
          </div>
        </div>
      )}

      {pinnedRepos.map((repo, idx: number) => (
        <RepoRow key={repo.id} {...repo} wrapRow={idx % 2 === 1} />
      ))}
    </div>
  </>
)

export async function getStaticProps() {
  const { error, pinnedRepos = [] } = await getPinnedRepos()
  return {
    props: {
      error: error || null,
      pinnedRepos,
    },
  }
}

export default Projects
