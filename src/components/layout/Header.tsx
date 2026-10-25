import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import './Header.css'

const Header = () => {
  const [headerHidden, setHeaderHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY)
    let distance = 0

    const handleScroll = () => {
      // Clamp overscroll so bouncing at the bottom doesn't reveal the header.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const currentY = Math.min(maxY, Math.max(0, window.scrollY))
      const delta = currentY - previousY
      previousY = currentY

      if (currentY <= (headerRef.current?.offsetHeight ?? 0)) {
        distance = 0
        setHeaderHidden(false)
        return
      }

      if (delta === 0) return
      distance = Math.sign(delta) === Math.sign(distance) ? distance + delta : delta

      // Ignore tiny movements to avoid flickering when direction changes.
      if (Math.abs(distance) >= 12) {
        const hasFocus = headerRef.current?.contains(document.activeElement)
        setHeaderHidden(distance > 0 && !hasFocus)
        distance = 0
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`site-header${headerHidden ? ' site-header--hidden' : ''}`}
      onFocus={() => setHeaderHidden(false)}
    >
      <Navbar />
    </header>
  )
}

export default Header
