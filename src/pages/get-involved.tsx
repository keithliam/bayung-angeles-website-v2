import styled from '@emotion/styled'
import Layout from '../layout/Layout'
import { MEDIAQUERY } from '../constants'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'

const Container = styled.div`
  height: calc(100vh - 67px);
  width: 100vw;
  background-color: white;

  ${MEDIAQUERY.SMALL} {
    height: calc(100vh - 62px);
  }

  ${MEDIAQUERY.MOBILE} {
    height: calc(100vh - 51px);
  }
`

const GetInvolvedPage = () => (
  <Layout showNavbarLogo>
    <Container />
  </Layout>
)

export default GetInvolvedPage
