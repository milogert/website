'use client'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const bgColor = (color: string) => ({ backgroundColor: color })

type RepoRowProps = Repo

export const RepoRow = ({
  name,
  description,
  url,
  homepageUrl,
  languages,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  license,
  repositoryTopics,
  screenshots,
}: RepoRowProps) => (
  <div className="row">
    <div className="flex justify-between">
      <div className="flex items-end gap-4">
        <h2 className="text-3xl">{name}</h2>
        <a className="text-link" href={url}>
          <span className="w-4 h-4 inline-block">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className="ml-2 hidden md:inline">View the code</span>
        </a>
        {homepageUrl && (
          <a className="text-link" href={homepageUrl}>
            <span className="w-4 h-4 inline-block">
              <FontAwesomeIcon icon={faLink} />
            </span>
            <span className="ml-2 hidden md:inline">See it online</span>
          </a>
        )}
      </div>
    </div>

    <div className="">
      <p>{description}</p>
    </div>

    <div className="flex justify-between flex-col md:flex-row gap-2">
      {languages.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {languages.map(({ name, color }, idx) => (
            <span
              key={idx}
              style={bgColor(color)}
              className="rounded px-2 py-1 text-sm"
            >
              <span style={{ color }} className="mix-blend-plus-lighter">
                {name}
              </span>
            </span>
          ))}
        </div>
      )}
      {repositoryTopics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {repositoryTopics.map(({ topic }, idx) => (
            <span
              key={idx}
              className="rounded bg-secondary text-brand px-2 py-1 text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
)
