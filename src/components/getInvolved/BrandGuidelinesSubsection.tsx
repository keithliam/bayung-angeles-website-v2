import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Subsection from './Subsection/Subsection'
import { brandGuideLink } from '../../data/downloads'

const previewImageStyles = css`
  aspect-ratio: 1.78;
  height: 100%;
`

const Header = () => 'Visual Identity & Guidelines'

const Content = () => 'FOLLOW THESE GUIDELINES WHEN USING OUR MEDIA ASSETS'

const Preview = () => (
  <StaticImage
    css={previewImageStyles}
    placeholder="blurred"
    src="../../images/ba-brand-identity-preview.png"
    alt="Visual identity &amp; guidelines document preview"
  />
)

const BrandGuidelinesSubsection = () => (
  <Subsection
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link={brandGuideLink}
    linkButtonText="Download"
    smallPreview
  />
)

export default BrandGuidelinesSubsection
