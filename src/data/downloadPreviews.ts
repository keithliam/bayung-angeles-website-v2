import { CSSObject } from '@emotion/serialize'
import baIllustrationAnimated from '../images/download-previews/ba-illus-animated.gif'

type PreviewPositioningStyle = Pick<CSSObject, 'top' | 'right' | 'bottom' | 'left'>
type PreviewSizeStyle = Pick<CSSObject, 'height' | 'width'>
export type PreviewAssetStyle = Required<PreviewSizeStyle> & Partial<PreviewPositioningStyle>

export interface PreviewAsset {
  name: string
  source?: string
  imageSource?: string
  style: PreviewAssetStyle
}

export const previewAssets: PreviewAsset[] = [
  {
    name: 'Car Sticker',
    source: 'carSticker',
    style: {
      top: '5.4%',
      height: '68.7%',
      width: '60.6%',
    },
  },
  {
    name: 'Badge Pin',
    source: 'badgePin',
    style: {
      top: '0',
      right: '14.9%',
      height: '50.9%',
      width: '43.2%',
    },
  },
  {
    name: 'Báyung Ángeles Illustration',
    imageSource: baIllustrationAnimated,
    style: {
      top: '44%',
      left: '9.3%',
      height: '38.6%',
      width: '30.8%',
    },
  },
  {
    name: 'Báyung Ángeles Logo',
    source: 'baLogo',
    style: {
      top: '28.2%',
      left: '36.6%',
      height: '43.4%',
      width: '39.9%',
    },
  },
  {
    name: 'Facebook Frame',
    source: 'fbFrame',
    style: {
      top: '38%',
      right: '0',
      height: '49.1%',
      width: '39.1%',
    },
  },
  {
    name: 'Jeepney Sign',
    source: 'jeepSign',
    style: {
      bottom: '0',
      left: '25.5%',
      height: '29.7%',
      width: '46.2%',
    },
  },
]

const assetStylesAreEqual = (a: PreviewAssetStyle, b: PreviewAssetStyle): boolean =>
  a.top === b.top &&
  a.right === b.right &&
  a.bottom === b.bottom &&
  a.left === b.left &&
  a.height === b.height &&
  a.width === b.width

export const previewAssetsAreEqual = (a: PreviewAsset, b: PreviewAsset): boolean =>
  a.name === b.name && a.source === b.source && assetStylesAreEqual(a.style, b.style)
