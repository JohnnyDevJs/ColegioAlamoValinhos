import styled from 'styled-components'
import { down, between } from 'styled-breakpoints'
import backgroundHomeHero from '../../../../public/assets/background-home-hero.png'

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 5vw;
  padding-bottom: 5vw;
  position: relative;
  overflow: hidden;

  h2 {
    text-align: left;
  }

  &:after {
    content: '';
    background: url(${backgroundHomeHero}) no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: bottom;
    position: absolute;
    bottom: 0;
    z-index: -1;
  }

  ${down('sm')} {
    &:after {
      background-position: left;
    }

    h2 {
      text-align: center;
    }
  }
`

export const Content = styled.div`
  width: auto;
  margin-top: 6rem;

  a {
    margin-top: 2.3rem;
  }

  img {
    margin-top: 2rem;
  }

  ${down('md')} {
    min-width: 379px;
    width: 100%;
  }

  ${between('md', 'lg')} {
    margin-top: 14vw;
  }

  ${down('sm')} {
    min-width: 100%;
    text-align: center;

    margin-bottom: 2rem;
  }
`
