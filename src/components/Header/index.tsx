import React from 'react'
import Link from 'next/link'
import { Bounce } from 'react-awesome-reveal'
import { HeaderContainer, Logo } from './styles'

import TopBar from '@/components/Header/TopBar'
import NavBar from '@/components/Header/NavBar'
import Toggle from '@/components/Header/Mobile/Toggle'
import AlamoValinhosLogo from '../../../public/assets/alamo-logo-valinhos-2.svg'

const Header: React.FC = () => (
  <>
    <HeaderContainer>
      <Logo>
        <Bounce>
          <Link href="/">
            <a>
              <AlamoValinhosLogo />
            </a>
          </Link>
        </Bounce>
      </Logo>
      <TopBar />
      <NavBar />
    </HeaderContainer>
    <Toggle />
  </>
)

export default Header
