type MimeTypeString = string
type DateString = string

type ProjectData = ProjectContent[]

type ProjectContent = {
  id: string
  title: string
  splashImage?: Image
  images?: Image[]
  dateStarted?: DateString
  dateCompleted?: DateString
  description?: string
}

type Image = {
  metadata: {
    tags: string[]
  }
  sys: {
    space: {
      sys: SysEntry
    }
    id: string
    type: string
    createdAt: DateString
    updatedAt: DateString
    environment: {
      sys: SysEntry
    }
    revision: number
    locale: string
  }
  fields: ImageFields
}

type SysEntry = {
  linkType: string
  type: string // "Link"
  id: string
}

type ImageFields = {
  title: string
  description: string
  file: FileEntry
}

type FileEntry = {
  url: string
  details: {
    size: number
    image: {
      height: number
      width: number
    }
  }
  fileName: string
  contentType: MimeTypeString
}
