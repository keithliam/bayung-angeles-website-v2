import { RefObject, useEffect, useState } from 'react'
import { registerScrollResizeEventListeners } from './helpers'

export const useSectionVisibilityObserver = (sectionRef: RefObject<HTMLElement>) => {
  const [entireSectionInView, setEntireSectionInView] = useState(false)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (window && sectionRef.current) {
        const viewportHeight = window.innerHeight
        const { top, bottom } = sectionRef.current.getBoundingClientRect()

        const scrolledPastSectionTop = top < 0
        setEntireSectionInView(scrolledPastSectionTop && bottom - viewportHeight > 0)
      }
    }
    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [sectionRef])

  return entireSectionInView
}

export const useSubsectionIndexObserver = (
  sectionRef: RefObject<HTMLElement>,
  lastSubsectionIndex: number
) => {
  const [subsectionIndex, setSubsectionIndex] = useState(0)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (window && sectionRef.current) {
        const viewportHeight = window.innerHeight
        const { top } = sectionRef.current.getBoundingClientRect()

        const newSubsectionIndex = (() => {
          const nthSubsection = Math.floor(-top / viewportHeight)
          if (nthSubsection < 0) return 0
          if (nthSubsection > lastSubsectionIndex) return lastSubsectionIndex
          return nthSubsection
        })()
        setSubsectionIndex(newSubsectionIndex)
      }
    }
    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [sectionRef, lastSubsectionIndex])

  return subsectionIndex
}
