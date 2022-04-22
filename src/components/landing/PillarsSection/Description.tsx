import { ClassNames } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { FONT_FAMILY, MEDIAQUERY } from '../../../constants'

interface Props {
  text: string
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
  display: flex;
  flex-direction: column;
  font-family: ${FONT_FAMILY.BODY};
  font-size: 22px;
  margin-top: 16px;
  line-height: 1.15em;
  max-width: 80%;
  height: 2.5em;
  z-index: 100;

  ${MEDIAQUERY.SMALL} {
    margin-top: 14px;
    font-size: 21px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-top: 10px;
    font-size: 18px;
  }

  ${MEDIAQUERY.MOBILE} {
    max-width: none;
    margin-top: 8px;
    font-size: 15px;
  }
`

const Description = ({ text }: Props) => (
  <ClassNames>
    {({ css: generateCss }) => (
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={text}
          classNames={{
            enter: generateCss(transitionStyles.enterExitExitActive),
            enterActive: generateCss(transitionStyles.enterActive),
            exit: generateCss(transitionStyles.enterExitExitActive),
            exitActive: generateCss(transitionStyles.enterExitExitActive),
          }}
          timeout={1250}
        >
          <Text>{text}</Text>
        </CSSTransition>
      </SwitchTransition>
    )}
  </ClassNames>
)

export default Description
