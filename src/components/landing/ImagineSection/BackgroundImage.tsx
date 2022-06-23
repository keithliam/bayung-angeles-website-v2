import { RefObject, useEffect, useState } from 'react'
import { ClassNames, css } from '@emotion/react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useSectionVisibilityObserver } from '../../../hooks'
import { registerScrollResizeEventListeners } from '../../../helpers'

const MAX_SCALE_UP = 0.05

interface Props {
  sectionRef: RefObject<HTMLElement>
  backgroundImage: IGatsbyImageData | undefined
  index: number
  title: string
}

const Animation = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  transition: opacity 1s ease-in-out, filter 3s ease-out;
  width: 100%;
  opacity: 0;
  filter: blur(10px);
  ${({ visible }) =>
    visible &&
    `
    opacity: 0.28;
    filter: blur(0);
  `}
`

const transitionStyles = {
  enterExitExitActive: `
    opacity: 0;
  `,
  enterActive: `
    opacity: 0.28;
  `,
}

const Scale = styled.div<{ scale: number }>`
  height: 100%;
  width: 100%;
  transition: opacity 0.5s cubic-bezier(0.87, 0.2, 0.61, 0.99);
  ${({ scale }) => `
    transform: scale(${scale});
  `}
`

const imageStyles = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`

const BackgroundImage = ({ sectionRef, backgroundImage, index, title }: Props) => {
  const entireSectionInView = useSectionVisibilityObserver(sectionRef)
  const [backgroundScale, setBackgroundScale] = useState(1)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      const top = sectionRef.current?.getBoundingClientRect().top
      if (window && top) {
        const viewportHeight = window.innerHeight
        const scrolledPastSectionTop = top < 0

        const newScale = scrolledPastSectionTop
          ? 1 + ((-top - viewportHeight * index) / viewportHeight) * MAX_SCALE_UP // Reset scale of every photo
          : 1
        const roundedScale = Math.floor(newScale * 1000) / 1000
        setBackgroundScale(roundedScale)
      }
    }
    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [index, sectionRef])

  // JSX doesn't support `undefined` used in place of an element
  // eslint-disable-next-line unicorn/no-null
  if (!backgroundImage) return null

  return (
    <ClassNames>
      {({ css: generateCss }) => (
        <Animation visible={entireSectionInView}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={title}
              classNames={{
                enter: generateCss(transitionStyles.enterExitExitActive),
                enterActive: generateCss(transitionStyles.enterActive),
                exit: generateCss(transitionStyles.enterExitExitActive),
                exitActive: generateCss(transitionStyles.enterExitExitActive),
              }}
              timeout={500}
            >
              <Scale scale={backgroundScale}>
                <GatsbyImage css={imageStyles} image={backgroundImage} alt={title} />
              </Scale>
            </CSSTransition>
          </SwitchTransition>
        </Animation>
      )}
    </ClassNames>
  )
}

export default BackgroundImage
