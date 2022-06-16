import { useRef } from 'react'
import styled from '@emotion/styled'
import Sticky from 'react-stickynode'
import Background from './Background'
import Topic from './Topic'
import { useSubsectionIndexObserver } from '../../../hooks'
import { topics } from '../../../data/pillars'
import { COLORS, MEDIAQUERY, PADDING, PILLARS_SECTION_ID } from '../../../constants'
import Description from './Description'

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

const PillarsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const topicIndex = useSubsectionIndexObserver(sectionRef, lastTopicIndex)

  const { title, description } = topics[topicIndex]

  return (
    <SectionContainer ref={sectionRef} id={PILLARS_SECTION_ID}>
      <Sticky bottomBoundary={`#${PILLARS_SECTION_ID}`}>
        <StickyContainer>
          <Background sectionRef={sectionRef} />
          <Topic topic={title} />
          <Description text={description} />
        </StickyContainer>
      </Sticky>
    </SectionContainer>
  )
}

export default PillarsSection
