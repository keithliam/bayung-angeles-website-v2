import Subsection from './Subsection/Subsection'
import DownloadsPreview from './DownloadsPreview/DownloadsPreview'
import { allPostersWallpapersLink, postersWallpapers } from '../../data/downloads'

const Header = () => 'Poster & Wallpaper Designs'

const Content = () => <DownloadsPreview previews={postersWallpapers} />

const PostersWallpapersSubsection = () => (
  <Subsection
    headerComponent={Header}
    contentComponent={Content}
    link={allPostersWallpapersLink}
    linkButtonText="Download All"
    smallPreview
  />
)

export default PostersWallpapersSubsection
