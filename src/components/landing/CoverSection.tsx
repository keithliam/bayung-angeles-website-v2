import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import SocialMediaLinks from '../SocialMediaLinks'
import PhotoCredit from '../PhotoCredit'
import WingText from '../WingText'
import OfficialEmoji from '../OfficialEmoji'
import caratDown from '../../images/carat-down.svg'
import { MEDIAQUERY, FONT_FAMILY, FONT_WEIGHT, COLORS, PADDING } from '../../constants'

const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`

const backgroundImageStyles = css`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`

const HeadlineContainer = styled.div`
  padding: 110px ${PADDING.PAGE_DEFAULT};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 50%
  );

  ${MEDIAQUERY.LARGE} {
    padding: 105px ${PADDING.PAGE_DEFAULT};
  }

  ${MEDIAQUERY.SMALL} {
    padding: 90px ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    padding: 80px ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 70px ${PADDING.PAGE_MOBILE};
  }
`

const Heading = styled.h1`
  margin: 0;
  display: inline-block;
  font-family: ${FONT_FAMILY.HEADING};
  font-size: 130px;
  font-weight: ${FONT_WEIGHT.NORMAL};
  letter-spacing: 0.107em;
  color: ${COLORS.BA_BLUE};

  @media (max-width: 1280px) {
    font-size: 115px;
  }

  ${MEDIAQUERY.LARGE} {
    font-size: 105px;
  }

  @media (max-width: 1050px) {
    font-size: 95px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 82px;
  }

  @media (max-width: 830px) {
    font-size: 75px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 68px;
  }

  @media (max-width: 630px) {
    font-size: 85px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 75px;
  }

  @media (max-width: 415px) {
    font-size: 65px;
  }
`

const SubHeading = styled.h4`
  margin-top: 10px;
  margin-bottom: 0;
  font-family: ${FONT_FAMILY.HEADING};
  letter-spacing: 0.05em;
  font-size: 40px;
  font-weight: ${FONT_WEIGHT.NORMAL};
  position: relative;
  color: ${COLORS.BA_BLUE};
  text-shadow: -1px 1px white;

  ${MEDIAQUERY.LARGE} {
    font-size: 35px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 32px;
  }

  @media (max-width: 630px) {
    font-size: 34px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 30px;
  }

  @media (max-width: 415px) {
    font-size: 25px;
  }
`

const ConnectText = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 0;
  font-family: ${FONT_FAMILY.BODY};
  font-size: 16px;
  position: relative;
  color: ${COLORS.BA_BLUE};
`

const socialMediaLinksStyles = css`
  margin-top: 20px;
  position: relative;
`

const socialMediaLinkStyles = css`
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
`

const BottomGradient = styled.div`
  position: absolute;
  top: 60vh;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  background: linear-gradient(0deg, rgba(0, 49, 83, 1) 0%, rgba(0, 49, 83, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const ScrollDownButton = styled.a`
  padding: 20px;
  animation: bounce-down 4s ease-in-out infinite;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter 0.5s ease-out;

  &:hover {
    filter: drop-shadow(0 0 8px white);
  }
`

const photoCreditStyles = css`
  ${MEDIAQUERY.MOBILE} {
    max-width: 150px;
  }
`

const CoverSection = () => (
  <SectionContainer>
    <StaticImage
      css={backgroundImageStyles}
      placeholder="blurred"
      layout="fullWidth"
      src="../../images/angeles-city-cover.jpg"
      alt="cover"
    />
    <HeadlineContainer>
      <Heading>
        Báyung <WingText text="Ángeles" wingPosition="start" /> <OfficialEmoji />
      </Heading>
      <SubHeading>Be part of the movement</SubHeading>
      <ConnectText>Stay connected. Follow our socials.</ConnectText>
      <SocialMediaLinks css={socialMediaLinksStyles} linkCss={socialMediaLinkStyles} color="blue" />
      <BottomGradient>
        <ScrollDownButton>
          <img src={caratDown} alt="Scroll down" />
        </ScrollDownButton>
        <PhotoCredit
          css={photoCreditStyles}
          title="Mumunang Sala"
          name="Bruno Tiotuico"
          link="https://bit.ly/bayung-angeles-portfolio-bruno"
        />
      </BottomGradient>
    </HeadlineContainer>
  </SectionContainer>
)

export default CoverSection
