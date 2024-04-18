import { Metadata } from 'next'
import React from 'react'
import { RepoRow } from 'components/repo-row'
import { getPinnedRepos } from 'lib/projects'

export const metadata: Metadata = {
  title: 'Projects - Milo Gertjejansen',
}

const Projects = async () => {
  const { error, pinnedRepos = [] } = await getPinnedRepos()

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl">Projects</h1>
        <p>
          These are personal projects I have worked on in the past. Feel free to
          send me an email if you have questions or suggestions!
        </p>

        {error && (
          <div className="">
            <div className="p-4 bg-error bg-opacity-25 border-2 rounded border-error-border text-primary shadow-lg">
              {error.message}
              <pre>
                <code>{error.code}</code>
              </pre>
            </div>
          </div>
        )}

        {pinnedRepos.map((repo, idx: number) => (
          <>
            <RepoRow key={repo.id} {...repo} />
            {idx < pinnedRepos.length - 1 && (
              <div className="rounded h-1 w-full bg-secondary" />
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default Projects
