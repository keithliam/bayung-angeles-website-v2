import React from 'react'
import { css } from '@emotion/react'
import Subsection from '../Subsection/Subsection'
import HighlightText from '../HighlightText'
import TeamLinks from './TeamLinks'
import { MEDIAQUERY } from '../../../constants'

const stepNumberCss = css`
  left: -50px;

  ${MEDIAQUERY.SMALL} {
    left: -45px;
  }

  ${MEDIAQUERY.TABLET} {
    left: -40px;
  }

  ${MEDIAQUERY.MOBILE} {
    left: -30px;
  }
`

const Header = () => (
  <>
    Follow <HighlightText text="our" /> team
  </>
)

const Content = () => <TeamLinks />

const StepFourSubsection = () => (
  <Subsection
    stepNumber={4}
    stepNumberCss={stepNumberCss}
    headerComponent={Header}
    contentComponent={Content}
  />
)

export default StepFourSubsection
