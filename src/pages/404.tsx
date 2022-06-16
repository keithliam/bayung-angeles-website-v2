import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import CtaButton from '../components/CtaButton'
import { COLORS, FONT_FAMILY, GLOBAL_CSS, MEDIAQUERY } from '../constants'

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BA_BLUE};
  color: ${COLORS.BA_SMOKE};
  text-align: center;
  user-select: none;
`

const logoStyles = css`
  height: 130px;
  aspect-ratio: 1.176;
  pointer-events: none;
  margin-top: -7px;

  ${MEDIAQUERY.LARGE} {
    height: 105px;
    margin-top: -6px;
  }

  ${MEDIAQUERY.SMALL} {
    height: 83px;
    margin-top: -5px;
  }

  ${MEDIAQUERY.TABLET} {
    height: 68px;
    margin-top: -4px;
  }

  ${MEDIAQUERY.MOBILE} {
    height: 50px;
    margin-top: -3px;
  }
`

const Heading = styled.h1`
  display: inline-block;
  margin: 0;
  margin-left: -0.3em;
  letter-spacing: 0.107em;
  font-family: ${FONT_FAMILY.HEADING};
  font-size: 130px;
  position: relative;
  z-index: 1;

  ${MEDIAQUERY.LARGE} {
    font-size: 105px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 82px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 68px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 50px;
  }
`

const SubHeading = styled.h4`
  margin: 0;
  font-family: ${FONT_FAMILY.HEADING};
  letter-spacing: 0.107em;
  text-transform: uppercase;
  font-size: 45px;

  ${MEDIAQUERY.LARGE} {
    font-size: 37px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 30px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 25px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 20px;
  }
`

const buttonStyles = css`
  margin-top: 30px;

  ${MEDIAQUERY.LARGE} {
    margin-top: 25px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-top: 20px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-top: 15px;
  }
`

const NotFoundPage = () => (
  <Background>
    <Global styles={GLOBAL_CSS} />
    <div>
      <StaticImage
        css={logoStyles}
        src="../images/ba-logo-mini-white-no-diacritic.png"
        placeholder="blurred"
        formats={['png']}
        alt="A"
      />
      <Heading>ró Páró!</Heading>
    </div>
    <SubHeading>Atin prubléma!</SubHeading>
    <CtaButton css={buttonStyles} color="gold" text="Refresh" localLink="/" />
  </Background>
)

export default NotFoundPage
