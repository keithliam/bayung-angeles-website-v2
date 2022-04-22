import React, { RefObject, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import PhotoCredit from '../../PhotoCredit'
import { useSectionVisibilityObserver } from '../../../hooks'
import { registerScrollResizeEventListeners } from '../../../helpers'

interface Props {
  sectionRef: RefObject<HTMLElement>
}

const BackgroundAnimation = styled.div<{ visible: boolean; scale: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transition: opacity 1s ease-in-out, filter 3s ease-out;
  opacity: 0;
  filter: blur(10px);
  ${({ visible }) =>
    visible &&
    `
    opacity: 0.4;
    filter: blur(0);
  `}
  ${({ scale }) => `
    transform: scale(${scale})
  `}
`
const backgroundImageStyles = css`
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  pointer-events: none;
`

const LogoAnimation = styled.div<{ visible: boolean }>`
  transition: opacity 1s ease-in-out;
  opacity: 0;
  ${({ visible }) => visible && 'opacity: 0.4;'}
`
const logoImageStyles = css`
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 30vh;
  max-width: 50vw;
  transition: filter 3s ease-out;
  pointer-events: none;
  animation: wing-fly 3s cubic-bezier(0.31, 0.02, 0.36, 0.94) infinite alternate;
  transform: translate(-33%, calc(-50% - 15vh));
  filter: blur(0) drop-shadow(0 0 20px rgba(255, 255, 255, 0.7));

  @keyframes wing-fly {
    0% {
      transform: translate(-33%, calc(-50% - 15vh));
      transition: filter 3s ease-out;
      filter: blur(0) drop-shadow(0 0 20px rgba(255, 255, 255, 0.7));
    }

    100% {
      transform: translate(-33%, calc(-50% - 15vh - 30px));
      filter: blur(0) drop-shadow(0 0 40px rgba(255, 255, 255, 1));
    }
  }
`

const photoCreditStyles = css`
  transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:not(:hover) {
    opacity: 0;
  }
`
const photoCreditShownStyles = css`
  &:not(:hover) {
    opacity: 1;
  }
`

const Background = ({ sectionRef }: Props) => {
  const entireSectionInView = useSectionVisibilityObserver(sectionRef)
  const [showLogo, setShowLogo] = useState(false)
  const [backgroundScale, setBackgroundScale] = useState(1)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (window && sectionRef.current) {
        const viewportHeight = window.innerHeight
        const { top } = sectionRef.current.getBoundingClientRect()

        setShowLogo(entireSectionInView && top + viewportHeight * 0.2 < 0)

        const scrolledPastSectionTop = top < 0
        const newScale = scrolledPastSectionTop ? 1 + -top / 50_000 : 1
        const roundedScale = Math.floor(newScale * 1000) / 1000
        setBackgroundScale(roundedScale)
      }
    }
    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [sectionRef, entireSectionInView])

  return (
    <>
      <BackgroundAnimation visible={entireSectionInView} scale={backgroundScale}>
        <StaticImage
          css={backgroundImageStyles}
          placeholder="blurred"
          layout="fullWidth"
          src="../../images/ba-illus.jpg"
          alt="illustration"
        />
      </BackgroundAnimation>
      <LogoAnimation visible={showLogo}>
        <StaticImage
          css={[logoImageStyles]}
          transformOptions={{ fit: 'contain' }}
          backgroundColor="transparent"
          layout="constrained"
          placeholder="blurred"
          formats={['png']}
          height={200}
          width={300}
          src="../../images/ba-logo-mini-white.png"
          alt="logo"
        />
      </LogoAnimation>
      <PhotoCredit
        css={[photoCreditStyles, showLogo && photoCreditShownStyles]}
        name="Brandon Evangelista"
        link="https://bit.ly/bayung-angeles-portfolio-brandon"
      />
    </>
  )
}

export default Background
