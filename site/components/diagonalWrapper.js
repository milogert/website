import styles from './diagonalWrapper.module.css'

const defaultBackground = 
  { backgroundImage: 'linear-gradient(45deg, #FFC200, #FFEB00)' }

const DiagonalWrapper = ({
  background = defaultBackground,
  children,
}) =>
  <div className={styles.diagonal} style={background}>
    <div className={styles.content}>
      { children }
    </div>
  </div>

export default DiagonalWrapper
