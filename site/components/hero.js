import DiagonalWrapper from './diagonalWrapper'
import styles from './hero.module.css'

const Hero = ({ children }) =>
  <div className={styles.hero}>
    <DiagonalWrapper background={{ color: 'white', backgroundColor: '#5B55F3' }}>
      {children}
    </DiagonalWrapper>
  </div>

export default Hero
