
import styles from './NotFound.module.scss'

function NotFound() {
    return <div className={styles.notfound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Oops! Page not found</p>
      <p className={styles.description}>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className={styles.homeBtn}>
        Go back Home
      </a>
    </div>
}

export default NotFound