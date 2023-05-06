import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const ScrollHandleThtottle = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', ScrollHandleThtottle)
    return () => {
      window.removeEventListener('scroll', ScrollHandleThtottle)
    }
  }, [])

  return {
    scrollX,
    scrollY
  }
}
