'use client'

import { useState, useRef, useEffect } from 'react'
import { Header } from '@/components/header'
import { Cassette } from '@/components/cassette'
import { ProjectInfo } from '@/components/project_info'
import { useInView } from 'react-intersection-observer'
import { Navigation } from '@/components/navigation'
import { usePathname } from 'next/navigation'

import styles from './page.module.css'

const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const contentPreviews = [1]

export default function Home() {
  const contentSectionRef = useRef(null)

  const [viewInfoIndex, setViewInfoIndex] = useState(0)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '-10px',
  })

  const executeScroll = () =>
    contentSectionRef.current.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    if (window && window.location.hash) {
      executeScroll()
    }
  })

  return (
    <div>
      <Navigation headerInView={inView} executeScroll={executeScroll} />
      <main className={styles.main}>
        <div ref={ref}>
          <Header />
        </div>
        {/* <ContentSection /> TESTINGAL*/}

        <div
          id="first-section"
          ref={contentSectionRef}
          className={styles.contentSection}
        >
          <div className={styles.contentPreview}>
            {contentItems.map((el) => {
              return (
                <ProjectInfo
                  key={el}
                  isShowing={viewInfoIndex == el}
                  index={el}
                />
              )
            })}
          </div>
          <div className={styles.cassettes}>
            {contentItems.map((el) => {
              return (
                <Cassette
                  key={el}
                  index={el}
                  setViewInfoIndex={setViewInfoIndex}
                />
              )
            })}
          </div>
          <div className={styles.contentPreview}>
            {contentItems.map((el) => {
              return (
                <ProjectInfo
                  key={el}
                  isShowing={viewInfoIndex == el}
                  index={el}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
