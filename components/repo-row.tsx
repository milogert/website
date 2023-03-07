import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import { DiagonalWrapper } from './diagonal-wrapper'

const bgColor = color => ({ backgroundColor: color })

type RepoRowProps = Repo & { wrapRow: boolean }

export const RepoRow = ({
  name,
  description,
  url,
  homepageUrl,
  languages,
  license,
  repositoryTopics,
  screenshots,
  wrapRow,
}: RepoRowProps) =>
  <DiagonalWrapper
    gradientFrom={!wrapRow ? 'from-white' : undefined}
    gradientTo={!wrapRow ? 'to-white' : undefined}
  >
    <div className="row">
      <div className="flex justify-between">
        <div>
          <code className="text-3xl mr-4">{name}</code>
          <a className="mr-4" href={url}><span className="w-4 h-4 inline-block">
            <FontAwesomeIcon icon={faGithub} /></span>
            <span className="ml-2 hidden md:inline">View the code</span>
          </a>
          {homepageUrl &&
            <a className="mr-4" href={homepageUrl}>
              <span className="w-4 h-4 inline-block">
                <FontAwesomeIcon icon={faLink} />
              </span>
              <span className="ml-2 hidden md:inline">See it online</span>
            </a>
          }
        </div>
      </div>

      <div className="content">
        <p>{description}</p>

        <div className="my-4">
          <Carousel renderThumbs={() => null}>
            {screenshots.map(url =>
              <div className="h-full" key={url}>
                <img className="object-contain object-center w-[30rem] h-96" src={url} />
              </div>
            )}
          </Carousel>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        <div className="mb-2">
          {languages.map(({ name, color }, idx) =>
            <span
              key={idx}
              style={bgColor(color)}
              className="rounded px-2 py-1 mx-1 text-sm"
            >
              <span style={{ color }} className="mix-blend-plus-lighter">{name}</span>
            </span>
          )}
        </div>
        <div className="mb-2">
          {repositoryTopics.map(({ topic }, idx) =>
            <span key={idx} className="rounded bg-gray-500 text-gray-50 px-2 py-1 mx-1 text-sm">{topic}</span>
          )}
        </div>
      </div>
    </div>
  </DiagonalWrapper>
