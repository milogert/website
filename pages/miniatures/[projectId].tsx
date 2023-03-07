/* eslint-disable unicorn/filename-case */
import { Hero } from 'components/hero'
import * as rawData from 'data/project.json'
import React, { useState } from 'react'

const data = rawData as ProjectData

type MiniatureProjectType = {
  project: ProjectContent
}

type ProjectImageProps = {
  image: Image
}

type ZoomedImageProps = {
  image: Image
  unzoom: () => void
}

const ProjectImage = (props: ProjectImageProps) => {
  const { image } = props
  const [zoomed, setZoomed] = useState(false)

  return <>
    <div
      className="h-56 w-56 bg-cover cursor-zoom-in"
      style={{ backgroundImage: `url(${image.fields.file.url})` }}
      onClick={() => setZoomed(true)}
    />
    {zoomed && <ZoomedImage image={image} unzoom={() => setZoomed(false)} />}
  </>
}

const ZoomedImage = (props: ZoomedImageProps) => {
  const { image, unzoom } = props

  return <div className="fixed z-50 h-screen w-screen bg-black inset-0 flex justify-center items-center p-20">
    <div
      className="h-full w-full relative bg-contain bg-center bg-no-repeat cursor-zoom-out"
      style={{ backgroundImage: `url(${image.fields.file.url})` }}
      onClick={unzoom}
    />
  </div>
}

const MiniatureProject = ({ project }: MiniatureProjectType) => {
  return <div>
    <Hero title={project.title}>
      {project.description && <p className="my-4">{project.description}</p>}
    </Hero>
    <div className="content">
      <div className="bg-cover h-[48rem] w-full -mt-36 mb-4 flex flex-col-reverse" style={{ backgroundImage: `url(${project.splashImage.fields.file.url})` }}>
        <div className="h-10 bg-gradient-to-t from-white via-white to-transparent" />
      </div>
      <div className="grid grid-cols-4">
        {project.images.map((image: Image) =>

          <ProjectImage key={image.sys.id} image={image} />
        )}
      </div>
    </div>
  </div>
}

export async function getStaticPaths() {
  return {
    paths: data.map(({ id }) => ({ params: { projectId: id } })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const project = data.find(project => project.id === context.params.projectId)
  return { props: { project } }
}

export default MiniatureProject
