'use client'

import Link from 'next/link'
import styles from './content_item.module.css'

export default function ContentItem({ index, setViewInfoIndex }) {
  const handleOnMouseOver = (e) => {
    setViewInfoIndex(e.target.attributes[0].nodeValue)
  }
  const handleOnMouseLeave = (e) => {
    setViewInfoIndex(0)
  }
  return (
    <Link
      href=""
      data-index={index}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      className={styles.contentItem}
    >
      Project num: {index}
    </Link>
  )
}
