import React, { RefObject } from 'react'
import { ClassNames } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useSectionVisibilityObserver } from '../../../hooks'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY, PADDING } from '../../../constants'

interface Props {
  sectionRef: RefObject<HTMLElement>
  title: string
  link: string
  credit?: string
  creditLink?: string
}

const textStyles = `
  font-size: 20px;
  font-family: ${FONT_FAMILY.BODY};
  letter-spacing: 0.075em;
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  color: white;
  text-transform: uppercase;

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

const Container = styled.div<{ visible: boolean }>`
  ${textStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.BA_GOLD};
  padding: 18px ${PADDING.PAGE_DEFAULT};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
  opacity: 0;

  ${MEDIAQUERY.SMALL} {
    padding: 14px ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    padding: 12px ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 8px ${PADDING.PAGE_MOBILE};
  }

  ${({ visible }) =>
    visible &&
    `
    opacity: 1;
  `}
`

const transitionStyles = {
  enterExitExitActive: `
    transition: opacity 1.5s cubic-bezier(0.87, 0.2, 0.61, 0.99);
    opacity: 0;
  `,
  enterActive: `
    opacity: 1;
    transition: opacity 1.5s cubic-bezier(0.87, 0.2, 0.61, 0.99);
  `,
}

const photoInfoLinkStyles = `
  transition: filter 0.3s ease-out;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`

const CreditLink = styled.a`
  ${textStyles}
  ${photoInfoLinkStyles}
`

const LearnMoreLink = styled.a`
  ${textStyles}
  ${photoInfoLinkStyles}
  margin-left: 20px;
  white-space: nowrap;

  ${MEDIAQUERY.MOBILE} {
    margin-left: 16px;
  }
`

const PhotoInfo = ({ sectionRef, title, credit, creditLink, link }: Props) => {
  const entireSectionInView = useSectionVisibilityObserver(sectionRef)

  return (
    <Container visible={entireSectionInView}>
      <ClassNames>
        {({ css: generateCss }) => (
          <>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={title}
                classNames={{
                  enter: generateCss(transitionStyles.enterExitExitActive),
                  enterActive: generateCss(transitionStyles.enterActive),
                  exit: generateCss(transitionStyles.enterExitExitActive),
                  exitActive: generateCss(transitionStyles.enterExitExitActive),
                }}
                timeout={1000}
              >
                <div>
                  {title}
                  {credit && (
                    <>
                      {' '}
                      by <CreditLink href={creditLink}>{credit}</CreditLink>
                    </>
                  )}
                </div>
              </CSSTransition>
            </SwitchTransition>
            <LearnMoreLink href={link} target="_blank" rel="noreferrer">
              Learn More
            </LearnMoreLink>
          </>
        )}
      </ClassNames>
    </Container>
  )
}

export default PhotoInfo
