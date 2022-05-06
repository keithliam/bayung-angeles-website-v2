import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import CoverSection from '../components/landing/CoverSection'
import PillarsSection from '../components/landing/PillarsSection/PillarsSection'
import ImagineSection from '../components/landing/ImagineSection/ImagineSection'
import QuoteSection from '../components/landing/QuoteSection'
import TeamSection from '../components/landing/TeamSection/TeamSection'
import GetInvolvedSection from '../components/landing/GetInvolvedSection'
import DownloadsSection from '../components/landing/DownloadsSection/DownloadsSection'
import { COLORS, GLOBAL_CSS } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'
import Footer from '../components/Footer'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.BA_BLUE};
  flex-direction: column;
`

const IndexPage = () => (
  <Container>
    <Global styles={GLOBAL_CSS} />
    <CoverSection />
    <PillarsSection />
    <ImagineSection />
    <QuoteSection />
    <TeamSection />
    <GetInvolvedSection />
    <DownloadsSection />
    <Footer />
  </Container>
)

export default IndexPage
