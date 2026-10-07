import { useEffect, useRef, useState } from 'react'

function Reveal({ children, delay = 0 }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(() => (
    typeof window !== 'undefined' &&
    (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  ))

  useEffect(() => {
    const element = elementRef.current
    if (!element || visible) return undefined

    const fallbackTimer = window.setTimeout(() => setVisible(true), 1200)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.clearTimeout(fallbackTimer)
    }
  }, [visible])

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? 'is-visible' : ''}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
