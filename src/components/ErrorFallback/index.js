import styles from './ErrorFallback.module.scss'

const ErrorFallback = () => (
  <div className={styles.error}>
    <p>Something went wrong. Please try again.</p>
  </div>
)

export default ErrorFallback
