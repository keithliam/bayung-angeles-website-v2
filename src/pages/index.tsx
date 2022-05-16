import Layout from '../layout/Layout'
import CoverSection from '../components/landing/CoverSection'
import PillarsSection from '../components/landing/PillarsSection/PillarsSection'
import ImagineSection from '../components/landing/ImagineSection/ImagineSection'
import QuoteSection from '../components/landing/QuoteSection'
import TeamSection from '../components/landing/TeamSection/TeamSection'
import GetInvolvedSection from '../components/landing/GetInvolvedSection'
import DownloadsSection from '../components/landing/DownloadsSection/DownloadsSection'

const IndexPage = () => (
  <Layout>
    <CoverSection />
    <PillarsSection />
    <ImagineSection />
    <QuoteSection />
    <TeamSection />
    <GetInvolvedSection />
    <DownloadsSection />
  </Layout>
)

export default IndexPage
