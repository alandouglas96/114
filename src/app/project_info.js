import Image from 'next/image'
import gif from '../../public/iberia_1.gif'
import styles from './project_info.module.css'

export default function ProjectInfo({ isShowing, index }) {
  return (
    <div
      style={{
        display: isShowing ? 'block' : 'none',
      }}
      className={styles.projectInfo}
    >
      THIS IS THE PROJECT INFO for: {index}
      <Image src={gif} alt="Iberia gif" height={100} />
    </div>
  )
}
