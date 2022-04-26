import React from 'react'
import styled from '@emotion/styled'
import {
  COLORS,
  FONT_WEIGHT,
  MEDIAQUERY,
  TEAM_CARDS_BREAKPOINT_MOBILE,
} from '../../../../../constants'
import { allMembers, CareerInfoType, MemberInfo } from '../../../../../data/team'

interface InfoSectionProps {
  title: string
  memberIndex: number
  careerInfoType: 'education' | 'experience' | 'affiliations'
}

interface InfoSectionItemProps {
  highlight: string
  description?: string
}

const SectionContainer = styled.div`
  &:first-of-type {
    padding-top: 295px;

    ${MEDIAQUERY.LARGE} {
      padding-top: 220px;
    }

    ${MEDIAQUERY.SMALL} {
      padding-top: 195px;
    }

    ${MEDIAQUERY.TABLET} {
      padding-top: 165px;
    }

    @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
      padding-top: 195px;
    }

    ${MEDIAQUERY.MOBILE} {
      padding-top: 160px;
    }
  }

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`

const SectionTitle = styled.span`
  display: block;
  padding: 4px 15px;
  border-radius: 100px;
  background-color: ${COLORS.BA_GRAY};
  color: white;
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  text-transform: uppercase;
  width: fit-content;
`

const SectionContent = styled.ul`
  margin: 0;
  margin-top: 6px;
  padding-left: 15px;
`

const Item = styled.li`
  color: ${COLORS.BA_BLUE};

  &:not(:first-of-type) {
    margin-top: 4px;
  }
`
const HighlightText = styled.span`
  font-weight: ${FONT_WEIGHT.BOLD};
`

const InfoSectionItem = ({ highlight, description }: InfoSectionItemProps) => (
  <Item>
    <HighlightText>{highlight}</HighlightText>
    {description && (
      <>
        , <span>{description}</span>
      </>
    )}
  </Item>
)

const InfoSection = ({ title, memberIndex, careerInfoType }: InfoSectionProps) => {
  const member: MemberInfo | undefined = allMembers[memberIndex]
  const careerInfo: CareerInfoType[] = member?.[careerInfoType] || []

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>
        {careerInfo.map(({ highlight, description }) => (
          <InfoSectionItem
            key={`${highlight}${description || ''}`}
            highlight={highlight}
            description={description}
          />
        ))}
      </SectionContent>
    </SectionContainer>
  )
}

export default InfoSection
