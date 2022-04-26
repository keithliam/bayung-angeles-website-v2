import React, { UIEventHandler } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import ScrollFade from '@benestudioco/react-scrollfade'
import InfoSection from './InfoSection'
import {
  GatsbyImageQueryFile,
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  MEDIAQUERY,
  TEAM_CARDS_BREAKPOINT_MOBILE,
} from '../../../../../constants'
import { allMembers, MemberInfo } from '../../../../../data/team'

interface MemberCardProps {
  memberIndex: number
  onCardContentScroll: UIEventHandler<HTMLDivElement>
  disableScroll: boolean
}

const bannerImageStyles = css`
  position: absolute;
  width: 100%;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.4));
  z-index: 10;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
`

const InfoContainer = styled.div<{ disableScroll: boolean }>`
  font-family: ${FONT_FAMILY.BODY};
  letter-spacing: 0.02em;
  font-size: 16px;
  padding: 0 24px;
  color: ${COLORS.BA_BLUE};
  flex: 1;
  overflow-y: ${({ disableScroll }) => (disableScroll ? 'hidden' : 'scroll')};

  ${MEDIAQUERY.LARGE} {
    font-size: 16px;
    padding: 0 22px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 14px;
    padding: 0 20px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 12px;
    padding: 0 18px;
  }

  @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
    font-size: 14px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 14px;
    padding: 0 16px;
  }
`

const Footer = styled.div`
  padding: 15px 20px 34px;
  display: flex;
  align-items: center;
`

const MemberSocialMediaLinks = styled.div`
  flex: 1;
`

const MemberPageLink = styled.a`
  text-decoration: none;
  background-color: ${COLORS.BA_GOLD};
  color: ${COLORS.BA_BLUE};
  padding: 8px 15px;
  font-size: 13px;
  border-radius: 12px;
  opacity: 1;
  transition: box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  text-transform: uppercase;

  &:hover {
    box-shadow: none;
    opacity: 0.8;
  }
`

const caratImageStyles = css`
  height: 14px;
  margin-left: 8px;
`

interface MemberBannersQueryData {
  [k: string]: GatsbyImageQueryFile | undefined
  riveraBanner: GatsbyImageQueryFile
  juanBanner: GatsbyImageQueryFile
  arceoBanner: GatsbyImageQueryFile
  maiquezBanner: GatsbyImageQueryFile
  quitoBanner: GatsbyImageQueryFile
  santiagoBanner: GatsbyImageQueryFile
  dayritBanner: GatsbyImageQueryFile
  alootBanner: GatsbyImageQueryFile
  fortoBanner: GatsbyImageQueryFile
}

const query = graphql`
  query {
    riveraBanner: file(relativePath: { eq: "team-banners/rivera.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    juanBanner: file(relativePath: { eq: "team-banners/juan.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    arceoBanner: file(relativePath: { eq: "team-banners/arceo.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    maiquezBanner: file(relativePath: { eq: "team-banners/maiquez.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    quitoBanner: file(relativePath: { eq: "team-banners/quito.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    santiagoBanner: file(relativePath: { eq: "team-banners/santiago.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    dayritBanner: file(relativePath: { eq: "team-banners/dayrit.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    alootBanner: file(relativePath: { eq: "team-banners/aloot.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    fortoBanner: file(relativePath: { eq: "team-banners/forto.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

const MemberCard = ({ memberIndex, onCardContentScroll, disableScroll }: MemberCardProps) => {
  const data: MemberBannersQueryData = useStaticQuery(query)

  const member: MemberInfo | undefined = allMembers[memberIndex]
  if (member === undefined) throw new Error('Member not found')

  const { name, bannerPhotoSource, socialMediaLinks } = member
  const bannerImage = data[bannerPhotoSource]?.childImageSharp?.gatsbyImageData
  const [firstSocialLink] = socialMediaLinks

  return (
    <>
      {bannerImage && (
        <GatsbyImage css={bannerImageStyles} image={bannerImage} alt={`${name} Banner`} />
      )}
      <Content>
        <InfoContainer disableScroll={disableScroll} onScroll={onCardContentScroll}>
          <InfoSection title="Education" memberIndex={memberIndex} careerInfoType="education" />
          <InfoSection
            title="Professional Experience"
            memberIndex={memberIndex}
            careerInfoType="experience"
          />
          <InfoSection
            title="Affiliations"
            memberIndex={memberIndex}
            careerInfoType="affiliations"
          />
          <ScrollFade />
        </InfoContainer>
        <Footer>
          <MemberSocialMediaLinks />
          {firstSocialLink && (
            <MemberPageLink href={firstSocialLink.link} target="_blank" rel="noreferrer">
              Learn More
              <StaticImage
                css={caratImageStyles}
                height={14}
                placeholder="blurred"
                src="../../../../../images/carat-right-blue.png"
                alt="Button arrow"
              />
            </MemberPageLink>
          )}
        </Footer>
      </Content>
    </>
  )
}

export default MemberCard
