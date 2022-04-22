import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { ClassNames } from '@emotion/react'
import Sticky from 'react-stickynode'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Background from './Background'
import Topic from './Topic'
import { useSubsectionIndexObserver } from '../../../hooks'
import { topics } from '../../../data/pillars'
import { COLORS, FONT_FAMILY, MEDIAQUERY, PADDING } from '../../../constants'

const PILLARS_SECTION_ID = 'pillars'

const lastTopicIndex = topics.length - 1

const SectionContainer = styled.div`
  height: ${(topics.length + 1) * 100}vh;
  width: 100%;
  background-color: ${COLORS.BA_BLUE};
`

const StickyContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 ${PADDING.PAGE_DEFAULT};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;

  ${MEDIAQUERY.LARGE} {
    padding: 0 ${PADDING.PAGE_DEFAULT};
  }

  ${MEDIAQUERY.SMALL} {
    padding: 0 ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    padding: 0 ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 0 ${PADDING.PAGE_MOBILE};
  }
`

const descriptionTransitionStyles = {
  enterExitExitActive: `
    transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
    opacity: 0;
  `,
  enterActive: `
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.87, 0.2, 0.61, 0.99);
  `,
}
const Description = styled.span`
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

const PillarsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const topicIndex = useSubsectionIndexObserver(sectionRef, lastTopicIndex)

  const { title, description } = topics[topicIndex]

  return (
    <SectionContainer ref={sectionRef} id={PILLARS_SECTION_ID}>
      <Sticky bottomBoundary={`#${PILLARS_SECTION_ID}`}>
        <StickyContainer>
          <ClassNames>
            {({ css: generateCss }) => (
              <>
                <Background sectionRef={sectionRef} />
                <Topic topic={title} />
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={description}
                    classNames={{
                      enter: generateCss(descriptionTransitionStyles.enterExitExitActive),
                      enterActive: generateCss(descriptionTransitionStyles.enterActive),
                      exit: generateCss(descriptionTransitionStyles.enterExitExitActive),
                      exitActive: generateCss(descriptionTransitionStyles.enterExitExitActive),
                    }}
                    timeout={1250}
                  >
                    <Description>{description}</Description>
                  </CSSTransition>
                </SwitchTransition>
              </>
            )}
          </ClassNames>
        </StickyContainer>
      </Sticky>
    </SectionContainer>
  )
}

export default PillarsSection
