import { useCallback, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import SwiperCore from 'swiper'
import { StaticImage } from 'gatsby-plugin-image'
import MemberList from './MemberList'
import MemberCards from './MemberCards/MemberCards'
import WingText from '../../WingText'
import PhotoCredit from '../../PhotoCredit'
import { registerScrollResizeEventListeners } from '../../../helpers'
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  MEDIAQUERY,
  PADDING,
  TEAM_CARDS_BREAKPOINT_MOBILE,
} from '../../../constants'

const SectionContainer = styled.div`
  width: 100%;
  position: relative;
`

const backgroundImageStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: ${PADDING.PAGE_DEFAULT};
  position: relative;
  display: flex;
  flex-direction: column;
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

const IntroducingText = styled.span`
  text-transform: uppercase;
  color: white;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 0.075em;
  font-size: 23px;

  ${MEDIAQUERY.SMALL} {
    font-size: 21px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 19px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 17px;
  }
`

const Topic = styled.div`
  margin-top: 6px;
  font-size: 49px;
  font-family: ${FONT_FAMILY.HEADING};
  font-weight: ${FONT_WEIGHT.NORMAL};
  letter-spacing: 0.06em;
  color: white;

  ${MEDIAQUERY.LARGE} {
    font-size: 47px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 42px;
    margin-top: 4px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 38px;
    margin-top: 3px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 34px;
    margin-top: 2px;
  }
`
const HighlightText = styled.span`
  color: ${COLORS.BA_GOLD};
`

const Showcase = styled.div`
  flex: 1;
  margin-top: 30px;
  display: flex;

  ${MEDIAQUERY.LARGE} {
    margin-top: 26px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-top: 24px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-top: 20px;
  }

  @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
    flex-direction: column-reverse;
    align-items: center;
  }

  ${MEDIAQUERY.MOBILE} {{
    margin-top: 18px;
  }
`

const TeamSection = () => {
  const swiperRef = useRef<SwiperCore>()
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoplayActivatedOnce = useRef(false)
  const [activeMemberIndex, setActiveMemberIndex] = useState(0)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      const swiper = swiperRef.current

      if (window && sectionRef.current && swiper) {
        const { top } = sectionRef.current.getBoundingClientRect()
        const autoplayStart = top - window.innerHeight * 0.25 <= 0
        if (autoplayStart && !autoplayActivatedOnce.current) {
          // This is a workaround since Swiper only uses the first value of the autoplay prop
          swiper.autoplay.start()
          autoplayActivatedOnce.current = true
        }
      }
    }
    return registerScrollResizeEventListeners(handleScrollResizeEvent)
  }, [])

  const setSwiper = useCallback((swiper: SwiperCore) => {
    swiperRef.current = swiper
  }, [])
  const onMemberSlideChange = useCallback(
    (swiper: SwiperCore) => setActiveMemberIndex(swiper.activeIndex),
    []
  )

  return (
    <SectionContainer ref={sectionRef}>
      <StaticImage
        css={backgroundImageStyles}
        src="../../../images/ba-illus.jpg"
        alt="illustration"
      />
      <Content>
        <IntroducingText>Introducing</IntroducingText>
        <Topic>
          <HighlightText>Our </HighlightText>
          <WingText text="Dream Team" wingPosition="end" />
        </Topic>
        <Showcase>
          <MemberList activeMemberIndex={activeMemberIndex} swiperRef={swiperRef} />
          <MemberCards
            activeMemberIndex={activeMemberIndex}
            setSwiper={setSwiper}
            onMemberSlideChange={onMemberSlideChange}
          />
        </Showcase>
      </Content>
      <PhotoCredit
        name="Brandon Evangelista"
        link="https://bit.ly/bayung-angeles-portfolio-brandon"
      />
    </SectionContainer>
  )
}

export default TeamSection
