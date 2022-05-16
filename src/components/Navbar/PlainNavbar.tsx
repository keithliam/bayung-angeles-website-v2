import { useEffect, useState } from 'react'
import Logo from './Logo'
import NavContainer from './NavContainer'
import NavLinks from './NavLinks'

interface Props {
  showLogo?: boolean
}

const PlainNavbar = ({ showLogo = false }: Props) => {
  const [shortenOurTeamNavText, setShortenOurTeamNavText] = useState(false)

  useEffect(() => {
    if (window) {
      const handleResizeEvent = () => setShortenOurTeamNavText(window.innerWidth <= 400)
      handleResizeEvent()

      window.addEventListener('resize', handleResizeEvent)

      return () => {
        window.removeEventListener('resize', handleResizeEvent)
      }
    }

    return () => {}
  }, [])

  return (
    <NavContainer position="absolute">
      {showLogo && <Logo wingColor="gold" />}
      <NavLinks shortenOurTeamNavText={shortenOurTeamNavText} />
    </NavContainer>
  )
}

export default PlainNavbar
