import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import CoverSection from '../components/landing/CoverSection'
import PillarsSection from '../components/landing/PillarsSection'
import { COLORS, GLOBAL_CSS } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'

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
  </Container>
)

export default IndexPage
