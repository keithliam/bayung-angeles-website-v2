import { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import Sticky from 'react-stickynode'
import BackgroundImage from './BackgroundImage'
import Topic from './Topic'
import PhotoInfo from './PhotoInfo'
import { useSubsectionIndexObserver } from '../../../hooks'
import { allPhotos, getTopicAndPhoto } from '../../../data/imagine'
import {
  GatsbyImageQueryFile,
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  MEDIAQUERY,
  PADDING,
} from '../../../constants'

const lastPhotoIndex = allPhotos.length - 1

const IMAGINE_SECTION_ID = 'imagine'

const SectionContainer = styled.div`
  height: ${(allPhotos.length + 1) * 100}vh;
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
`

const ImagineText = styled.span`
  text-transform: uppercase;
  color: white;
  font-size: 23px;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 0.055em;
  z-index: 100;

  ${MEDIAQUERY.SMALL} {
    font-size: 21px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 19px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 17px;
  }
`

interface ImagineQueryData {
  [k: string]: GatsbyImageQueryFile | undefined
  healthCareProjectsPhoto: GatsbyImageQueryFile
  dialysisCenterPhoto: GatsbyImageQueryFile
  civilCivicProjectsPhoto: GatsbyImageQueryFile
  foodStripPhoto: GatsbyImageQueryFile
  housingProjectsPhoto: GatsbyImageQueryFile
}

const query = graphql`
  query {
    healthCareProjectsPhoto: file(relativePath: { eq: "angeles-healthcare-projects.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    dialysisCenterPhoto: file(relativePath: { eq: "angeles-dialysis-center.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    foodStripPhoto: file(relativePath: { eq: "angeles-food-strip.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    civilCivicProjectsPhoto: file(relativePath: { eq: "angeles-civil-civic-projects.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    housingProjectsPhoto: file(relativePath: { eq: "angeles-housing-projects.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`

const ImagineSection = () => {
  const data: ImagineQueryData = useStaticQuery(query)
  const sectionRef = useRef<HTMLDivElement>(null)
  const photoIndex = useSubsectionIndexObserver(sectionRef, lastPhotoIndex)

  const {
    topic: { highlightText, extraText },
    photo: { title, source, link, credit, creditLink },
  } = getTopicAndPhoto(photoIndex)
  const backgroundImage = data[source]?.childImageSharp?.gatsbyImageData

  return (
    <SectionContainer ref={sectionRef} id={IMAGINE_SECTION_ID}>
      <Sticky bottomBoundary={`#${IMAGINE_SECTION_ID}`}>
        <StickyContainer>
          <BackgroundImage
            sectionRef={sectionRef}
            backgroundImage={backgroundImage}
            index={photoIndex}
            title={title}
          />
          <ImagineText>Imagine Angeles City where...</ImagineText>
          <Topic highlightText={highlightText} extraText={extraText} />
          <PhotoInfo
            sectionRef={sectionRef}
            title={title}
            link={link}
            credit={credit}
            creditLink={creditLink}
          />
        </StickyContainer>
      </Sticky>
    </SectionContainer>
  )
}

export default ImagineSection
