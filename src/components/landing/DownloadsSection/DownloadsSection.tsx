import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Heading from '../../Heading'
import CtaButton from '../../CtaButton'
import DownloadAssetPreview from './DownloadAssetPreview'
import {
  COLORS,
  MEDIAQUERY,
  PADDING,
  DOWNLOADS_SECTION_FLEX_WRAP_MEDIAQUERY,
} from '../../../constants'
import { previewAssets } from '../../../data/downloadPreviews'

const SectionContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.BA_WHITE};
  padding: ${PADDING.PAGE_DEFAULT};
  display: flex;

  ${MEDIAQUERY.SMALL} {
    padding: ${PADDING.PAGE_SMALL};
  }

  ${DOWNLOADS_SECTION_FLEX_WRAP_MEDIAQUERY} {
    flex-direction: column;
    align-items: flex-end;
  }

  ${MEDIAQUERY.TABLET} {
    padding: ${PADDING.PAGE_TABLET};
  }

  ${MEDIAQUERY.MOBILE} {
    padding: ${PADDING.PAGE_MOBILE};
  }
`

const Content = styled.div`
  color: ${COLORS.BA_BLUE};
  flex: 1;

  ${DOWNLOADS_SECTION_FLEX_WRAP_MEDIAQUERY} {
    width: 100%;
  }
`

const headingStyles = css`
  max-width: 690px;
`

const ctaButtonStyles = css`
  margin-top: 28px;

  ${MEDIAQUERY.LARGE} {
    margin-top: 26px;
  }

  ${MEDIAQUERY.SMALL} {
    margin-top: 20px;
  }

  ${MEDIAQUERY.TABLET} {
    margin-top: 18px;
  }

  ${MEDIAQUERY.MOBILE} {
    margin-top: 16px;
  }
`

const AssetsPreviewContainer = styled.div`
  flex: 0;
  display: flex;
  align-items: center;

  ${DOWNLOADS_SECTION_FLEX_WRAP_MEDIAQUERY} {
    margin-top: 50px;
  }
`

const AssetsPreview = styled.div`
  height: 316px;
  width: 396px;
  position: relative;
  margin-left: 50px;

  ${MEDIAQUERY.LARGE} {
    height: 280px;
    width: 350px;
    margin-left: 40px;
  }

  ${MEDIAQUERY.SMALL} {
    height: 250px;
    width: 313px;
  }

  ${DOWNLOADS_SECTION_FLEX_WRAP_MEDIAQUERY} {
    height: 289px;
    width: 363px;
    margin-left: 0;
  }

  ${MEDIAQUERY.TABLET} {
    height: 319px;
    width: 400px;
    margin-left: 20px;
  }

  ${MEDIAQUERY.MOBILE} {
    height: 230px;
    width: 288px;
    margin-left: 20px;
  }
`

const DownloadsSection = () => (
  <SectionContainer>
    <Content>
      <Heading css={headingStyles}>
        Download wallpapers, stickers, Facebook frame, and more.
      </Heading>
      <CtaButton css={ctaButtonStyles} color="gold" text="Downloads" onClick={() => {}} />
    </Content>
    <AssetsPreviewContainer>
      <AssetsPreview>
        {previewAssets.map((asset, index) => (
          <DownloadAssetPreview key={asset.name} assetPreviewIndex={index} />
        ))}
      </AssetsPreview>
    </AssetsPreviewContainer>
  </SectionContainer>
)

export default DownloadsSection
