import { MutableRefObject } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import SwiperCore from 'swiper'
import { StaticImage } from 'gatsby-plugin-image'
import {
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  MEDIAQUERY,
  TEAM_CARDS_BORDER_RADIUS,
  TEAM_CARDS_BREAKPOINT_MOBILE,
  TEAM_CARDS_SHADOW,
} from '../../../constants'
import {
  teamCategories,
  categoryIndexByOverallMemberIndex,
  memberIndexByOverallMemberIndex,
  overallMemberIndexByCategoryMemberIndices,
} from '../../../data/team'

interface Props {
  activeMemberIndex: number
  swiperRef: MutableRefObject<SwiperCore | undefined>
}

const Card = styled.div`
  flex: 0;
  padding: 20px 0;
  border-radius: ${TEAM_CARDS_BORDER_RADIUS};
  box-shadow: ${TEAM_CARDS_SHADOW};
  position: relative;
  z-index: 20;
  background-color: #ebebeb99;
  backdrop-filter: blur(10px);

  ${MEDIAQUERY.LARGE} {
    padding: 18px 0;
  }

  ${MEDIAQUERY.SMALL} {
    padding: 16px 0;
  }

  ${MEDIAQUERY.TABLET} {
    padding: 14px 0;
  }

  @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
    margin-top: 20px;
    max-width: 400px;
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 12px 0;
    max-width: 330px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
`

const Category = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  &:not(:first-of-type) {
    margin-top: 15px;

    ${MEDIAQUERY.SMALL} {
      margin-top: 13px;
    }

    @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
      margin-top: 6px;
    }
  }
`

const CategoryTitle = styled.span`
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  font-size: 14px;
  color: #494949;
  text-transform: uppercase;
  padding: 0 18px;
  letter-spacing: 0.075em;
  display: block;

  ${MEDIAQUERY.LARGE} {
    padding: 0 16px;
  }

  ${MEDIAQUERY.SMALL} {
    padding: 0 14px;
    font-size: 13px;
  }

  ${MEDIAQUERY.TABLET} {
    padding: 0 12px;
  }
`

const BUTTON_ACTIVE_BACKGROUND_COLOR = '#EBEBEBCC'
const MemberButton = styled.button<{ active: boolean }>`
  width: 100%;
  padding: 4px 18px;
  background-color: ${({ active }) => (active ? BUTTON_ACTIVE_BACKGROUND_COLOR : 'transparent')};
  border: none;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  font-size: 23px;
  color: ${COLORS.BA_BLUE};
  text-align: left;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${BUTTON_ACTIVE_BACKGROUND_COLOR};
  }

  ${MEDIAQUERY.LARGE} {
    font-size: 21px;
    padding: 4px 16px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 19px;
    padding: 3px 14px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 17px;
    padding: 3px 12px;
  }
`

const backgroundImageStyles = css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -25%);
  pointer-events: none;
  width: 60%;
  opacity: 0.5;
  display: block;

  @media (max-width: ${TEAM_CARDS_BREAKPOINT_MOBILE}) {
    display: none;
  }
`

const MemberList = ({ activeMemberIndex, swiperRef }: Props) => {
  const activeCategoryIndex: number = categoryIndexByOverallMemberIndex[activeMemberIndex]
  const activeMemberInCategoryIndex: number = memberIndexByOverallMemberIndex[activeMemberIndex]

  const handleMemberItemClick = (categoryIndex: number, memberIndex: number) => {
    const index: number = overallMemberIndexByCategoryMemberIndices[categoryIndex][memberIndex]
    swiperRef.current?.slideTo(index)
  }

  return (
    <Card>
      {teamCategories.map(({ title, members }, categoryIndex) => (
        <Category key={title}>
          <CategoryTitle>{title}</CategoryTitle>
          {members.map(({ name }, memberIndex) => (
            <MemberButton
              key={name}
              active={
                categoryIndex === activeCategoryIndex && memberIndex === activeMemberInCategoryIndex
              }
              type="button"
              onClick={() => handleMemberItemClick(categoryIndex, memberIndex)}
            >
              {name}
            </MemberButton>
          ))}
        </Category>
      ))}
      <StaticImage
        css={backgroundImageStyles}
        placeholder="blurred"
        src="../../../images/ba-logo-yellow.png"
        alt="Logo"
      />
    </Card>
  )
}

export default MemberList
