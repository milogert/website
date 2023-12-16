type RepoError = {
  message: string
  code: string
}

type Repo = {
  description: string
  name: string
  homepageUrl: string
  id: string
  license: LicenseInfo
  url: string
  languages: {
    name: string
    color: string
  }[]
  repositoryTopics: { topic: string }[]
  screenshots: string[]
}

type LicenseInfo = {
  name: string
  nickname: string
  url: string
}
