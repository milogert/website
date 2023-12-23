import Link from 'next/link'
import React from 'react'
import * as rawData from 'data/project.json'

const data = Array.from(rawData)

const ProjectCard = (props: ProjectContent) => {
  const { title, splashImage } = props

  return (
    <Link
      href={`/miniatures/${props.id}`}
      className="flex items-center gap-2 rounded p-2 transition-colors hover:bg-hover"
    >
      <img
        className="h-24 w-24 object-cover rounded-full"
        src={splashImage?.fields.file.url}
        alt="avatar"
      />
      <h2 className="text-2xl">{title}</h2>
    </Link>
  )
}

const MiniatureGalleryHome = () => (
  <div className="flex flex-col gap-8">
    <h1 className="text-5xl">Miniature Gallery</h1>
    <p>
      These are some minitures I painted. I&apos;m not the best but I&apos;m
      certainly proud of them!
    </p>
    <p>
      The project are orders from most recent to oldest. Within the projects the
      photos are ordered from &quot;finished product&quot; to start of painting.
    </p>

    {data.map((project: ProjectContent) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
)

export default MiniatureGalleryHome
