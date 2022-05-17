import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Interpolation, Theme } from '@emotion/react'
import HeadingBackground from './HeadingBackground'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY, PADDING } from '../../../constants'

interface Props {
  headingCss?: Interpolation<Theme>
  title: string
  subtitle: string
  children?: ReactNode
}

const SectionContainer = styled.div`
  width: 100%;
`

const SectionHeading = styled.div`
  padding: 40px ${PADDING.PAGE_DEFAULT} 30px;
  position: relative;
  color: ${COLORS.BA_BLUE};

  ${MEDIAQUERY.SMALL} {
    padding: 35px ${PADDING.PAGE_SMALL} 25px;
  }

  ${MEDIAQUERY.TABLET} {
    padding: 30px ${PADDING.PAGE_TABLET} 20px;
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 25px ${PADDING.PAGE_MOBILE} 20px;
  }
`

const HeadingText = styled.h1`
  margin: 0;
  position: relative;
  font-family: ${FONT_FAMILY.HEADING};
  font-size: 58px;
  font-weight: ${FONT_WEIGHT.NORMAL};
  letter-spacing: 0.107em;

  ${MEDIAQUERY.LARGE} {
    font-size: 56px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 52px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 44px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 38px;
  }
`

const SubHeadingText = styled.span`
  position: relative;
  font-family: ${FONT_FAMILY.BODY};
  font-size: 20px;

  ${MEDIAQUERY.MOBILE} {
    font-size: 18px;
  }
`

const Content = styled.div`
  position: relative;
  background-color: ${COLORS.BA_SMOKE};
  overflow: hidden;
`

const Section = ({ headingCss, title, subtitle, children }: Props) => (
  <SectionContainer>
    <SectionHeading css={headingCss}>
      <HeadingBackground />
      <HeadingText>{title}</HeadingText>
      <SubHeadingText>{subtitle}</SubHeadingText>
    </SectionHeading>
    <Content>{children}</Content>
  </SectionContainer>
)

export default Section
