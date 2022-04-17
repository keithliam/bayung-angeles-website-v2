import styled from '@emotion/styled'
import { MEDIAQUERY, FONT_FAMILY } from '../constants'

interface Props {
  title: string
  name: string
  link: string
}

const Link = styled.a`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-family: ${FONT_FAMILY.BODY};
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  opacity: 1;
  transition: filter 0.3s ease-in-out;
  text-align: right;
  max-width: 40%;

  &:hover {
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 1));
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 14px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 12px;
  }

  ${MEDIAQUERY.MOBILE} {
    right: 8px;
    bottom: 8px;
  }
`

const Span = styled.span`
  display: inline-block;
`

const PhotoCredit = ({ title, name, link }: Props) => (
  <Link href={link}>
    <Span>{title}</Span> <Span>© {name}</Span>
  </Link>
)

export default PhotoCredit
