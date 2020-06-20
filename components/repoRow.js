import styles from './repoRow.module.css'
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
  homepage_url,
  languages,
  license,
  topics,
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
    <div className={styles.row}>
      <div className={styles.header}>
        <div>
          <code className={styles.name}>{name}</code>
          <a className={styles.link} href={url}><FontAwesomeIcon icon={faGithub} /> View the code</a>
          { homepage_url &&
            <a className={styles.link} href={homepage_url}><FontAwesomeIcon icon={faLink} /> See it online</a>
          }
        </div>
      </div>

      <div className={styles.content}>
        <p>{description}</p>

        <div className={styles.carousel}>
          <Carousel renderThumbs={() => null}>
            { screenshots.map(url =>
              <div className={styles.screenshotHolder} key={url}>
                <img className={styles.screenshot} src={url} />
              </div>
            )}
          </Carousel>
        </div>
      </div>

      <div className={`${styles.footer} flex-col md:flex-row`}>
        <div className={styles.languages}>
          { languages.map(({ name, color }, idx) =>
            <span
              key={idx}
              style={bgColor(color)}
              className={styles.language}
            >
              <span className={styles.tagText}>{ name }</span>
            </span>
          )}
        </div>
        <div className={styles.topics}>
          { topics.map(({ name }, idx) =>
            <span key={idx} className={styles.topic}>{ name }</span>
          )}
        </div>
      </div>
    </div>
  </DiagonalWrapper>

export default RepoRow
