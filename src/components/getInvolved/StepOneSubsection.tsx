import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Subsection from './Subsection/Subsection'
import HighlightText from './HighlightText'
import LinkText from './LinkText'
import { MEDIAQUERY } from '../../constants'

const stepNumberCss = css`
  top: -135px;

  ${MEDIAQUERY.LARGE} {
    top: -125px;
  }

  ${MEDIAQUERY.SMALL} {
    top: -112px;
  }

  ${MEDIAQUERY.TABLET} {
    top: -95px;
  }

  ${MEDIAQUERY.MOBILE} {
    top: -82px;
  }
`

const previewImageStyles = css`
  aspect-ratio: 1.2;
  height: 100%;
`

const Header = () => (
  <>
    Like and follow <HighlightText text="our" /> Facebook page
  </>
)

const Content = () => (
  <>
    <LinkText href="https://www.facebook.com/help/299284303519326" text="TURN ON NOTIFICATIONS" />{' '}
    TO RECEIVE THE LATEST UPDATES.
  </>
)

const Preview = () => (
  <StaticImage
    css={previewImageStyles}
    placeholder="blurred"
    src="../../images/ba-fb-page.jpg"
    alt="Facebook page preview"
  />
)

const StepOneSubsection = () => (
  <Subsection
    stepNumber={1}
    stepNumberCss={stepNumberCss}
    headerComponent={Header}
    contentComponent={Content}
    previewComponent={Preview}
    link="https://bit.ly/bayung-angeles-facebook-page"
    linkButtonText="Open Page"
  />
)

export default StepOneSubsection
