import { ReactNode } from 'react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { COLORS, GLOBAL_CSS } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'

interface Props {
  showNavbarLogo?: boolean
  children?: ReactNode
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.BA_BLUE};
  flex-direction: column;
`

const Layout = ({ showNavbarLogo = false, children }: Props) => (
  <Container>
    <GatsbySeo />
    <Global styles={GLOBAL_CSS} />
    <Navbar showLogo={showNavbarLogo} />
    {children}
    <Footer />
  </Container>
)

export default Layout
