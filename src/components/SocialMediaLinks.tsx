import styled from '@emotion/styled'
import { Interpolation, Theme } from '@emotion/react'
import { SocialMediaLinkData, socialMediaLinks } from '../data/socialMediaLinks'
import { MEDIAQUERY } from '../constants'

type ButtonColors = 'white' | 'blue'
interface LinkProps {
  className?: string
  color: ButtonColors
  link: SocialMediaLinkData
}

interface LinksProps {
  className?: string
  linkCss?: Interpolation<Theme>
  color: ButtonColors
}

const Link = styled.a`
  display: inline-block;
  height: 50px;

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  ${MEDIAQUERY.LARGE} {
    height: 50px;
  }

  ${MEDIAQUERY.TABLET} {
    height: 45px;

    &:not(:last-of-type) {
      margin-right: 18px;
    }
  }

  ${MEDIAQUERY.MOBILE} {
    height: 40px;

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`

const Image = styled.img`
  height: 100%;
  transition: filter 0.3s ease-out;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
`

const SocialMediaLink = ({
  className,
  color,
  link: { link, name, iconBlue, iconWhite },
}: LinkProps) => (
  <Link className={className} href={link} target="_blank" rel="noreferrer">
    <Image src={color === 'blue' ? iconBlue : iconWhite} alt={name} />
  </Link>
)

SocialMediaLink.defaultProps = {
  className: undefined,
}

const SocialMediaLinks = ({ className, linkCss, color = 'blue' }: LinksProps) => (
  <div className={className}>
    {socialMediaLinks.map(link => (
      <SocialMediaLink css={linkCss} key={link.name} color={color} link={link} />
    ))}
  </div>
)

export default SocialMediaLinks
