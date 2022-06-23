import styled from '@emotion/styled'
import { COLORS } from '../../constants'

interface Props {
  text: string
}

const Text = styled.span`
  color: ${COLORS.BA_GOLD};
`

const HighlightText = ({ text }: Props) => <Text>{text}</Text>

export default HighlightText
