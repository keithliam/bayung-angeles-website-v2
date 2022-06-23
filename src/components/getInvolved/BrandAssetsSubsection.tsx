import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Subsection from './Subsection/Subsection'
import { brandAssetsLink } from '../../data/downloads'

const previewImageStyles = css`
  aspect-ratio: 1.78;
  height: 100%;
`

const Header = () => 'Brand Assets'

const Content = () => 'LOGOS & FONTS AVAILABLE FOR DOWNLOAD'

const Preview = () => (
  <StaticImage
    css={previewImageStyles}
    placeholder="blurred"
    src="../../images/ba-brand-assets-preview.png"
    alt="Brand assets preview"
  />
)

const BrandAssetsSubsection = () => (
  <Subsection
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={brandAssetsLink}
    linkButtonText="Download"
    smallPreview
  />
)

export default BrandAssetsSubsection
