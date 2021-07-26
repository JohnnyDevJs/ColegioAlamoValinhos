import React, { useCallback, useState } from 'react'
import { Bounce } from 'react-awesome-reveal'
import { IoMdClose } from 'react-icons/io'
import { MobileContent, Logo } from './styles'

import Nav from '@/components/Header/Mobile/Nav'
import Info from '@/components/Header/Mobile/Info'

import AlamoValinhosLogo from '../../../../../public/assets/alamo-logo-valinhos-2.svg'

const Toggle: React.FC = () => {
  const handleCloseToggle = useCallback(() => {
    document.querySelector('.toggle-menu').classList.remove('open')
  }, [])
  return (
    <MobileContent className="toggle-menu">
      <IoMdClose
        size={28}
        color="#3D843C"
        className="close"
        onClick={handleCloseToggle}
      />
      <Logo>
        <Bounce>
          <AlamoValinhosLogo />
        </Bounce>
      </Logo>
      <Info />
      <Nav />
    </MobileContent>
  )
}

export default Toggle
