import styled from 'styled-components'
import { down, between } from 'styled-breakpoints'

export const HeaderContainer = styled.header`
  z-index: 12;
  position: relative;
`

export const Logo = styled.div`
  position: absolute;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  padding-right: 60px;
  background: ${props => props.theme.colors.white};
  border-radius: 0 40% 50% 50%;
  top: -25px;
  left: -30px;
  z-index: 1;

  svg {
    width: 185px !important;
  }

  ${between('sm', 'md')} {
    padding-top: 38px;
    padding-bottom: 38px;
    padding-left: 50px;
    padding-right: 50px;
  }

  ${between('xs', 'sm')} {
    padding-top: 38px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 32px;
  }

  ${down('sm')} {
    svg {
      width: calc(
        110px + (130 - 127) * ((100vw - 320px) / (768 - 320))
      ) !important;
    }
  }
`
