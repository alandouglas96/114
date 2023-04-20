import './globals.css'
import Link from 'next/link'
import styles from './layout.module.css'

export const metadata = {
  title: '114',
  description: '114 Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.navigation}>
          <div className={styles.item} style={{ width: '100px' }}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.item}>
            <Link href="/">[114]</Link>
          </div>
          <div className={styles.item} style={{ width: '100px' }}>
            <Link href="/studio">The Studio</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
