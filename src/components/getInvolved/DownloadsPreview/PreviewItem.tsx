import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Preview } from '../../../data/downloads'
import { GatsbyImageQueryFile } from '../../../constants'

const PREVIEWS_BOX_SHADOW_COLOR = 'rgba(0, 0, 0, 0.16)'

interface Props {
  item: Preview
  fadeDelay: number
  visible: boolean
  large?: boolean
}

const Link = styled.a<{ transitionDelay: number; visible: boolean; large: boolean }>`
  width: 100%;
  background-color: white;
  border-radius: 18px;
  transition: filter 0.5s ease-out, transform 0.5s ease-out, opacity 0.5s ease-out;
  transition-delay: ${({ transitionDelay }) => transitionDelay}ms;
  filter: drop-shadow(3px 3px 16px ${PREVIEWS_BOX_SHADOW_COLOR});
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ visible }) =>
    visible
      ? `
    transform: translateY(0);
    opacity: 1;
  `
      : `
    transform: translateY(20%);
    opacity: 0;
  `};

  &:hover {
    filter: drop-shadow(3px 3px 36px ${PREVIEWS_BOX_SHADOW_COLOR});
    transform: scale(${({ large }) => (large ? 1.75 : 2)});
    position: relative;
    z-index: 3;
    transition-delay: 0ms;
  }
`

const imageTagStyles = css`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

interface PreviewQueryData {
  [k: string]: GatsbyImageQueryFile | undefined
  atinBayu: GatsbyImageQueryFile
  breakingBad: GatsbyImageQueryFile
  bts: GatsbyImageQueryFile
  grab: GatsbyImageQueryFile
  gta: GatsbyImageQueryFile
  squidGame: GatsbyImageQueryFile
  starWars: GatsbyImageQueryFile
  startUp: GatsbyImageQueryFile
  strangerThings: GatsbyImageQueryFile
  blackPink: GatsbyImageQueryFile
  jeep1: GatsbyImageQueryFile
  jeep2: GatsbyImageQueryFile
  jeep3: GatsbyImageQueryFile
  jeep4: GatsbyImageQueryFile
  jeep5: GatsbyImageQueryFile
  jeep6: GatsbyImageQueryFile
  jeep7: GatsbyImageQueryFile
  jeep8: GatsbyImageQueryFile
  jeep9: GatsbyImageQueryFile
  jeep10: GatsbyImageQueryFile
  jeep11: GatsbyImageQueryFile
  jeep12: GatsbyImageQueryFile
  wingsEssential: GatsbyImageQueryFile
  abayanYuKePu: GatsbyImageQueryFile
  slate: GatsbyImageQueryFile
  coverPhoto: GatsbyImageQueryFile
  silhouette: GatsbyImageQueryFile
  illustration: GatsbyImageQueryFile
  illustrationLandscape: GatsbyImageQueryFile
  background1Portrait: GatsbyImageQueryFile
  background1: GatsbyImageQueryFile
  background2: GatsbyImageQueryFile
  calendar: GatsbyImageQueryFile
  cvRivera: GatsbyImageQueryFile
  cvJuan: GatsbyImageQueryFile
  cvArceo: GatsbyImageQueryFile
  cvDayrit: GatsbyImageQueryFile
  cvSantiago: GatsbyImageQueryFile
  cvQuito: GatsbyImageQueryFile
  cvAloot: GatsbyImageQueryFile
  cvMaiquez: GatsbyImageQueryFile
}

const query = graphql`
  query {
    atinBayu: file(relativePath: { eq: "download-previews/stickers/atin-bayu.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    breakingBad: file(relativePath: { eq: "download-previews/stickers/breaking-bad.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    bts: file(relativePath: { eq: "download-previews/stickers/bts.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    grab: file(relativePath: { eq: "download-previews/stickers/grab.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    gta: file(relativePath: { eq: "download-previews/stickers/gta.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    squidGame: file(relativePath: { eq: "download-previews/stickers/squid-game.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    starWars: file(relativePath: { eq: "download-previews/stickers/star-wars.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    startUp: file(relativePath: { eq: "download-previews/stickers/start-up.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    strangerThings: file(relativePath: { eq: "download-previews/stickers/stranger-things.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    blackPink: file(relativePath: { eq: "download-previews/stickers/black-pink.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep1: file(relativePath: { eq: "download-previews/stickers/jeep-1.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep2: file(relativePath: { eq: "download-previews/stickers/jeep-2.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep3: file(relativePath: { eq: "download-previews/stickers/jeep-3.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep4: file(relativePath: { eq: "download-previews/stickers/jeep-4.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep5: file(relativePath: { eq: "download-previews/stickers/jeep-5.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep6: file(relativePath: { eq: "download-previews/stickers/jeep-6.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep7: file(relativePath: { eq: "download-previews/stickers/jeep-7.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep8: file(relativePath: { eq: "download-previews/stickers/jeep-8.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep9: file(relativePath: { eq: "download-previews/stickers/jeep-9.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep10: file(relativePath: { eq: "download-previews/stickers/jeep-10.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep11: file(relativePath: { eq: "download-previews/stickers/jeep-11.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    jeep12: file(relativePath: { eq: "download-previews/stickers/jeep-12.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    wingsEssential: file(relativePath: { eq: "download-previews/stickers/wings-essential.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    abayanYuKePu: file(relativePath: { eq: "download-previews/stickers/abayan-yu-ke-pu.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    slate: file(relativePath: { eq: "download-previews/posters-wallpapers/slate.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    coverPhoto: file(relativePath: { eq: "download-previews/posters-wallpapers/cover-photo.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    silhouette: file(relativePath: { eq: "download-previews/posters-wallpapers/silhouette.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    illustration: file(
      relativePath: { eq: "download-previews/posters-wallpapers/illustration.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    illustrationLandscape: file(
      relativePath: { eq: "download-previews/posters-wallpapers/illustration-landscape.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    background1Portrait: file(
      relativePath: { eq: "download-previews/posters-wallpapers/bg-1-portrait.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    background1: file(relativePath: { eq: "download-previews/posters-wallpapers/bg-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    background2: file(relativePath: { eq: "download-previews/posters-wallpapers/bg-2.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    calendar: file(relativePath: { eq: "download-previews/posters-wallpapers/calendar.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvRivera: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-rivera.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvJuan: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-juan.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvArceo: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-arceo.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvDayrit: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-dayrit.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvSantiago: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-santiago.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvQuito: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-quito.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvAloot: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-aloot.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    cvMaiquez: file(relativePath: { eq: "download-previews/posters-wallpapers/cv-maiquez.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

const PreviewItem = ({ item, fadeDelay, visible, large = false }: Props) => {
  const data: PreviewQueryData = useStaticQuery(query)

  const { source, imageSource, link, aspectRatio } = item
  const gatsbyPreviewImage = source ? data[source]?.childImageSharp?.gatsbyImageData : undefined

  const imageExists = gatsbyPreviewImage || imageSource
  if (!imageExists) throw new Error('Preview image not found')

  const imageStyles = css`
    aspect-ratio: ${aspectRatio};
  `

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      transitionDelay={fadeDelay}
      visible={visible}
      large={large}
    >
      {imageExists && gatsbyPreviewImage ? (
        <GatsbyImage css={imageStyles} image={gatsbyPreviewImage} alt="Download preview" />
      ) : (
        <img css={[imageTagStyles, imageStyles]} src={imageSource} alt="Download preview" />
      )}
    </Link>
  )
}

export default PreviewItem
