import { ClassNames, css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../../../constants'
import WingText from '../../WingText'

interface Props {
  topic: string
}

const Container = styled.div`
  font-size: 49px;
  font-family: ${FONT_FAMILY.HEADING};
  letter-spacing: 0.06em;
  font-weight: ${FONT_WEIGHT.NORMAL};
  z-index: 1;

  ${MEDIAQUERY.LARGE} {
    font-size: 47px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 42px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 38px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 34px;
  }
`

const Highlight = styled.span`
  color: ${COLORS.BA_GOLD};
`

const wingTextTransitionStyles = {
  enter: `
    transform: translateY(75%);
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.77, 0, 0.18, 1);
  `,
  enterExitActive: `
    transform: translateY(0);
    opacity: 1;
    transition: all 0.8s cubic-bezier(0.77, 0, 0.18, 1);
  `,
  exit: `
    transform: translateY(-75%);
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.77, 0, 0.18, 1);
  `,
}
const wingTextStyles = css`
  display: inline-block;
  z-index: 100;
  color: white;
`

const Topic = ({ topic }: Props) => (
  <ClassNames>
    {({ css: generateCss }) => (
      <Container>
        <Highlight>Our </Highlight>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={topic}
            classNames={{
              enter: generateCss(wingTextTransitionStyles.enter),
              enterActive: generateCss(wingTextTransitionStyles.enterExitActive),
              exit: generateCss(wingTextTransitionStyles.exit),
              exitActive: generateCss(wingTextTransitionStyles.enterExitActive),
            }}
            timeout={500}
          >
            <WingText css={wingTextStyles} text={topic} wingPosition="end" />
          </CSSTransition>
        </SwitchTransition>
      </Container>
    )}
  </ClassNames>
)

export default Topic
