import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css, Interpolation, Theme } from '@emotion/react'
import StepNumber from './StepNumber'
import Separator from './Separator'
import CtaButton from '../../CtaButton'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY, PADDING } from '../../../constants'

interface Props {
  stepNumber?: number
  stepNumberCss?: Interpolation<Theme>
  showSeparator?: boolean
  headerComponent?: () => ReactNode
  contentComponent?: () => ReactNode
  previewComponent?: () => ReactNode
  link?: string
  linkButtonText?: string
}

const SectionContainer = styled.div`
  padding: ${PADDING.PAGE_DEFAULT};
  display: flex;
  position: relative;

  ${MEDIAQUERY.SMALL} {
    padding: ${PADDING.PAGE_SMALL};
    flex-direction: column;
    align-items: flex-end;
  }

  ${MEDIAQUERY.TABLET} {
    padding: ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: ${PADDING.PAGE_MOBILE};
  }
`

const SectionContent = styled.div`
  flex: 1;
  z-index: 2;

  ${MEDIAQUERY.SMALL} {
    width: 100%;
  }
`

const SectionHeader = styled.h2`
  margin: 0;
  font-family: ${FONT_FAMILY.HEADING};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-size: 46px;
  letter-spacing: 0.065em;
  color: ${COLORS.BA_BLUE};

  ${MEDIAQUERY.LARGE} {
    font-size: 40px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 38px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 35px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 30px;
  }
`

const Content = styled.span`
  margin-top: 12px;
  font-family: ${FONT_FAMILY.BODY};
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  color: ${COLORS.BA_GRAY};
  display: block;
  letter-spacing: 0.055em;

  ${MEDIAQUERY.LARGE} {
    font-size: 18px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 15px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 14px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 13px;
  }
`

const linkButtonStyles = css`
  margin-top: 22px;
`

const previewBoxShadowColor = 'rgba(0, 0, 0, 0.16)'
const ImagePreviewContainer = styled.a`
  margin-left: ${PADDING.PAGE_DEFAULT};
  transition: filter 0.5s ease-out, transform 0.5s ease-out;
  filter: drop-shadow(3px 3px 16px ${previewBoxShadowColor});
  transform: scale(1);
  transform-origin: right center;
  height: 400px;
  position: relative;
  z-index: 3;

  &:hover {
    filter: drop-shadow(3px 3px 36px ${previewBoxShadowColor});
    transform: scale(1.25);
  }

  ${MEDIAQUERY.LARGE} {
    height: 350px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-left: 0;
    margin-top: 50px;
    height: 320px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-left: ${PADDING.PAGE_TABLET};
    margin-top: 40px;
    height: 300px;
  }

  ${MEDIAQUERY.MOBILE} {
    margin-left: ${PADDING.PAGE_MOBILE};
    margin-top: 35px;
    height: 250px;
  }

  @media (max-width: 415px) {
    height: 230px;
  }
`

const Subsection = ({
  stepNumber,
  stepNumberCss,
  showSeparator = false,
  headerComponent,
  contentComponent,
  previewComponent,
  link,
  linkButtonText,
}: Props) => (
  <SectionContainer>
    {stepNumber && <StepNumber css={stepNumberCss} number={stepNumber} />}
    {showSeparator && <Separator />}
    <SectionContent>
      {headerComponent && <SectionHeader>{headerComponent()}</SectionHeader>}
      {contentComponent && <Content>{contentComponent()}</Content>}
      {link && linkButtonText && (
        <CtaButton css={linkButtonStyles} color="gold" text={linkButtonText} />
      )}
    </SectionContent>
    {previewComponent && (
      <ImagePreviewContainer href={link} target="_blank" rel="noreferrer">
        {previewComponent()}
      </ImagePreviewContainer>
    )}
  </SectionContainer>
)

export default Subsection