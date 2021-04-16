import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const NavBar = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
`

export const Nav = styled.nav`
  width: auto;
  height: 106px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 12;

  a {
    color: ${props => props.theme.colors.blue};
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;

    transition: color 0.3s;

    &.active {
      color: ${props => props.theme.colors.lightGreen};
    }

    &:hover {
      color: ${props => props.theme.colors.darkBlue};
    }
  }

  ${up('lg')} {
    a + a {
      margin-left: calc(16px + (48 - 16) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  ${down('md')} {
    height: calc(80px + (106 - 80) * ((100vw - 320px) / (768 - 320)));
    a {
      display: none;
    }
  }
`
