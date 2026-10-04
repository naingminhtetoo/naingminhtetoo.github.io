import { useEffect, useRef } from 'react'

/** Reveal once; keep content visible when motion is reduced or observation is unavailable. */
export function useReveal() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) return
    if (element.getBoundingClientRect().top < window.innerHeight) return
    element.classList.add('reveal-pending')
    const reveal = () => {
      element.classList.remove('reveal-pending')
      element.classList.add('reveal-visible')
      observer.disconnect()
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal()
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' })
    const handleMotion = () => { if (motion.matches) reveal() }
    motion.addEventListener('change', handleMotion)
    observer.observe(element)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', handleMotion)
      element.classList.remove('reveal-pending', 'reveal-visible')
    }
  }, [])
  return ref
}
