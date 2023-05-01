'use client'

import styles from './page.module.css'
import { Navigation } from '@/components/navigation'
import { CassetteIlustration } from '@/components/cassette_ilustration'

export default function Studio() {
  return (
    <div>
      <Navigation headerInView={false} />
      <div className={styles.main}>
        STUDIO PAGE <CassetteIlustration />
      </div>
    </div>
  )
}
