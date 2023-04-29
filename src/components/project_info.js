import Image from 'next/image'
import gif from '../../public/iberia_1.gif'
import styles from './project_info.module.css'

function ProjectInfo({ isShowing, index }) {
  return (
    <div
      style={{
        opacity: true ? '100%' : '0%',
        transition: 'all 0.2s ease-in-out',
      }}
      className={styles.projectInfo}
    >
      THIS IS THE PROJECT INFO for: {index}
      <Image src={gif} alt="Iberia gif" height={100} />
    </div>
  )
}

export { ProjectInfo }
