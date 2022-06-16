import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  MEDIAQUERY,
  TEAM_SECTION_ID,
  GET_INVOLVED_SECTION_ID,
  STEP_THREE_SUBSECTION_ID,
} from '../../constants'

interface NavigationLinkProps {
  className?: string
  text: string
  to: string
  onClick?: () => void
}
interface NavigationLinksProps {
  onButtonClick?: () => void
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

const linkStyles = css`
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

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 13px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 12px;
  }
`
const linkOpaqueStyles = css`
  color: white;
  text-shadow: none;
  text-decoration: none;
  transition: filter 0.3s ease-out;
`
const linkMobileStyles = css`
  padding: 10px 20px;
  text-align: left;
  font-size: 15px;

  ${MEDIAQUERY.TABLET} {
    font-size: 15px;
  }
`
const linkNonMobileStyles = css`
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
`

const NavigationLink = ({ className, text, to, onClick }: NavigationLinkProps) => (
  <AnchorLink className={className} to={to} title={text} onAnchorLinkClick={onClick} />
)

const NavigationLinks = ({
  onButtonClick,
  shortenOurTeamNavText = false,
  isMobile = false,
  opaqueBG = false,
}: NavigationLinksProps) => {
  const linkCss = [
    linkStyles,
    opaqueBG && linkOpaqueStyles,
    isMobile ? linkMobileStyles : linkNonMobileStyles,
  ]

  return (
    <LinksContainer isMobile={isMobile}>
      <NavigationLink
        css={linkCss}
        text={shortenOurTeamNavText ? 'Our Team' : 'Meet Our Team'}
        to={`/#${TEAM_SECTION_ID}`}
        onClick={onButtonClick}
      />
      <NavigationLink
        css={linkCss}
        text="Get Involved"
        to={`/get-involved#${GET_INVOLVED_SECTION_ID}`}
        onClick={onButtonClick}
      />
      <NavigationLink
        css={linkCss}
        text="Contact Us"
        to={`/get-involved#${STEP_THREE_SUBSECTION_ID}`}
        onClick={onButtonClick}
      />
    </LinksContainer>
  )
}

export default NavigationLinks
