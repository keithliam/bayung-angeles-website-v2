import styled from '@emotion/styled'
import { COLORS } from '../../constants'

interface Props {
  href: string
  text: string
}

const Link = styled.a`
  color: ${COLORS.BA_GRAY};
  transition: color 0.2s ease-out;

  &:hover {
    color: ${COLORS.BA_GOLD};
  }
`

const LinkText = ({ href, text }: Props) => (
  <Link href={href} target="_blank" rel="noreferrer">
    {text}
  </Link>
)

export default LinkText
