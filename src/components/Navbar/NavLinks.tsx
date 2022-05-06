import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../../constants'

interface Props {
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  shortenOurTeamNavText?: boolean
  isMobile?: boolean
  opaqueBG?: boolean
}

const LinksContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-wrap: wrap;

  ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    width: 100%;
    padding-bottom: 10px;
    background-color: ${COLORS.BA_BLUE};
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.30);
  `}
`

const Button = styled.button<{ isMobile: boolean; opaqueBG: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease-out;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  font-size: 15px;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  color: ${COLORS.BA_BLUE};
  text-shadow: -1px 1px white;
  white-space: nowrap;
  padding: 2px 0;
  margin: 0;
  ${({ opaqueBG }) =>
    opaqueBG &&
    `
    color: white;
    text-shadow: none;
    text-decoration: none;
    transition: filter 0.3s ease-out;
  `}

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 13px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 12px;
  }

  ${({ isMobile }) =>
    isMobile
      ? `
    padding: 10px 20px;
    text-align: left;
    font-size: 15px;

    ${MEDIAQUERY.TABLET} {
      font-size: 15px;
    }
    `
      : `
    &:not(:last-child) {
      margin-right: 45px;

      ${MEDIAQUERY.SMALL} {
        margin-right: 30px;
      }

      ${MEDIAQUERY.TABLET} {
        margin-right: 21px;
      }

      ${MEDIAQUERY.MOBILE} {
        margin-right: 18px;
      }
    }
  `}
`

const NavigationLinks = ({
  onButtonClick,
  shortenOurTeamNavText = false,
  isMobile = false,
  opaqueBG = false,
}: Props) => (
  <LinksContainer isMobile={isMobile}>
    <Button onClick={onButtonClick} isMobile={isMobile} opaqueBG={opaqueBG}>
      {shortenOurTeamNavText ? 'Our Team' : 'Meet Our Team'}
    </Button>
    <Button onClick={onButtonClick} isMobile={isMobile} opaqueBG={opaqueBG}>
      Get Involved
    </Button>
    <Button onClick={onButtonClick} isMobile={isMobile} opaqueBG={opaqueBG}>
      Contact Us
    </Button>
  </LinksContainer>
)

export default NavigationLinks
