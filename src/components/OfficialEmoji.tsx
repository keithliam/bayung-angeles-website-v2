import styled from '@emotion/styled'

type EmojiColors = 'yellow' | 'white'
interface Props {
  color?: EmojiColors
}

const Span = styled.span`
  display: inline-block;
  margin: 0 -0.315em 0 -0.2em;
  animation: bounce 2s cubic-bezier(0.31, 0.02, 0.36, 0.94) infinite alternate;

  @keyframes bounce {
    0% {
      transform: translateY(0) rotate(0);
    }

    100% {
      transform: translateY(-20%) rotate(5deg);
    }
  }
`

const OfficialEmoji = ({ color = 'yellow' }: Props) => (
  <Span>{color === 'yellow' ? '☝️' : '☝🏻'}</Span>
)

export default OfficialEmoji
