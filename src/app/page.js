'use client'

import { useState } from 'react'
import ContentItem from './content_item.js'
import ProjectInfo from './project_info.js'
import styles from './page.module.css'

const contentItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function Home() {
  const [viewInfoIndex, setViewInfoIndex] = useState(0)
  return (
    <main className={styles.main}>
      {contentItems.map((el) => {
        return <ContentItem index={el} setViewInfoIndex={setViewInfoIndex} />
      })}
      {contentItems.map((el) => {
        return <ProjectInfo isShowing={viewInfoIndex == el} index={el} />
      })}
    </main>
  )
}
