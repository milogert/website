import styles from './repoRow.module.css'
import DiagonalWrapper from './diagonalWrapper'

const RepoRow = ({ name, description, url, homepage_url, languages, license, topics }) =>
  <DiagonalWrapper>
    <div className={styles.row}>
      <div className={styles.header}>
        <div>
          <span className={styles.name}>{name}</span>
          <a href={url}>Github</a>
          <a href={homepage_url}>Homepage</a>
        </div>
      </div>

      <div className={styles.content}>
        <p>{description}</p>

        <div className={styles.carousel}>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.languages}>
          { languages.map(({ name, color }) =>
            <span className={styles.language}>{ name }</span>
          )}
        </div>
        <div className={styles.topics}>
          { topics.map(({ name }) =>
            <span className={styles.topic}>{ name }</span>
          )}
        </div>
      </div>
    </div>
  </DiagonalWrapper>

export default RepoRow
