import { css } from '@emotion/react'

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

export const HEADING_LINE_STYLES = `
  font-family: ${FONT_FAMILY.HEADING};
  font-size: 46px;
  letter-spacing: 0.065em;
  display: block;

  ${MEDIAQUERY.LARGE} {
    font-size: 40px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 38px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 35px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 30px;
  }
`
