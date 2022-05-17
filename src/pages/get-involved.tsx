import { css } from '@emotion/react'
import Layout from '../layout/Layout'
import Section from '../components/getInvolved/Section/Section'
import StepOneSubsection from '../components/getInvolved/StepOneSubsection'
import { MEDIAQUERY } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'

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
    </Section>
  </Layout>
)

export default GetInvolvedPage
