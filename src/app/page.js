'use client'

import { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useScrollPosition from '@/hooks/useScrollPosition'

import { Header } from '@/components/header'
import { Cassette } from '@/components/cassette'
import { ProjectInfo } from '@/components/project_info'
import { Navigation } from '@/components/navigation'
import { ContactInfo } from '@/components/contact_info'

import styles from './page.module.scss'

const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// const contentPreviews = [1]

export default function Home() {
  const contentSectionRef = useRef(null)

  const [viewInfoIndex, setViewInfoIndex] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const [scrollRef, scrollPercentage] = useScrollPosition()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '-10px',
  })

  const toggleCallMe = () => {
    if (isContactOpen) setIsContactOpen(false)
    else {
      setIsContactOpen(true)
      executeScroll()
    }
  }

  const executeScroll = () => {
    contentSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const [scrollExecuted, setSrollExecuted] = useState(false)

  useEffect(() => {
    if (!scrollExecuted && window && window.location.hash) {
      executeScroll()
      setSrollExecuted(true)
    }
  })

  // PLAYER LOGIC - START
  const [openPlayer, setOpenPlayer] = useState(0)

  const togglePlayer = (index) => {
    setOpenPlayer(index)
  }

  // const closePlayer

  // PLAYER LOGIC - END

  return (
    <div>
      <Navigation headerInView={inView} executeScroll={executeScroll} />
      <main className={styles.main} ref={scrollRef}>
        <div ref={ref}>
          <Header />
        </div>
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
                  openPlayer={openPlayer}
                  togglePlayer={togglePlayer}
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
            <ContactInfo isOpen={isContactOpen} closeContact={toggleCallMe} />
          </div>
        </div>

        <div onClick={toggleCallMe} className={styles.callMe}>
          CALL ME 🙂
        </div>
        <div className={styles.volume}>
          <div
            style={{
              height: '60px',
              width: '4px',
              transform: `rotate(${(270 * scrollPercentage) / 100}deg)`,
            }}
          >
            <div
              style={{ height: '20px', width: '4px', backgroundColor: 'black' }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  )
}
