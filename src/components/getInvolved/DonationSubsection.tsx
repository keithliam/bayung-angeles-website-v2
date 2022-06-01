import React from 'react'
import styled from '@emotion/styled'
import Subsection from './Subsection/Subsection'

const ShakingGiftBox = styled.span`
  display: inline-block;
  animation: shake 3.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  backface-visibility: hidden;

  @keyframes shake {
    0%,
    50% {
      transform: rotate(0deg) scale(1) translate(0, 0);
    }

    5%,
    45% {
      transform: rotate(-5deg) scale(1.1) translate(-1px, 0);
    }

    10%,
    40% {
      transform: rotate(5deg) scale(1.2) translate(2px, 0);
    }

    15%,
    35% {
      transform: rotate(0deg) scale(1.3) translate(-4px, 0);
    }

    20%,
    30% {
      transform: rotate(5deg) scale(1.5) translate(4px, 0);
    }

    25% {
      transform: rotate(-5deg) scale(1.5) translate(-4px, 0);
    }
  }
`

const Header = () => (
  <>
    Donations are welcome <ShakingGiftBox>🎁</ShakingGiftBox>
  </>
)

const Content = () =>
  'OUR RESOURCES ARE LIMITED, SO WE MAKE THE MOST OUT OF THEM. ANYTHING FROM CASH TO MERCHANDISE AND COLLATERALS ARE GREATLY APPRECIATED.'

const StepFiveSubsection = () => (
  <Subsection
    headerComponent={Header}
    contentComponent={Content}
    link="https://bit.ly/bayung-angeles-donation"
    linkButtonText="LEARN MORE"
    showSeparator
  />
)

export default StepFiveSubsection
