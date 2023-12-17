/* eslint-disable unicorn/filename-case */
import React, { useState } from 'react'
import * as rawData from 'data/project.json'

const data = Array.from(rawData)

type ProjectImageProps = {
  image: Image
}

const ProjectImage = (props: ProjectImageProps) => {
  const { image } = props
  const [zoomed, setZoomed] = useState(false)

  return (
    <>
      <div
        className="aspect-square w-full bg-cover cursor-zoom-in"
        style={{ backgroundImage: `url(${image.fields.file.url})` }}
        onClick={() => setZoomed(true)}
      />
      {zoomed && <ZoomedImage image={image} unzoom={() => setZoomed(false)} />}
    </>
  )
}

type ZoomedImageProps = {
  image: Image
  unzoom: () => void
}

const ZoomedImage = (props: ZoomedImageProps) => {
  const { image, unzoom } = props

  return (
    <div className="fixed z-50 h-screen w-screen bg-black inset-0 flex justify-center items-center p-20">
      <div
        className="h-full w-full relative bg-contain bg-center bg-no-repeat cursor-zoom-out"
        style={{ backgroundImage: `url(${image.fields.file.url})` }}
        onClick={unzoom}
      />
    </div>
  )
}

type MiniatureProjectType = {
  project: ProjectContent
}

const MiniatureProject = ({ project }: MiniatureProjectType) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-5xl">{project.title}</h2>

      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex-shrink-0 w-48">
          <ProjectImage image={project.splashImage} />
        </div>

        {project.description && <p className="">{project.description}</p>}
      </div>

      <div className="">

        <div className="grid grid-cols-4 items-center">
          {project.images?.map((image: Image) => (
            <ProjectImage key={image.sys.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: data.map(({ id }) => ({ params: { projectId: id } })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const project = data.find(
    (project) => project.id === context.params.projectId,
  )
  return { props: { project } }
}

export default MiniatureProject
