import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import OfficialEmoji from '../OfficialEmoji'
import Heading from '../Heading'
import CtaButton from '../CtaButton'
import { registerScrollResizeEventListeners } from '../../helpers'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY, PADDING } from '../../constants'

const FLAG_IMAGE_SOURCE = '../../images/ba-logo-flag-white.png'
const FLAG_IMAGE_ASPECT_RATIO = 1
const FLAG_IMAGE_MAX_HEIGHT = 430
const FLAG_IMAGE_MAX_WIDTH = 430

const SectionContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.BA_GOLD};
  padding: ${PADDING.PAGE_DEFAULT};
  padding-bottom: 140px;
  overflow: hidden;
  position: relative;

  ${MEDIAQUERY.LARGE} {
    padding-bottom: 110px;
  }

  ${MEDIAQUERY.SMALL} {
    padding: ${PADDING.PAGE_SMALL};
    padding-bottom: 120px;
  }

  ${MEDIAQUERY.TABLET} {
    padding: ${PADDING.PAGE_TABLET};
    padding-bottom: 200px;
  }

  ${MEDIAQUERY.MOBILE} {
    padding: ${PADDING.PAGE_MOBILE};
    padding-bottom: 230px;
  }
`

const Content = styled.div`
  flex: 1;
  color: white;
`

const headingStyles = css`
  max-width: 800px;

  ${MEDIAQUERY.LARGE} {
    max-width: 650px;
  }

  ${MEDIAQUERY.SMALL} {
    max-width: 630px;
  }
`

const SubHeading = styled.span`
  text-transform: uppercase;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 0.075em;
  font-size: 20px;
  margin-top: 8px;
  display: block;

  ${MEDIAQUERY.LARGE} {
    font-size: 18px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 16px;
    margin-top: 6px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 14px;
    margin-top: 4px;
  }
`

const ctaButtonStyles = css`
  margin-top: 28px;

  ${MEDIAQUERY.LARGE} {
    margin-top: 26px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-top: 20px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-top: 18px;
  }

  ${MEDIAQUERY.MOBILE} {
    margin-top: 16px;
  }
`

const ImageAnimation = styled.div<{ visible: boolean }>`
  pointer-events: none;
  position: absolute;
  right: calc(${PADDING.PAGE_DEFAULT} - 10px);
  bottom: -90px;
  transition: opacity 2s ease-in;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  ${MEDIAQUERY.LARGE} {
    bottom: -80px;
  }

  ${MEDIAQUERY.SMALL} {
    right: calc(${PADDING.PAGE_SMALL} - 10px);
    bottom: -65px;
  }

  ${MEDIAQUERY.TABLET} {
    right: calc(${PADDING.PAGE_TABLET} - 10px);
  }

  ${MEDIAQUERY.MOBILE} {
    right: calc(${PADDING.PAGE_MOBILE} - 10px);
  }
`

const flagImageStyles = css`
  height: ${FLAG_IMAGE_MAX_HEIGHT}px;
  aspect-ratio: ${FLAG_IMAGE_ASPECT_RATIO};
  opacity: 1;

  ${MEDIAQUERY.LARGE} {
    height: 390px;
  }

  ${MEDIAQUERY.SMALL} {
    height: 350px;
  }

  ${MEDIAQUERY.TABLET} {
    height: 310px;
  }
`

const GetInvolvedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [showFlag, setShowFlag] = useState(false)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (window && sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect()
        setShowFlag(top <= window.innerHeight / 2)
      }
    }
    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [])

  return (
    <SectionContainer ref={sectionRef}>
      <Content>
        <Heading css={headingStyles}>
          Together we can make Angeles City the best city in the country.{' '}
          <OfficialEmoji color="white" />
        </Heading>
        <SubHeading>Show your support. Join the movement.</SubHeading>
        <CtaButton
          css={ctaButtonStyles}
          color="blue"
          text="Get Involved"
          localLink="/get-involved"
        />
      </Content>
      <ImageAnimation visible={showFlag}>
        <StaticImage
          css={flagImageStyles}
          src={FLAG_IMAGE_SOURCE}
          placeholder="blurred"
          formats={['png']}
          width={FLAG_IMAGE_MAX_WIDTH}
          alt="BA Flag"
        />
      </ImageAnimation>
    </SectionContainer>
  )
}

export default GetInvolvedSection
