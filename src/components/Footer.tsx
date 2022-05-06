import { css } from '@emotion/react'
import styled from '@emotion/styled'
import SocialMediaLinks from './SocialMediaLinks'
import OfficialEmoji from './OfficialEmoji'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY, PADDING } from '../constants'

const Container = styled.footer`
  width: 100%;
  padding: 14px ${PADDING.PAGE_DEFAULT};
  display: flex;
  align-items: center;
  background-color: ${COLORS.BA_BLUE};

  ${MEDIAQUERY.SMALL} {
    padding: 14px ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    padding: 14px ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 12px ${PADDING.PAGE_MOBILE};
  }
`

const socialMediaLinksStyles = css`
  margin-right: 20px;

  ${MEDIAQUERY.SMALL} {
    margin-right: 18px;
  }
`
const socialMediaLinkStyles = css`
  height: 35px;

  &:not(:last-of-type) {
    margin-right: 15px;
  }

  ${MEDIAQUERY.LARGE} {
    height: 35px;
  }

  ${MEDIAQUERY.TABLET} {
    height: 35px;
  }

  ${MEDIAQUERY.SMALL} {
    height: 30px;

    &:not(:last-of-type) {
      margin-right: 13px;
    }
  }

  ${MEDIAQUERY.MOBILE} {
    height: 25px;

    &:not(:last-of-type) {
      margin-right: 11px;
    }
  }
`

const CopyrightText = styled.span`
  color: white;
  display: block;
  text-transform: uppercase;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 0.075em;
  font-size: 20px;

  ${MEDIAQUERY.LARGE} {
    font-size: 18px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 16px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
  }
`

const Footer = () => (
  <Container>
    <SocialMediaLinks css={socialMediaLinksStyles} linkCss={socialMediaLinkStyles} color="white" />
    <CopyrightText>
      © Báyung Ángeles <OfficialEmoji />
    </CopyrightText>
  </Container>
)

export default Footer
