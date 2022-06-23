import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { registerScrollResizeEventListeners } from '../../../helpers'
import { COLORS, FONT_FAMILY, FONT_WEIGHT, MEDIAQUERY } from '../../../constants'

interface Props {
  className?: string
  number: number
}

const Text = styled.span<{ visible: boolean }>`
  position: absolute;
  top: -170px;
  left: -20px;
  font-family: ${FONT_FAMILY.HEADING};
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-size: 300px;
  letter-spacing: 0.065em;
  color: ${COLORS.BA_BLUE};
  user-select: none;
  transition: opacity 1s ease-out;
  opacity: ${({ visible }) => (visible ? '0.16' : '0')};

  ${MEDIAQUERY.LARGE} {
    font-size: 280px;
    top: -160px;
    left: -18px;
  }

  ${MEDIAQUERY.SMALL} {
    font-size: 250px;
    top: -145px;
    left: -16px;
  }

  ${MEDIAQUERY.TABLET} {
    font-size: 210px;
    top: -130px;
    left: -14px;
  }

  ${MEDIAQUERY.MOBILE} {
    font-size: 180px;
    top: -120px;
    left: -12px;
  }
`

const StepNumber = ({ className, number }: Props) => {
  const ref = useRef<HTMLSpanElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect()
        const newShow = top <= (window.innerHeight / 5) * 3
        setShow(newShow)
      }
    }
    handleScrollResizeEvent() // Trigger immediately to show element if it's already in view
    const unregisterScrollResizeEventListeners =
      registerScrollResizeEventListeners(handleScrollResizeEvent)

    return () => {
      unregisterScrollResizeEventListeners()
    }
  }, [show])

  return (
    <Text ref={ref} className={className} visible={show}>
      {number}
    </Text>
  )
}

export default StepNumber
