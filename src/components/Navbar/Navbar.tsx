import React, { useEffect, useState } from 'react'
import { ClassNames } from '@emotion/react'
import { CSSTransition } from 'react-transition-group'
import PlainNavbar from './PlainNavbar'
import FixedNavbar from './FixedNavbar'
import { registerScrollResizeEventListeners } from '../../helpers'

const fixedNavbarTransitionStyles = {
  enterExitExitActive: `
    transition: transform 0.75s ease-in-out;
    transform: translateY(-100%);
  `,
  enterActive: `
    transition: transform 0.5s cubic-bezier(0, 0.55, 0.45, 1);
    transform: translateY(0);
  `,
}

const Navbar = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      setShowFixedNavbar(window.innerHeight * 0.4 <= window.scrollY)
    }
    handleScrollResizeEvent()

    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [])

  return (
    <>
      <PlainNavbar />
      <ClassNames>
        {({ css: generateCss }) => (
          <CSSTransition
            in={showFixedNavbar}
            classNames={{
              enter: generateCss(fixedNavbarTransitionStyles.enterExitExitActive),
              enterActive: generateCss(fixedNavbarTransitionStyles.enterActive),
              exit: generateCss(fixedNavbarTransitionStyles.enterExitExitActive),
              exitActive: generateCss(fixedNavbarTransitionStyles.enterExitExitActive),
            }}
            timeout={750}
            unmountOnExit
          >
            <FixedNavbar />
          </CSSTransition>
        )}
      </ClassNames>
    </>
  )
}

export default Navbar
