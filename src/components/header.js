import Image from 'next/image'
import logoImg from '../../public/logo.png'
import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.headerSection}>
      <h1 className={styles.h1}>The sound studio</h1>
      <Image src={logoImg} alt="114" width={100} height={65} />
      <h3 className={styles.h3}>
        direct <br /> post production sound
      </h3>
    </div>
  )
}

export { Header }
