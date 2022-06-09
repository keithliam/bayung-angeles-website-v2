import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import PreviewItem from './PreviewItem'
import { registerScrollResizeEventListeners } from '../../../helpers'
import { Preview } from '../../../data/downloads'
import { MEDIAQUERY } from '../../../constants'

interface Props {
  previews: Preview[]
  large?: boolean
}

const Container = styled.div<{ large: boolean }>`
  display: grid;
  gap: 30px;
  ${({ large }) =>
    large
      ? `
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      
    ${MEDIAQUERY.TABLET} {
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    }

    ${MEDIAQUERY.MOBILE} {
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    }
  `
      : `
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    ${MEDIAQUERY.LARGE} {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }

    ${MEDIAQUERY.SMALL} {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 25px;
    }

    ${MEDIAQUERY.TABLET} {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 20px;
    }

    ${MEDIAQUERY.MOBILE} {
      grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
      gap: 15px;
    }
  `}
`

const DownloadsPreview = ({ previews, large = false }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [previewsAppear, setPreviewsAppear] = useState(false)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (window && containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect()
        const newPreviewsAppear = top <= (window.innerHeight / 3) * 2
        setPreviewsAppear(newPreviewsAppear)
      }
    }
    handleScrollResizeEvent() // Trigger immediately to show element if it's already in view
    const unregisterScrollResizeEventListeners =
      registerScrollResizeEventListeners(handleScrollResizeEvent)

    return () => {
      unregisterScrollResizeEventListeners()
    }
  }, [previewsAppear])

  return (
    <Container ref={containerRef} large={large}>
      {previews.map((preview, index) => (
        <PreviewItem
          key={preview.source}
          item={preview}
          fadeDelay={index * 50}
          visible={previewsAppear}
          large={large}
        />
      ))}
    </Container>
  )
}

export default DownloadsPreview
