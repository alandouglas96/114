import Image from 'next/image'
import contactCasetteImg from '../../public/contact-casette.png'
import { RxCross2 } from 'react-icons/rx'

import styles from './contact_info.module.css'

function ContactInfo({ isOpen, closeContact }) {
  return (
    <div
      className={styles.contactInfo}
      style={{
        display: 'block',
        opacity: '100%',
        bottom: isOpen ? '0' : '-720px',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <RxCross2 size={25} className={styles.cross} onClick={closeContact} />
      <div className={styles.contactInfoText}>
        <p style={{ marginBottom: '25px' }}>114thesoundstudio@gmail.com</p>
        <p style={{ marginBottom: '25px' }}>+34 659 66 90 90</p>
        <p style={{ marginBottom: '25px' }}>@114thesoundstudio</p>
        <p style={{ marginBottom: '25px' }}>Balmes street 47, 3o 1a 08004</p>
      </div>
      <Image
        src={contactCasetteImg}
        alt="The Sound"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}

export { ContactInfo }
