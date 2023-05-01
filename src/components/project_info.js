import Image from 'next/image'
import gif from '../../public/iberia_1.gif'
import styles from './project_info.module.css'

function ProjectInfo({ isShowing, index }) {
  return (
    <div
      style={{
        opacity: isShowing ? '100%' : '0%',
        transition: 'all 0.2s ease-in-out',
        textAlign: 'center',
        zIndex: 3,
      }}
      className={styles.projectInfo}
    >
      <p style={{ marginBottom: '30px' }}>nikeSB x eldiadedespues</p>
      <p style={{ marginBottom: '20px' }}>sonido en directo</p>
      <hr
        style={{
          width: '50%',
          height: '1px',
          border: 'none',
          backgroundColor: 'black',
          marginBottom: '20px',
        }}
      />
      <p>production @radicalmedia</p>
      <p>creative Direction</p>
      <p>@lookstudiosnyc</p>
      <p>director @molliemills</p>
      <p>DP @polgsala</p>
      <p> edit @rorcarrot</p>
      <p>animation @ana.projects</p>
      <p>music @lilyoakesmusic</p>

      <Image
        src={gif}
        alt="Iberia gif"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '5px',
          marginTop: '40px',
        }}
      />
      {/* TESTINGAL -> Performance test */}
      {/* <video
        width="100%"
        style={{ borderRadius: '5px', marginTop: '40px' }}
        autoPlay
        muted
        loop
        preload="none"
      >
        <source
          src="https://alandouglasphotography.s3.eu-central-1.amazonaws.com/gif_test.mov"
          type="video/mp4"
        />
      </video> */}
    </div>
  )
}

export { ProjectInfo }
