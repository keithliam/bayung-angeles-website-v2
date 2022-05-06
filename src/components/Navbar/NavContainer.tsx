import styled from '@emotion/styled'
import { MEDIAQUERY, PADDING } from '../../constants'

type PositionType = 'absolute' | 'fixed'

const NavContainer = styled.nav<{ position: PositionType }>`
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 ${PADDING.PAGE_DEFAULT};
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100px;
  position: ${({ position }) => position};

  ${MEDIAQUERY.SMALL} {
    padding: 0 ${PADDING.PAGE_SMALL};
    height: 96px;
  }

  ${MEDIAQUERY.TABLET} {
    padding: 0 ${PADDING.PAGE_TABLET};
    height: 88px;
  }

  ${MEDIAQUERY.MOBILE} {
    padding: 0 ${PADDING.PAGE_MOBILE};
  }
`

export default NavContainer
