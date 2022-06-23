import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { ClassNames, css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import NavLinks from './NavLinks'
import Logo from './Logo'
import NavContainer from './NavContainer'
import { COLORS, MEDIAQUERY } from '../../constants'

const MENU_AUTO_CLOSE_TIMEOUT = 8000

const navContainerStyles = css`
  background-color: ${COLORS.BA_BLUE};
`

const mobileNavContainerStyles = css`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;

  ${MEDIAQUERY.MOBILE} {
    padding: 0;
  }
`

const MobileNavOptions = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.BA_BLUE};
  position: relative;
  z-index: 1000;
`

const MenuButton = styled.button`
  height: 50px;
  padding: 10px;
  display: block;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease-out;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`

const menuToggleTransitionStyles = {
  enterExitExitActive: `
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  `,
  enterActive: `
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  `,
}

const menuToggleIconStyles = css`
  width: 30px;
`

const NavLinksAnimation = styled.div<{ compress: boolean }>`
  transform-origin: top;
  width: 100%;

  ${({ compress }) =>
    compress
      ? `
    transition: transform 0.75s ease-in-out;
    transform: scaleY(0);
  `
      : `
    transition: transform 0.5s cubic-bezier(0, 0.55, 0.45, 1);
    transform: scaleY(100%);
  `}
`

const FixedNavbar = () => {
  const menuAutoCloseTimer = useRef<NodeJS.Timeout | undefined>()
  const [openMenu, setOpenMenu] = useState(false)
  const [useMenu, setUseMenu] = useState(false)
  const [showCompleteLogo, setShowCompleteLogo] = useState(true)

  useEffect(() => {
    if (window) {
      const handleResizeEvent = () => {
        const viewportWidth = window.innerWidth
        const newUseMenu = viewportWidth <= 450
        setUseMenu(newUseMenu)

        if (!newUseMenu) setOpenMenu(false)

        setShowCompleteLogo(viewportWidth > 660)
      }
      handleResizeEvent()

      window.addEventListener('resize', handleResizeEvent)
      return () => window.removeEventListener('resize', handleResizeEvent)
    }

    return () => {}
  }, [])

  const stopMenuAutoCloseTimer = () => {
    if (menuAutoCloseTimer.current) {
      clearTimeout(menuAutoCloseTimer.current)
      menuAutoCloseTimer.current = undefined
    }
  }

  const startMenuAutoCloseTimer = () => {
    stopMenuAutoCloseTimer()
    menuAutoCloseTimer.current = setTimeout(() => setOpenMenu(false), MENU_AUTO_CLOSE_TIMEOUT)
  }

  useEffect(() => stopMenuAutoCloseTimer, [])

  const handleMenuClick = () => {
    if (openMenu) stopMenuAutoCloseTimer()
    else startMenuAutoCloseTimer()

    setOpenMenu(!openMenu)
  }

  const handleNavButtonClick = () => {
    if (useMenu) setOpenMenu(false)
  }

  if (useMenu) {
    return (
      <ClassNames>
        {({ css: generateCss }) => (
          <NavContainer position="fixed" css={mobileNavContainerStyles}>
            <MobileNavOptions>
              <MenuButton onClick={handleMenuClick} type="button">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={String(openMenu)}
                    classNames={{
                      enter: generateCss(menuToggleTransitionStyles.enterExitExitActive),
                      enterActive: generateCss(menuToggleTransitionStyles.enterActive),
                      exit: generateCss(menuToggleTransitionStyles.enterExitExitActive),
                      exitActive: generateCss(menuToggleTransitionStyles.enterExitExitActive),
                    }}
                    timeout={150}
                  >
                    {openMenu ? (
                      <StaticImage
                        css={menuToggleIconStyles}
                        src="../../images/close-icon.svg"
                        placeholder="blurred"
                        alt="Menu toggle"
                      />
                    ) : (
                      <StaticImage
                        css={menuToggleIconStyles}
                        src="../../images/menu-icon.svg"
                        placeholder="blurred"
                        alt="Menu toggle"
                      />
                    )}
                  </CSSTransition>
                </SwitchTransition>
              </MenuButton>
              <Logo completeLogo />
            </MobileNavOptions>
            <NavLinksAnimation compress={!openMenu}>
              <NavLinks onButtonClick={handleNavButtonClick} isMobile opaqueBG />
            </NavLinksAnimation>
          </NavContainer>
        )}
      </ClassNames>
    )
  }

  return (
    <NavContainer position="fixed" css={navContainerStyles}>
      <Logo completeLogo={showCompleteLogo} />
      <NavLinks opaqueBG />
    </NavContainer>
  )
}

export default FixedNavbar
