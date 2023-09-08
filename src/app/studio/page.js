'use client'

import { Navigation } from '@/components/navigation'
import { CassetteIlustration } from '@/components/cassette_ilustration'

import styles from './page.module.scss'

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
