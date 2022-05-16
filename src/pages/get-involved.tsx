import styled from '@emotion/styled'
import Layout from '../layout/Layout'
import '../fonts/fonts.css'
import '@fontsource/public-sans/variable.css'

const Container = styled.div`
  height: calc(100vh - 67px);
  width: 100vw;
  background-color: white;
`

const GetInvolvedPage = () => (
  <Layout showNavbarLogo>
    <Container />
  </Layout>
)

export default GetInvolvedPage
