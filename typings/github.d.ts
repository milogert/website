type RepoError = {
  message: string
  code: string
}

type Repo = {
  description: string
  name: string
  homepageUrl: string
  id: string
  licenseInfo: LicenseInfo
  url: string
  languages: string[]
  repositoryTopics: string[]
  screenshots: string[]
}

type LicenseInfo = {
  name: string
  nickname: string
  url: string
}
