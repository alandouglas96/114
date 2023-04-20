'use client'

import styles from './project_info.module.css'

export default function ProjectInfo({ isShowing, index }) {
  return (
    isShowing && (
      <div className={styles.projectInfo}>
        THIS IS THE PROJECT INFO for: {index}
      </div>
    )
  )
}
