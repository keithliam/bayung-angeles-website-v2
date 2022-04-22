import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { registerScrollResizeEventListeners } from '../../helpers'
import { MEDIAQUERY, FONT_FAMILY, COLORS, PADDING, HEADING_LINE_STYLES } from '../../constants'

const SectionContainer = styled.div`
  width: 100%;
  padding: ${PADDING.PAGE_DEFAULT};
  background-color: ${COLORS.BA_GOLD};
  position: relative;
  overflow: hidden;

  ${MEDIAQUERY.SMALL} {
    padding: ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    padding: ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: ${PADDING.PAGE_MOBILE};
  }
`

const LogoAnimation = styled.div<{ visible: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 108%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 2s ease-in;
  aspect-ratio: 1;
  ${({ visible }) =>
    visible &&
    `
    opacity: 0.3
  `}
`
const logoImageStyles = css`
  height: 100%;
  transform: translate(16%, 29%);
  float: right;
`

const QuoteBody = styled.div`
  ${HEADING_LINE_STYLES}
  color: white;
  position: relative;

  ${MEDIAQUERY.TABLET} {
    font-size: 32px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 26px;
  }

  @media (max-width: 415px) {
    font-size: 24px;
  }

  @media (max-width: 380px) {
    font-size: 22px;
  }
`

const QuoteLine = styled.span`
  display: block;
`

const HighlightText = styled.span<{ visible: boolean; timeout: number }>`
  transition: color 2.5s ease-out;
  ${({ visible, timeout }) =>
    visible &&
    `
    color: ${COLORS.BA_BLUE};
    transition-delay: ${timeout}ms;
  `}
`

const QuoteCredits = styled.span`
  display: block;
  margin-top: 35px;
  font-family: ${FONT_FAMILY.HEADING};
  font-size: 24px;
  letter-spacing: 0.065em;
  color: white;

  ${MEDIAQUERY.LARGE} {
    margin-top: 33px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-top: 28px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 22px;
    margin-top: 20px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 20px;
    margin-top: 16px;
  }
`

const CoverSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [imageAppear, setImageAppear] = useState(false)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (window && sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect()
        const newImageAppear = top <= window.innerHeight / 2
        setImageAppear(newImageAppear)
      }
    }
    const unregisterScrollResizeEventListeners =
      registerScrollResizeEventListeners(handleScrollResizeEvent)

    return () => {
      unregisterScrollResizeEventListeners()
    }
  }, [])

  return (
    <SectionContainer ref={sectionRef}>
      <LogoAnimation visible={imageAppear}>
        <StaticImage
          css={logoImageStyles}
          src="../../images/ba-logo-blue.png"
          width={490}
          placeholder="blurred"
          alt="BA logo"
        />
      </LogoAnimation>
      <QuoteBody>
        <QuoteLine>We need leaders</QuoteLine>
        <QuoteLine>not in love with money</QuoteLine>
        <QuoteLine>
          but in love with{' '}
          <HighlightText visible={imageAppear} timeout={500}>
            justice
          </HighlightText>
          .
        </QuoteLine>
        <QuoteLine>Not in love with publicity</QuoteLine>
        <QuoteLine>
          but in love with{' '}
          <HighlightText visible={imageAppear} timeout={2500}>
            humanity.
          </HighlightText>
        </QuoteLine>
      </QuoteBody>
      <QuoteCredits>Martin Luther King Jr.</QuoteCredits>
    </SectionContainer>
  )
}

export default CoverSection
