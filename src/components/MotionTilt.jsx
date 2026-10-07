import { useRef } from 'react'

function MotionTilt({ children, className = '', strength = 7 }) {
  const elementRef = useRef(null)

  function handlePointerMove(event) {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bounds = elementRef.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    const tiltX = (0.5 - y) * strength
    const tiltY = (x - 0.5) * strength

    elementRef.current.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`)
    elementRef.current.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`)
    elementRef.current.style.setProperty('--pointer-x', `${(x * 100).toFixed(1)}%`)
    elementRef.current.style.setProperty('--pointer-y', `${(y * 100).toFixed(1)}%`)
  }

  function handlePointerLeave() {
    const element = elementRef.current
    if (!element) return
    element.style.setProperty('--tilt-x', '0deg')
    element.style.setProperty('--tilt-y', '0deg')
    element.style.setProperty('--pointer-x', '50%')
    element.style.setProperty('--pointer-y', '50%')
  }

  return (
    <div
      ref={elementRef}
      className={`motion-tilt ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  )
}

export default MotionTilt
