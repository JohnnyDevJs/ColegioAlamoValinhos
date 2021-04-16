import React, { useCallback, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { MenuHamburger } from './styles'

const Hamburger: React.FC = () => {
  const handleOpenToggle = useCallback(() => {
    document.querySelector('.toggle-menu').classList.add('open')
  }, [])

  return (
    <>
      <MenuHamburger onClick={handleOpenToggle}>
        <span>Menu</span>
        <GiHamburgerMenu size={22} color="#305FA4" />
      </MenuHamburger>
    </>
  )
}

export default Hamburger
