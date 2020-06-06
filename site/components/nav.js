import Link from 'next/Link'
import styles from './nav.module.css'

const Nav = () => <nav
  className={styles.nav}
>
  <div className={styles.me}>
    <img src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200" />
  </div>

  <div className={styles.linksHolder}>
    <div className={`${styles.links} ${styles.leftNav}`}>
      <Link href="/"><a className={styles.link}>Home</a></Link>
      <Link href="/projects"><a className={styles.link}>Projects</a></Link>
    </div>
    <div className={`${styles.links} ${styles.rightNav}`}>
      <a className={styles.link} href="https://github.com/milogert">Github</a>
      <a className={styles.link} href="https://linkedin.com/in/milogert">LinkedIn</a>
    </div>
  </div>
</nav>

export default Nav
