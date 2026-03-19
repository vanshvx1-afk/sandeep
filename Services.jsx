import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    let mx = -100, my = -100
    let rx = -100, ry = -100

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const lerp = (a, b, t) => a + (b - a) * t

    let raf
    const animate = () => {
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)

      if (dot)  { dot.style.left  = mx - 4 + 'px'; dot.style.top  = my - 4 + 'px' }
      if (ring) { ring.style.left = rx - 18 + 'px'; ring.style.top = ry - 18 + 'px' }

      raf = requestAnimationFrame(animate)
    }
    animate()

    const enterLink = () => {
      dot?.classList.add('scale-150')
      ring?.classList.add('scale-150', 'opacity-100', '!border-cyan-400')
    }
    const leaveLink = () => {
      dot?.classList.remove('scale-150')
      ring?.classList.remove('scale-150', 'opacity-100', '!border-cyan-400')
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role=button]').forEach(el => {
      el.addEventListener('mouseenter', enterLink)
      el.addEventListener('mouseleave', leaveLink)
    })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot  hidden lg:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" aria-hidden="true" />
    </>
  )
}
