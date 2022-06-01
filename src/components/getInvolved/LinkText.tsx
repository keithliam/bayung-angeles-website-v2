import styled from '@emotion/styled'
import { COLORS } from '../../constants'

interface Props {
  className?: string
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

const LinkText = ({ className, href, text }: Props) => (
  <Link className={className} href={href} target="_blank" rel="noreferrer">
    {text}
  </Link>
)

export default LinkText
