import { ClassNames } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../../../constants'

interface Props {
  highlightText: string
  extraText: string
}

const transitionStyles = {
  enterExitExitActive: `
    transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
    opacity: 0;
  `,
  enterActive: `
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
  `,
}
const Text = styled.span`
  font-size: 49px;
  font-family: ${FONT_FAMILY.HEADING};
  letter-spacing: 0.065em;
  font-weight: ${FONT_WEIGHT.NORMAL};
  margin-top: 12px;
  z-index: 100;

  ${MEDIAQUERY.SMALL} {
    font-size: 40px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 38px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 35px;
  }
`
const Highlight = styled.span`
  color: ${COLORS.BA_GOLD};
`

const Topic = ({ highlightText, extraText }: Props) => (
  <ClassNames>
    {({ css: generateCss }) => (
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={highlightText}
          classNames={{
            enter: generateCss(transitionStyles.enterExitExitActive),
            enterActive: generateCss(transitionStyles.enterActive),
            exit: generateCss(transitionStyles.enterExitExitActive),
            exitActive: generateCss(transitionStyles.enterExitExitActive),
          }}
          timeout={750}
        >
          <Text>
            <Highlight>{highlightText}</Highlight> {extraText}
          </Text>
        </CSSTransition>
      </SwitchTransition>
    )}
  </ClassNames>
)

export default Topic
