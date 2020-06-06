import styles from './diagonalWrapper.module.css'

const DiagonalWrapper = ({ color = 'yellow', angle = 11, children }) =>
  <div className={styles.diagonal}>
    <div className={styles.content}>
      { children }
    </div>
  </div>

export default DiagonalWrapper
