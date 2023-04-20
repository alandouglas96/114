'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './content_item.module.css'

export default function ContentItem({ index, setViewInfoIndex }) {
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
      href={`/project/${index}`}
      data-index={index}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      className={styles.contentItem}
    >
      <div
        style={{
          width: '50px',
          height: '20px',
          backgroundColor: 'white',
          zIndex: '50',
          textAlign: 'center',
          position: 'relative',
          // left: '-110px',
          top: '25px',
          transform: `rotate(${(isHover ? 260 : 270) + (index % 3) * 10}deg)`,
        }}
      >
        114
      </div>
      Project num: {index}
    </Link>
  )
}
