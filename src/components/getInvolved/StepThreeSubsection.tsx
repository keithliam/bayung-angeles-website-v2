import React from 'react'
import { css } from '@emotion/react'
import Subsection from './Subsection/Subsection'
import HighlightText from './HighlightText'
import SocialMediaLinks from '../SocialMediaLinks'
import { STEP_THREE_SUBSECTION_ID } from '../../constants'

const socialMediaLinkCss = css`
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    box-shadow: none;
    opacity: 0.8;
  }
`

const Header = () => (
  <>
    Follow <HighlightText text="our" /> social media accounts
  </>
)

const Content = () => <SocialMediaLinks color="blue" linkCss={socialMediaLinkCss} />

const StepThreeSubsection = () => (
  <Subsection
    id={STEP_THREE_SUBSECTION_ID}
    stepNumber={3}
    headerComponent={Header}
    contentComponent={Content}
  />
)

export default StepThreeSubsection
