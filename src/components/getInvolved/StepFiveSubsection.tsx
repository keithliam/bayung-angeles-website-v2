import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Subsection from './Subsection/Subsection'
import HighlightText from './HighlightText'

const previewImageStyles = css`
  aspect-ratio: 1;
  height: 100%;
`

const Header = () => (
  <>
    Use <HighlightText text="our" /> Facebook frame
  </>
)

const Preview = () => (
  <StaticImage
    css={previewImageStyles}
    placeholder="blurred"
    src="../../images/ba-fb-frame.png"
    alt="Facebook page preview"
  />
)

const StepFiveSubsection = () => (
  <Subsection
    stepNumber={5}
    headerComponent={Header}
    previewComponent={Preview}
    link="https://bit.ly/bayung-angeles-fb-frame"
    linkButtonText="Try Facebook frame"
  />
)

export default StepFiveSubsection
