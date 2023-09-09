'use client'

import Link from 'next/link'
import Image from 'next/image'
import portRedImg from '../../public/red_port_clean.svg'
import portWhiteImg from '../../public/white_port_clean.svg'
import logoImg from '../../public/logo.png'
import { usePathname } from 'next/navigation'

import styles from './navigation.module.scss'

const IMG_SIZE = 25

function Navigation({ headerInView, executeScroll }) {
  const pathname = usePathname()
  return (
    <div className={styles.navigation}>
      <div>
        {headerInView ? (
          <div className={styles.leftItemText}>
            <Link href="/">[114]</Link>
          </div>
        ) : (
          <div className={styles.leftItemLogo}>
            <Link href="/">
              <Image src={logoImg} alt="114" width={50} height={26} />
            </Link>
          </div>
        )}
      </div>
      <div className={styles.rightItem}>
        <div className={styles.theSound}>
          {pathname === '/studio' ? (
            <>
              <Link href="/#first-section" scroll={false}>
                The Sound
              </Link>
              <Link href="/#first-section" scroll={false}>
                <div>
                  <Image
                    src={portRedImg}
                    alt="The Sound"
                    height={IMG_SIZE}
                    width={IMG_SIZE}
                    style={{
                      margin: '0 8px',
                    }}
                  />
                  <div className={styles.blackDot} />
                </div>
              </Link>
            </>
          ) : (
            <>
              <div
                onClick={executeScroll}
                className={styles.theSoundHomeSelector}
              >
                The Sound
              </div>
              <div
                onClick={executeScroll}
                className={styles.theSoundHomeSelector}
              >
                <Image
                  src={portRedImg}
                  alt="The Sound"
                  height={IMG_SIZE}
                  width={IMG_SIZE}
                />
                <div className={styles.blackDotContainer}>
                  <div className={styles.blackDot} />
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.theStudio}>
          <Link href="/studio">
            <Image
              src={portWhiteImg}
              alt="The Studio"
              height={IMG_SIZE}
              width={IMG_SIZE}
              style={{
                margin: '0 8px',
              }}
            />
          </Link>
          <Link href="/studio">The Studio</Link>
        </div>
      </div>
    </div>
  )
}

export { Navigation }
