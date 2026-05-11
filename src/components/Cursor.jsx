import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (curRef.current)  curRef.current.style.transform  = `translate(${mx - 5}px, ${my - 5}px)`
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const grow   = () => { if (ringRef.current) { ringRef.current.style.width = ringRef.current.style.height = '54px' } }
    const shrink = () => { if (ringRef.current) { ringRef.current.style.width = ringRef.current.style.height = '36px' } }
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor"  ref={curRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
