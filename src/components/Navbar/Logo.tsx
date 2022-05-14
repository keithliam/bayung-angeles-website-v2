import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import OfficialEmoji from '../OfficialEmoji'
import WingText from '../WingText'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../../constants'

export type LogoColor = 'gold' | 'white'
export type WingColor = 'gold' | 'white'
interface Props {
  completeLogo?: boolean
  color?: LogoColor
  wingColor?: WingColor
}

const Link = styled.a<{ color: LogoColor }>`
  font-family: ${FONT_FAMILY.HEADING};
  font-size: 40px;
  font-weight: ${FONT_WEIGHT.NORMAL};
  letter-spacing: 0.125em;
  text-decoration: none;
  color: ${({ color }) => (color === 'gold' ? COLORS.BA_GOLD : 'white')};
  text-align: left;
  flex: 0;
  white-space: nowrap;
  padding: 0;
  margin-right: 45px;
  transition: filter 0.3s ease-out;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 30px;
    margin-right: 30px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 28px;
    margin-right: 21px;
  }

  ${MEDIAQUERY.MOBILE} {
    margin-right: 18px;
  }
`

const wingLogoImageStyles = css`
  height: 50px;
  aspect-ratio: 1.173;

  ${MEDIAQUERY.TABLET} {
    height: 42px;
  }
`

const Logo = ({ completeLogo = false, wingColor = 'white', color = 'white' }: Props) => (
  <Link href="google.com" color={color}>
    {completeLogo ? (
      <>
        Báyung <WingText text="Ángeles" wingPosition="start" /> <OfficialEmoji />
      </>
    ) : wingColor === 'white' ? (
      <StaticImage
        css={wingLogoImageStyles}
        src="../../images/ba-logo-mini-white.png"
        placeholder="blurred"
        alt="BÁ Logo"
      />
    ) : (
      <StaticImage
        css={wingLogoImageStyles}
        src="../../images/ba-logo-mini-gold.png"
        placeholder="blurred"
        alt="BÁ Logo"
      />
    )}
  </Link>
)

export default Logo
