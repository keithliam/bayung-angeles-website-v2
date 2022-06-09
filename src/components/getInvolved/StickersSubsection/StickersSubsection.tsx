import Subsection from '../Subsection/Subsection'
import DownloadsPreview from '../DownloadsPreview/DownloadsPreview'
import { allStickersLink, stickers } from '../../../data/downloads'

const Header = () => 'Sticker Designs'

const Content = () => <DownloadsPreview previews={stickers} />

const StickersSubsection = () => (
  <Subsection
    headerComponent={Header}
    contentComponent={Content}
    link={allStickersLink}
    linkButtonText="Download All"
    smallPreview
  />
)

export default StickersSubsection
