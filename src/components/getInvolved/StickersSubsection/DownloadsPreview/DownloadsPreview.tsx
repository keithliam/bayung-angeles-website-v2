import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import PreviewItem from './PreviewItem'
import { registerScrollResizeEventListeners } from '../../../../helpers'
import { Preview } from '../../../../data/downloads'
import { MEDIAQUERY } from '../../../../constants'

interface Props {
  previews: Preview[]
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;

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
`

const DownloadsPreview = ({ previews }: Props) => {
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
    <Container ref={containerRef}>
      {previews.map((preview, index) => (
        <PreviewItem
          key={preview.source}
          item={preview}
          fadeDelay={index * 50}
          visible={previewsAppear}
        />
      ))}
    </Container>
  )
}

export default DownloadsPreview
