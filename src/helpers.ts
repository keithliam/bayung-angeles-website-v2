export const registerScrollResizeEventListeners = (listener: () => void) => {
  if (window) {
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)
  }
  return () => {
    if (window) {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }
}
