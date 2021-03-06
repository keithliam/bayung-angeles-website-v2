import { IGatsbyImageData } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

export interface GatsbyImageQueryFile {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

export const MEDIAQUERY = {
  LARGE: '@media (max-width: 1152px)',
  SMALL: '@media (max-width: 960px)',
  TABLET: '@media (max-width: 768px)',
  MOBILE: '@media (max-width: 480px)',
} as const

export const FONT_FAMILY = {
  HEADING: "'Maragsa', Helvetica, Arial, sans-serif",
  BODY: "'Public SansVariable', Helvetica, Arial, sans-serif",
}

export const FONT_WEIGHT = {
  THIN: 100,
  XLIGHT: 200,
  LIGHT: 300,
  NORMAL: 'normal',
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  XBOLD: 800,
  BLACK: 900,
}

export const COLORS = {
  BA_BLUE: '#003153',
  BA_GOLD: '#D4AF37',
  BA_WHITE: '#F5F5F5',
  BA_SMOKE: '#E4E4E4',
  BA_GRAY: '#343434',
}

export const PADDING = {
  PAGE_DEFAULT: '60px',
  PAGE_SMALL: '45px',
  PAGE_TABLET: '25px',
  PAGE_MOBILE: '15px',
}

export const GLOBAL_CSS = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${FONT_FAMILY.BODY};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${COLORS.BA_BLUE};
  }
`

export const COVER_SECTION_ID = 'home'
export const PILLARS_SECTION_ID = 'pillars'
export const TEAM_SECTION_ID = 'team-section'
export const GET_INVOLVED_SECTION_ID = 'get-involved'
export const STEP_THREE_SUBSECTION_ID = 'contact-us'
export const DOWNLOADS_SECTION_ID = 'downloads'

export const TEAM_CARDS_BREAKPOINT_MOBILE = '610px'
export const TEAM_CARDS_BORDER_RADIUS = '15px'
export const TEAM_CARDS_BACKGROUND_COLOR = '#EBEBEB'
export const TEAM_CARDS_SHADOW = '0 0 20px rgba(0, 0, 0, 0.13)'

export const DOWNLOADS_SECTION_FLEX_WRAP_MEDIAQUERY = '@media (max-width: 850px)'
