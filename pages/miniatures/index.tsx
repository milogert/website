import { Hero } from 'components/hero'
import * as rawData from 'data/project.json'
import Link from 'next/link'
import React from 'react'

const data = rawData as ProjectData

const ProjectCard = (props: ProjectContent) => {
  const { title, splashImage } = props

  return (
    <Link
      href={`/miniatures/${props.id}`}
      className="hover:scale-105 transition-transform ease-in"
    >
      <div
        key={title}
        className="h-64 w-64 bg-cover rounded-3xl flex flex-col-reverse items-center"
        style={{ backgroundImage: `url(${splashImage?.fields.file.url})` }}
      >
        <div className="text-xl w-full text-center pt-10 pb-2 rounded bg-gradient-to-t from-white via-white to-transparent">
          {title}
        </div>
      </div>
    </Link>
  )
}

const MiniatureGalleryHome = () => (
  <div>
    <Hero>
      <div className="text-5xl">Miniature Gallery</div>
      <p className="my-4">
        These are some minitures I painted. I&apos;m not the best but I&apos;m
        certainly proud of them!
      </p>
      <p className="my-4">
        The project are orders from most recent to oldest. Within the projects
        the photos are ordered from &quot;finished product&quot; to start of
        painting.
      </p>
    </Hero>

    <div className="content grid grid-cols-3 gap-4">
      {data.map((project: ProjectContent) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
)

export default MiniatureGalleryHome
