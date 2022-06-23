import styled from '@emotion/styled'
import { COLORS, MEDIAQUERY, PADDING } from '../../../constants'

const Separator = styled.div`
  height: 6px;
  width: 190px;
  background-color: ${COLORS.BA_GOLD};
  position: absolute;
  left: ${PADDING.PAGE_DEFAULT};
  top: 40px;

  ${MEDIAQUERY.SMALL} {
    height: 5px;
    width: 160px;
    top: 30px;
    left: ${PADDING.PAGE_SMALL};
  }

  ${MEDIAQUERY.TABLET} {
    top: 15px;
    left: ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    height: 4px;
    width: 115px;
    top: 10px;
    left: ${PADDING.PAGE_MOBILE};
  }
`

export default Separator
