import { css } from '@emotion/react'
import Layout from '../layout/Layout'
import Section from '../components/getInvolved/Section/Section'
import StepOneSubsection from '../components/getInvolved/StepOneSubsection'
import StepTwoSubsection from '../components/getInvolved/StepTwoSubsection'
import StepThreeSubsection from '../components/getInvolved/StepThreeSubsection'
import StepFourSubsection from '../components/getInvolved/StepFourSubsection/StepFourSubsection'
import StepFiveSubsection from '../components/getInvolved/StepFiveSubsection'
import DonationSubsection from '../components/getInvolved/DonationSubsection'
import BrandGuidelinesSubsection from '../components/getInvolved/BrandGuidelinesSubsection'
import BrandAssetsSubsection from '../components/getInvolved/BrandAssetsSubsection'
import { MEDIAQUERY } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'
import StickersSubsection from '../components/getInvolved/StickersSubsection/StickersSubsection'

const getInvolvedSectionStyles = css`
  padding-top: 90px;

  ${MEDIAQUERY.SMALL} {
    padding-top: 85px;
  }

  ${MEDIAQUERY.TABLET} {
    padding-top: 80px;
  }
`

const GetInvolvedPage = () => (
  <Layout showNavbarLogo>
    <Section
      headingCss={getInvolvedSectionStyles}
      title="Get Involved 🤝"
      subtitle="Each one of us can make a difference."
    >
      <StepOneSubsection />
      <StepTwoSubsection />
      <StepThreeSubsection />
      <StepFourSubsection />
      <StepFiveSubsection />
      <DonationSubsection />
    </Section>
    <Section title="Download Assets 💾" subtitle="Introduce others to the movement.">
      <BrandGuidelinesSubsection />
      <BrandAssetsSubsection />
      <StickersSubsection />
    </Section>
  </Layout>
)

export default GetInvolvedPage
