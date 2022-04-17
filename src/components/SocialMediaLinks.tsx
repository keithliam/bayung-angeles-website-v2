import styled from '@emotion/styled'
import { SocialMediaLinkData, socialMediaLinks } from '../data/socialMediaLinks'
import { MEDIAQUERY } from '../constants'

type ButtonColors = 'white' | 'blue'
interface LinkProps {
  color: ButtonColors
  link: SocialMediaLinkData
}

interface LinksProps {
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

const SocialMediaLink = ({ color, link: { link, name, iconBlue, iconWhite } }: LinkProps) => (
  <Link href={link} target="_blank" rel="noreferrer">
    <Image src={color === 'blue' ? iconBlue : iconWhite} alt={name} />
  </Link>
)

const SocialMediaLinks = ({ color = 'blue' }: LinksProps) => (
  <div>
    {socialMediaLinks.map(link => (
      <SocialMediaLink key={link.name} color={color} link={link} />
    ))}
  </div>
)

export default SocialMediaLinks
