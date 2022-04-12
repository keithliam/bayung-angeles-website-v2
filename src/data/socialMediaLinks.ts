import facebookBlue from '../images/social-media-icons/facebook-blue.svg'
import instagramBlue from '../images/social-media-icons/instagram-blue.svg'
import twitterBlue from '../images/social-media-icons/twitter-blue.svg'
import tiktokBlue from '../images/social-media-icons/tiktok-blue.svg'
import facebookWhite from '../images/social-media-icons/facebook-white.svg'
import instagramWhite from '../images/social-media-icons/instagram-white.svg'
import twitterWhite from '../images/social-media-icons/twitter-white.svg'
import tiktokWhite from '../images/social-media-icons/tiktok-white.svg'

export interface SocialMediaLinkData {
  name: string
  link: string
  iconBlue: string
  iconWhite: string
}

export const socialMediaLinks: SocialMediaLinkData[] = [
  {
    name: 'Facebook',
    link: 'https://bit.ly/bayung-angeles-facebook-page',
    iconBlue: facebookBlue as string,
    iconWhite: facebookWhite as string,
  },
  {
    name: 'Instagram',
    link: 'https://bit.ly/bayung-angeles-instagram',
    iconBlue: instagramBlue as string,
    iconWhite: instagramWhite as string,
  },
  {
    name: 'Twitter',
    link: 'https://bit.ly/bayung-angeles-twitter',
    iconBlue: twitterBlue as string,
    iconWhite: twitterWhite as string,
  },
  {
    name: 'TikTok',
    link: 'https://bit.ly/bayung-angeles-tiktok',
    iconBlue: tiktokBlue as string,
    iconWhite: tiktokWhite as string,
  },
]
