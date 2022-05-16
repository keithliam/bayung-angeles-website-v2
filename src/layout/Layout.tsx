import { ReactNode } from 'react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { COLORS, GLOBAL_CSS } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'

interface Props {
  children?: ReactNode
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.BA_BLUE};
  flex-direction: column;
`

const Layout = ({ children }: Props) => (
  <Container>
    <Global styles={GLOBAL_CSS} />
    <Navbar />
    {children}
    <Footer />
  </Container>
)

export default Layout