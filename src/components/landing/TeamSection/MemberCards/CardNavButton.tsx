import { MutableRefObject } from 'react'
import SwiperCore from 'swiper'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { MEDIAQUERY } from '../../../../constants'

interface Props {
  xDirection: 'left' | 'right'
  swiperRef: MutableRefObject<SwiperCore | undefined>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  @media (max-width: 840px) {
    display: none;
  }

  ${MEDIAQUERY.TABLET} {
    display: flex;
  }

  @media (max-width: 720px) {
    display: none;
  }

  &:first-of-type {
    margin-right: 30px;

    ${MEDIAQUERY.LARGE} {
      margin-right: 28px;
    }

    ${MEDIAQUERY.SMALL} {
      margin-right: 26px;
    }

    ${MEDIAQUERY.TABLET} {
      margin-right: 24px;
    }
  }

  &:last-of-type {
    margin-left: 30px;

    ${MEDIAQUERY.LARGE} {
      margin-left: 28px;
    }

    ${MEDIAQUERY.SMALL} {
      margin-left: 26px;
    }

    ${MEDIAQUERY.TABLET} {
      margin-left: 24px;
    }
  }
`

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  height: 50px;
  width: 50px;
  border-radius: 40px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.2s ease-out;
  cursor: pointer;
  position: relative;
  z-index: 20;

  &:hover {
    opacity: 0.7;
  }

  ${MEDIAQUERY.LARGE} {
    height: 40px;
    width: 40px;
  }

  ${MEDIAQUERY.SMALL} {
    height: 38px;
    width: 38px;
  }

  ${MEDIAQUERY.TABLET} {
    height: 32px;
    width: 32px;
  }
`

const CardNavButton = ({ xDirection, swiperRef }: Props) => {
  const handlePreviousCard = () => {
    const swiper = swiperRef.current

    if (swiper) {
      const { activeIndex, slides } = swiper
      const lastIndex = slides.length - 1
      swiper.slideTo(activeIndex === 0 ? lastIndex : activeIndex - 1)
    }
  }
  const handleNextCard = () => {
    const swiper = swiperRef.current
    if (swiper) {
      const { activeIndex, slides } = swiper
      const lastIndex = slides.length - 1
      swiper.slideTo(activeIndex === lastIndex ? 0 : activeIndex + 1)
    }
  }

  const isLeft = xDirection === 'left'
  const onClick = isLeft ? handlePreviousCard : handleNextCard
  const translateX = isLeft ? `-2px` : `2px`
  const rotate = isLeft ? `90deg` : `-90deg`

  return (
    <Container>
      <Button type="button" onClick={onClick}>
        <StaticImage
          css={css`
            width: 60%;
            transform: translateX(${translateX}) rotate(${rotate});
          `}
          placeholder="tracedSVG"
          src="../../../../images/carat-down.svg"
          alt="Card navigation arrow"
        />
      </Button>
    </Container>
  )
}

export default CardNavButton
