import { css } from '@emotion/react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../constants'

export type CtaButtonColor = 'blue' | 'gold'

interface RequiredProps {
  className?: string
  text: string
  color: CtaButtonColor
}
interface WithLocalLink extends RequiredProps {
  localLink: string
  externalLink?: string
}
interface WithExternalLink extends RequiredProps {
  localLink?: string
  externalLink: string
}
type Props = WithLocalLink | WithExternalLink

const buttonStyles = css`
  margin: 0;
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

const CtaButton = ({ className, color, text, localLink, externalLink }: Props) => {
  const backgroundColorStyles = `
    background-color: ${color === 'blue' ? COLORS.BA_BLUE : COLORS.BA_GOLD};
  `
  const styles = [buttonStyles, backgroundColorStyles]

  return localLink ? (
    <AnchorLink className={className} css={styles} to={localLink} title={text} />
  ) : (
    <a href={externalLink} className={className} css={styles}>
      {text}
    </a>
  )
}

export default CtaButton
