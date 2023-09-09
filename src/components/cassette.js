'use client'

import { useState } from 'react'
import styles from './cassette.module.scss'

function Cassette({ index, setViewInfoIndex, openPlayer, togglePlayer }) {
  const [isHover, setIsHover] = useState(false)

  const handleOnMouseOver = (e) => {
    setIsHover(true)
    setViewInfoIndex(index)
  }
  const handleOnMouseLeave = (e) => {
    setIsHover(false)
    setViewInfoIndex(0)
  }

  // style={{
  //   width: openPlayer === index ? 'auto' : '100%',
  //   height: openPlayer === index ? 'auto' : '70px',
  //   transition: 'all 0.7s ease-in-out',
  // }}

  return (
    <div
      style={{
        width: openPlayer === index ? '60vw' : '100%',
        display: 'flex',
        justifyContent: 'center',
        transition: 'all 0.7s ease-in-out',
      }}
    >
      {openPlayer === index ? (
        <>
          <div
            onClick={() => togglePlayer(0)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '60vw',
                height: '100px',
                zIndex: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(225, 225, 225)',
              }}
            >
              TITLE AND INFO
            </div>
            <div
              style={{
                width: '60vw',
                height: '300px',
                backgroundColor: 'blue',
                zIndex: 30,
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              PLAYER OPEN
            </div>
          </div>
        </>
      ) : (
        <div
          data-index={index}
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
          className={styles.contentItem}
          onClick={() => {
            togglePlayer(index)
          }}
        >
          <div
            style={{
              color: 'black',
              fontSize: '14px',
              fontFamily: 'simplon-mono-medium',
              width: '50px',
              height: '20px',
              backgroundColor: '#dcd4be',
              zIndex: '50',
              textAlign: 'center',
              position: 'relative',
              top: '25px',
              transform: `rotate(${
                (isHover ? 260 : 270) + (index % 3) * 10
              }deg)`,
              transition: 'transform 0.2s ease-in-out',
              borderRadius: '5px',
              verticalAlign: 'middle',
              lineHeight: '20px',
            }}
          >
            114
          </div>
          Project num: {index}
        </div>
      )}
    </div>
  )
}

export { Cassette }
