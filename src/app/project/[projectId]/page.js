import styles from './page.module.css'

export default function Project({ params }) {
  return <div className={styles.main}>PROJECT PAGE for: {params.projectId}</div>
}
