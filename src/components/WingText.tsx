import styled from '@emotion/styled'
import wingGold from '../images/wing-gold.svg'

export type WingPosition = 'start' | 'end'
interface Props {
  text: string
  wingPosition: WingPosition
}

const TextContainer = styled.span`
  position: relative;
`

const Wing = styled.img<{ position: WingPosition }>`
  position: absolute;
  height: 1.05em;
  pointer-events: none;
  bottom: 0.25em;
  ${({ position }) => (position === 'start' ? 'left: 0.33em' : 'right: -0.45em')};
`

const WingText = ({ text, wingPosition }: Props) => (
  <TextContainer>
    {text}
    <Wing src={wingGold} alt="wing" position={wingPosition} />
  </TextContainer>
)

export default WingText
