import styled from '@emotion/styled'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../constants'

export type CtaButtonColor = 'blue' | 'gold'
interface Props {
  className?: string
  text: string
  color: CtaButtonColor
  onClick: () => void
}

const ButtonContainer = styled.button<{ color: CtaButtonColor }>`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${FONT_FAMILY.BODY};
  font-weight: ${FONT_WEIGHT.SEMIBOLD};
  letter-spacing: 0.075em;
  font-size: 15px;
  border-radius: 12px;
  padding: 16px 28px;
  opacity: 1;
  border: 0;
  background-color: transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;
  color: white;
  background-color: ${({ color }) => (color === 'blue' ? COLORS.BA_BLUE : COLORS.BA_GOLD)};

  ${MEDIAQUERY.SMALL} {
    font-size: 14px;
    padding: 14px 25px;
  }

  ${MEDIAQUERY.TABLET} {
    padding: 12px 23px;
  }

  &:hover {
    box-shadow: none;
    opacity: 0.8;
  }
`

const CtaButton = ({ className, color, text, onClick }: Props) => (
  <ButtonContainer className={className} color={color} type="button" onClick={onClick}>
    {text}
  </ButtonContainer>
)

export default CtaButton
