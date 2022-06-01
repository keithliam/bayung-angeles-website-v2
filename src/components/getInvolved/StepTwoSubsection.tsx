import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Subsection from './Subsection/Subsection'
import HighlightText from './HighlightText'

const previewImageStyles = css`
  aspect-ratio: 1.2;
  height: 100%;
`

const Header = () => (
  <>
    Join <HighlightText text="our" /> movement group
  </>
)

const Content = () => 'USE THE HASHTAG #BayungAngeles AND THE OFFICIAL EMOJI ☝️'

const Preview = () => (
  <StaticImage
    css={previewImageStyles}
    placeholder="blurred"
    src="../../images/ba-fb-group.jpg"
    alt="Facebook group preview"
  />
)

const StepTwoSubsection = () => (
  <Subsection
    stepNumber={2}
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link="https://bit.ly/bayung-angeles-fb-group"
    linkButtonText="Open Group"
  />
)

export default StepTwoSubsection
