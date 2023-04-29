import styles from './page.module.css'
import { Navigation } from '@/components/navigation'

export default function Studio() {
  return (
    <div>
      <Navigation headerInView={false} />
      <div className={styles.main}>STUDIO PAGE</div>
    </div>
  )
}
