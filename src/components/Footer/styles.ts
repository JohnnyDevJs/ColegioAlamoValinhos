import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

import BackgroundFooter from '../../../public/assets/background-footer.png'

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.darkBlueTwo};
  position: relative;
  height: 600px;
  overflow: hidden;

  display: flex;

  h4 + h4 {
    margin-top: 4rem;
  }

  a {
    text-transform: uppercase;
    margin-top: 2rem;
    font-weight: 500;
    font-size: min(max(1.5rem, 4vw), 24px);

    &.linkVinhedo {
      color: ${props => props.theme.colors.lightBlue2};
      display: inline-block;
      position: relative;
      z-index: 1;
      font-weight: 700;

      transition: color 0.3s;

      &:hover {
        color: ${props => props.theme.colors.green};
      }
    }
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: url(${BackgroundFooter}) no-repeat;
    background-size: contain;
    background-position: bottom right;
    position: absolute;
    bottom: -30px;
    right: 0;
  }

  ${up('md')} {
    &:after {
      width: calc(538px + (1000 - 538) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  ${up('xs')} {
    a {
      font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
    }
  }

  ${down('md')} {
    .main-footer {
      margin: 2rem 0;
    }
  }

  ${down('sm')} {
    ul,
    a {
      width: 100%;
      text-align: center;
    }

    height: calc(585px + (840 - 585) * ((100vw - 320px) / (768 - 320)));
  }
`

export const Items = styled.ul`
  list-style: none;
  position: relative;
  z-index: 1;

  + ul {
    margin-top: 2rem;
  }
`

export const Item = styled.li`
  width: 100%;

  ${up('xs')} {
    p {
      font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`

export const Social = styled.div`
  position: absolute;
  bottom: 3vw;
  right: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.darkBlueThree};
  border-radius: 83px 0 0 83px;
  padding-top: 29px;
  padding-left: 64px;
  padding-bottom: 29px;
  padding-right: 32px;

  display: flex;
  align-items: center;

  span {
    font-size: calc(13px + (28 - 13) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.white};
    font-weight: 400;
    margin: 0 1rem 0 0.5rem;
  }

  a {
    background-color: ${props => props.theme.colors.lightGreen};
    font-size: calc(15px + (24 - 15) * ((100vw - 320px) / (1920 - 320)));
    text-transform: none;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    padding-top: calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));
    padding-left: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
    padding-right: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
    border-radius: 61px;
    margin-top: 0;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.green};
    }
  }

  .social {
    display: flex;
  }

  ${down('sm')} {
    padding-top: calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));
    padding-bottom: calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));
    padding-left: calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));
    padding-right: calc(10px + (28 - 10) * ((100vw - 320px) / (768 - 320)));

    svg {
      width: calc(17px + (33 - 17) * ((100vw - 320px) / (768 - 320)));
    }

    span {
      margin: 0 0.5rem 0 0.5rem;
    }
  }
`
