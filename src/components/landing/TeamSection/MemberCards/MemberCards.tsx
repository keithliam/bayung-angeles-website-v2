import { useCallback, useRef } from 'react'
import styled from '@emotion/styled'
import { ClassNames, css } from '@emotion/react'
import SwiperCore, { EffectCards, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardNavButton from './CardNavButton'
import MemberCard from './MemberCard/MemberCard'
import {
  MEDIAQUERY,
  TEAM_CARDS_BACKGROUND_COLOR,
  TEAM_CARDS_BORDER_RADIUS,
  TEAM_CARDS_BREAKPOINT_MOBILE,
  TEAM_CARDS_SHADOW,
} from '../../../../constants'
import { allMembers } from '../../../../data/team'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

interface Props {
  activeMemberIndex: number
  setSwiper: (swiper: SwiperCore) => void
  onMemberSlideChange: (swiper: SwiperCore) => void
}

const Container = styled.div`
  flex: 1;
  margin-left: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${MEDIAQUERY.LARGE} {
    margin-left: 26px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-left: 24px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-left: 22px;
  }

  @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
    margin-left: 0;
  }
`

const cardsContainerStyles = css`
  width: 100%;
  max-width: 600px;

  ${MEDIAQUERY.LARGE} {
    max-width: 450px;
  }

  ${MEDIAQUERY.SMALL} {
    max-width: 400px;
  }

  ${MEDIAQUERY.TABLET} {
    max-width: 340px;
  }

  @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
    max-width: 400px;
  }

  ${MEDIAQUERY.MOBILE} {
    max-width: 330px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
`

const memberCardStyles = `
  border-radius: ${TEAM_CARDS_BORDER_RADIUS};
  background-color: ${TEAM_CARDS_BACKGROUND_COLOR};
  box-shadow: ${TEAM_CARDS_SHADOW};
  overflow: hidden;
  position: relative;
`

const MemberCards = ({ activeMemberIndex, setSwiper, onMemberSlideChange }: Props) => {
  const swiperRef = useRef<SwiperCore>()

  const handleCardContentScroll = useCallback(() => swiperRef.current?.autoplay.stop(), [])

  return (
    <Container>
      <CardNavButton xDirection="left" swiperRef={swiperRef} />
      <ClassNames>
        {({ css: generateCss }) => (
          <Swiper
            onSwiper={swiper => {
              swiperRef.current = swiper
              setSwiper(swiper)
            }}
            css={cardsContainerStyles}
            modules={[EffectCards, Autoplay, Pagination]}
            effect="cards"
            speed={750}
            pagination
            grabCursor
            autoHeight
            onSlideChange={onMemberSlideChange}
          >
            {allMembers.map((member, index) => (
              // SwiperSlide does not like being nested inside another component
              <SwiperSlide key={member.name} className={generateCss(memberCardStyles)}>
                <MemberCard
                  memberIndex={index}
                  onCardContentScroll={handleCardContentScroll}
                  disableScroll={index !== activeMemberIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </ClassNames>
      <CardNavButton xDirection="right" swiperRef={swiperRef} />
    </Container>
  )
}

export default MemberCards
