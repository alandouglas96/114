import Image from 'next/image'
import contactCasetteImg from '../../public/contact-casette.png'

function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <p>114thesoundstudio@gmail.com</p>
      <p>+34 659 66 90 90</p>
      <p>@114thesoundstudio</p>
      <p>Balmes street 47, 3o 1a 08004</p>
      <Image src={contactCasetteImg} alt="The Sound" width={649} height={429} />
    </div>
  )
}

export { ContactInfo }
