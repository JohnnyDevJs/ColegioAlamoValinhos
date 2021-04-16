import styled from 'styled-components'
import { down, between } from 'styled-breakpoints'

export const HeaderContainer = styled.header`
  z-index: 12;
  position: relative;
`

export const Logo = styled.div`
  position: absolute;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 70px;
  padding-right: 70px;
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

  ${down('sm')} {
    top: calc(-60px + (-25 - (-73)) * ((100vw - 320px) / (768 - 320)));
    left: calc(-30px + (-30 - (-50)) * ((100vw - 320px) / (768 - 320)));
    padding-top: calc(45px + (20 - 45) * ((100vw - 320px) / (768 - 320)));
    padding-bottom: calc(0px + (10 - 0) * ((100vw - 320px) / (768 - 320)));
    padding-left: calc(45px + (50 - 55) * ((100vw - 320px) / (768 - 320)));
    padding-right: calc(48px + (55 - 55) * ((100vw - 320px) / (768 - 320)));

    svg {
      width: calc(
        127px + (130 - 127) * ((100vw - 320px) / (768 - 320))
      ) !important;
    }
  }
`
