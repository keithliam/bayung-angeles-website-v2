import styled from '@emotion/styled'
import { FONT_FAMILY, MEDIAQUERY } from '../constants'

const Heading = styled.span`
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

export default Heading
