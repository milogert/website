import DiagonalWrapper from './diagonalWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Carousel } from 'react-responsive-carousel'

const bgColor = color => ({ backgroundColor: color })

const RepoRow = ({
  name,
  description,
  url,
  homepageUrl,
  languages,
  license,
  repositoryTopics,
  screenshots,
  wrapRow,
}) =>
  <DiagonalWrapper
    background={wrapRow
      ? { backgroundImage: 'linear-gradient(45deg, #FFC200, #FFEB00)' }
      : {
        backgroundColor: 'white',
      }
    }
  >
    <div className="row">
      <div className="flex justify-between">
        <div>
          <code className="text-3xl mr-4">{name}</code>
          <a className="mr-4" href={url}><span className="w-4 h-4 inline-block">
            <FontAwesomeIcon icon={faGithub} /></span>
            <span className="ml-2 hidden md:inline">View the code</span>
          </a>
          { homepageUrl &&
            <a className="mr-4" href={homepageUrl}>
              <span className="w-4 h-4 inline-block">
                <FontAwesomeIcon icon={faLink} />
              </span>
              <span className="ml-2 hidden md:inline">See it online</span>
            </a>
          }
        </div>
      </div>

      <div className="content">
        <p>{description}</p>

        <div className="my-4">
          <Carousel renderThumbs={() => null}>
            { screenshots.map(url =>
              <div className="h-full" key={url}>
                <img className="object-contain object-center w-[30rem] h-96" src={url} />
              </div>
            )}
          </Carousel>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        <div className="mb-2">
          { languages.map(({ name, color }, idx) =>
            <span
              key={idx}
              style={bgColor(color)}
              className="rounded px-2 py-1 mx-1 text-sm"
            >
              <span style={{ color }} className="mix-blend-plus-lighter">{ name }</span>
            </span>
          )}
        </div>
        <div className="mb-2">
          { repositoryTopics.map(({ topic }, idx) =>
            <span key={idx} className="rounded bg-gray-500 text-gray-50 px-2 py-1 mx-1 text-sm">{ topic }</span>
          )}
        </div>
      </div>
    </div>
  </DiagonalWrapper>

export default RepoRow
