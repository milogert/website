/* eslint-disable unicorn/filename-case */
import React, { useRef, useState } from 'react'
import { useMount } from 'react-use'
import * as rawData from 'data/project.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const data = Array.from(rawData)

type ProjectImageProps = {
  image: Image
  idx: number
}

const ProjectImage = (props: ProjectImageProps) => {
  const { image, idx } = props
  const [zoomed, setZoomed] = useState(false)
  const imageRef = useRef<HTMLDivElement>()

  useMount(() => {
    if (imageRef.current) {
      setTimeout(() => {
        imageRef.current.classList.add('opacity-100')
        imageRef.current.classList.remove('opacity-0')
      }, 200 * idx)
    }
  })

  return (
    <>
      <div
        className="aspect-square w-full bg-cover cursor-zoom-in transition-opacity duration-500 opacity-0 rounded"
        style={{ backgroundImage: `url(${image.fields.file.url})` }}
        onClick={() => setZoomed(true)}
        ref={imageRef}
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
    <div className="fixed z-50 h-screen w-screen inset-0 p-2" onClick={unzoom}>
      <div className="absolute inset-0 bg-brand/70 backdrop-blur-sm flex justify-center items-center cursor-zoom-out ">
        <div className="rounded object-fill overflow-hidden m-4 my-20 md:my-4 md:mx-20 max-h-[calc(100vh-1rem)] max-w-fit">
          <img src={image.fields.file.url} className="object-bottom" />
        </div>
      </div>
      <button className="absolute text-primary text-4xl flex p-4 right-0" type="button">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

type MiniatureProjectType = {
  project: ProjectContent
}

const MiniatureProject = ({ project }: MiniatureProjectType) => {
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
