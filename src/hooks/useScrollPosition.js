'use client'

// import { useEffect, useState } from 'react'

// const useScrollPosition = () => {
//   const [scrollPosition, setScrollPosition] = useState(0)

//   useEffect(() => {
//     const updatePosition = () => {
//       setScrollPosition(window.pageYOffset)
//     }
//     window.addEventListener('scroll', updatePosition)
//     updatePosition()
//     return () => window.removeEventListener('scroll', updatePosition)
//   }, [])

//   return scrollPosition
// }

// export default useScrollPosition

import { useRef, useState, useEffect } from 'react'

export default function useScrollPercentage() {
  const scrollRef = useRef(null)
  const [scrollPercentage, setScrollPercentage] = useState(NaN)

  const reportScroll = (e) => {
    setScrollPercentage(getScrollPercentage(e.target))
  }

  useEffect(() => {
    const node = scrollRef.current
    if (node !== null) {
      node.addEventListener('scroll', reportScroll, { passive: true })
      if (Number.isNaN(scrollPercentage)) {
        setScrollPercentage(getScrollPercentage(node))
      }
    }
    return () => {
      if (node !== null) {
        node.removeEventListener('scroll', reportScroll)
      }
    }
  }, [scrollPercentage])

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage]
}

function getScrollPercentage(element) {
  if (element === null) {
    return NaN
  }
  const height = element.scrollHeight - element.clientHeight
  return Math.round((element.scrollTop / height) * 100)
}
