import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PreviewAsset, previewAssets } from '../../../data/downloadPreviews'
import { GatsbyImageQueryFile } from '../../../constants'

const BOX_SHADOW_COLOR = 'rgba(0, 0, 0, 0.16)'

interface Props {
  assetPreviewIndex: number
}

const PreviewWithLink = styled.a`
  position: absolute;
  transition: filter 0.5s ease-out, transform 0.5s ease-out;
  filter: drop-shadow(3px 3px 16px ${BOX_SHADOW_COLOR});
  transform: scale(1);

  &:hover {
    filter: drop-shadow(3px 3px 36px ${BOX_SHADOW_COLOR});
    transform: scale(1.25);
    z-index: 5;
  }
`

const previewImageStyles = css`
  height: 100%;
  width: 100%;
`

interface DownloadPreviewsQueryData {
  [k: string]: GatsbyImageQueryFile | undefined
  carSticker: GatsbyImageQueryFile
  badgePin: GatsbyImageQueryFile
  baLogo: GatsbyImageQueryFile
  fbFrame: GatsbyImageQueryFile
  jeepSign: GatsbyImageQueryFile
}

const query = graphql`
  query {
    carSticker: file(relativePath: { eq: "download-previews/car-sticker.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    badgePin: file(relativePath: { eq: "download-previews/badge-pin.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    baLogo: file(relativePath: { eq: "download-previews/ba-logo.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    fbFrame: file(relativePath: { eq: "download-previews/fb-frame.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeepSign: file(relativePath: { eq: "download-previews/jeep-sign.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

const DownloadAssetPreview = ({ assetPreviewIndex }: Props) => {
  const data: DownloadPreviewsQueryData = useStaticQuery(query)

  const asset: PreviewAsset | undefined = previewAssets[assetPreviewIndex]
  if (asset === undefined) throw new Error('Asset preview not found')

  const { name, source, imageSource, style } = asset
  const gatsbyPreviewImage = source ? data[source]?.childImageSharp?.gatsbyImageData : undefined

  const imageExists = gatsbyPreviewImage || imageSource
  return (
    <PreviewWithLink css={css(style)}>
      {imageExists && gatsbyPreviewImage ? (
        <GatsbyImage css={previewImageStyles} image={gatsbyPreviewImage} alt={name} />
      ) : (
        <img css={previewImageStyles} src={imageSource} alt={name} />
      )}
    </PreviewWithLink>
  )
}

export default DownloadAssetPreview
