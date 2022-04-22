import React, { useEffect, useRef, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { ClassNames, css } from '@emotion/react'
import Sticky from 'react-stickynode'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Topic from './Topic'
import PhotoCredit from '../../PhotoCredit'
import { useSectionVisibilityObserver, useSubsectionIndexObserver } from '../../../hooks'
import { registerScrollResizeEventListeners } from '../../../helpers'
import { topics } from '../../../data/pillars'
import { COLORS, FONT_FAMILY, MEDIAQUERY, PADDING } from '../../../constants'

const PILLARS_SECTION_ID = 'pillars'

const lastTopicIndex = topics.length - 1

const SectionContainer = styled.div`
  height: ${(topics.length + 1) * 100}vh;
  width: 100%;
  background-color: ${COLORS.BA_BLUE};
`

const StickyContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 ${PADDING.PAGE_DEFAULT};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;

  ${MEDIAQUERY.LARGE} {
    padding: 0 ${PADDING.PAGE_DEFAULT};
  }

  ${MEDIAQUERY.SMALL} {
    padding: 0 ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    padding: 0 ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 0 ${PADDING.PAGE_MOBILE};
  }
`

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

const descriptionTransitionStyles = {
  enterExitExitActive: `
    transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
    opacity: 0;
  `,
  enterActive: `
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
  `,
}
const Description = styled.span`
  display: flex;
  flex-direction: column;
  font-family: ${FONT_FAMILY.BODY};
  font-size: 22px;
  margin-top: 16px;
  line-height: 1.15em;
  max-width: 80%;
  height: 2.5em;
  z-index: 100;

  ${MEDIAQUERY.SMALL} {
    margin-top: 14px;
    font-size: 21px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-top: 10px;
    font-size: 18px;
  }

  ${MEDIAQUERY.MOBILE} {
    max-width: none;
    margin-top: 8px;
    font-size: 15px;
  }
`

const PillarsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const topicIndex = useSubsectionIndexObserver(sectionRef, lastTopicIndex)
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
  }, [entireSectionInView])

  const { title, description } = topics[topicIndex]

  return (
    <SectionContainer ref={sectionRef} id={PILLARS_SECTION_ID}>
      <Sticky bottomBoundary={`#${PILLARS_SECTION_ID}`}>
        <StickyContainer>
          <ClassNames>
            {({ css: generateCss }) => (
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
                <Topic topic={title} />
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={description}
                    classNames={{
                      enter: generateCss(descriptionTransitionStyles.enterExitExitActive),
                      enterActive: generateCss(descriptionTransitionStyles.enterActive),
                      exit: generateCss(descriptionTransitionStyles.enterExitExitActive),
                      exitActive: generateCss(descriptionTransitionStyles.enterExitExitActive),
                    }}
                    timeout={1250}
                  >
                    <Description>{description}</Description>
                  </CSSTransition>
                </SwitchTransition>
              </>
            )}
          </ClassNames>
        </StickyContainer>
      </Sticky>
    </SectionContainer>
  )
}

export default PillarsSection