'use client'

/* eslint-disable unicorn/filename-case */
import React from 'react'
import { DialogContent, DialogTrigger, Dialog } from 'components/ui/dialog'
import * as rawData from 'data/project.json'

const data = Array.from(rawData)

type ProjectImageProps = {
  image: Image
  idx: number
}

const ProjectImage = (props: ProjectImageProps) => {
  const { image, idx } = props

  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square w-full">
          <img
            className="w-full h-full object-cover object-center cursor-zoom-in rounded-lg"
            src={image.fields.file.url}
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <ZoomedImage image={image} />
      </DialogContent>
    </Dialog>
  )
}

type ZoomedImageProps = {
  image: Image
}

const ZoomedImage = (props: ZoomedImageProps) => {
  const { image } = props

  return (
    <div className="sm:rounded-lg object-fill overflow-hidden max-h-[calc(100vh-1rem)] max-w-fit -m-6">
      <img src={image.fields.file.url} className="object-bottom" />
    </div>
  )
}

type MiniatureProjectType = {
  params: {
    projectId: string,
  }
}

const MiniatureProject = ({ params: { projectId } }: MiniatureProjectType) => {
  const project = data.find(
    (project) => project.id === projectId,
  )

  if (!project) {
    return null
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl">{project.title}</h1>

      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="shrink-0 w-48">
          <ProjectImage image={project.splashImage} idx={0} />
        </div>

        {project.description && <p className="">{project.description}</p>}
      </div>

      <div className="">
        <div className="grid grid-cols-4 items-center gap-2">
          {project.images?.map((image: Image, idx: number) => (
            <ProjectImage key={image.sys.id} image={image} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiniatureProject
