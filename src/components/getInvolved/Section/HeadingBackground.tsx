import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { MEDIAQUERY } from '../../../constants'

const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`
const imageStyles = css`
  position: absolute;
  width: 100%;
  transform: translateY(50%);
  bottom: 50%;

  ${MEDIAQUERY.MOBILE} {
    transform: none;
    bottom: unset;
    top: 0;
  }
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 50%);
`

const HeadingBackground = () => (
  <>
    <ImageContainer>
      <StaticImage
        css={imageStyles}
        layout="fullWidth"
        placeholder="blurred"
        src="../../../images/angeles-city-cover.jpg"
        alt=""
      />
    </ImageContainer>
    <GradientOverlay />
  </>
)

export default HeadingBackground
