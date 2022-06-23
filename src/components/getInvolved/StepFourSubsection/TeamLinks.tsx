import { Fragment } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { allMembers } from '../../../data/team'
import LinkText from '../LinkText'
import { MEDIAQUERY } from '../../../constants'

const TeamLinksContainer = styled.div`
  display: grid;
  grid: auto-flow / max-content 1fr;
  gap: 12px 30px;
  text-transform: uppercase;

  ${MEDIAQUERY.MOBILE} {
    gap: 12px 15px;
  }
`

const MemberName = styled.span`
  font-size: 17px;

  ${MEDIAQUERY.TABLET} {
    font-size: 15px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 14px;
  }
`

const MemberLinks = styled.div`
  display: flex;
  align-items: center;

  ${MEDIAQUERY.MOBILE} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const memberLinkTextStyles = css`
  font-size: 14px;

  ${MEDIAQUERY.MOBILE} {
    font-size: 13px;
  }

  &:not(:first-of-type) {
    margin-left: 15px;

    ${MEDIAQUERY.MOBILE} {
      margin-left: 0;
      margin-top: 3px;
    }
  }
`

const TeamLinks = () => (
  <TeamLinksContainer>
    {allMembers.map(({ name: memberName, socialMediaLinks }) => (
      <Fragment key={memberName}>
        <MemberName>{memberName}:</MemberName>
        <MemberLinks>
          {socialMediaLinks.map(({ name: linkName, link }) => (
            <LinkText key={linkName} css={memberLinkTextStyles} href={link} text={linkName} />
          ))}
        </MemberLinks>
      </Fragment>
    ))}
  </TeamLinksContainer>
)

export default TeamLinks
