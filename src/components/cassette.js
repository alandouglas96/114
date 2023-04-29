'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './cassette.module.css'

function Cassette({ index, setViewInfoIndex }) {
  const [isHover, setIsHover] = useState(false)

  const handleOnMouseOver = (e) => {
    setIsHover(true)
    setViewInfoIndex(e.target.attributes[0].nodeValue)
  }
  const handleOnMouseLeave = (e) => {
    setIsHover(false)
    setViewInfoIndex(0)
  }

  return (
    <Link
      href="/"
      data-index={index}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      className={styles.contentItem}
    >
      <div
        style={{
          color: 'black',
          fontSize: '14px',
          fontFamily: 'simplon-mono-medium',
          width: '50px',
          height: '20px',
          backgroundColor: '#dcd4be',
          zIndex: '50',
          textAlign: 'center',
          position: 'relative',
          top: '25px',
          transform: `rotate(${(isHover ? 260 : 270) + (index % 3) * 10}deg)`,
          transition: 'all 0.2s ease-in-out',
        }}
      >
        114
      </div>
      Project num: {index}
    </Link>
  )
}

export { Cassette }
