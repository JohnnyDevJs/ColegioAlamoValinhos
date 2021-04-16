import React from 'react'

import { Fade } from 'react-awesome-reveal'
import { HeroContainer, Content } from './styles'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import ButtonLink from '@/components/Buttons/Link'

import HomeHeroImage from '../../../../public/assets/home-hero-image.png'
const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Container spaceBetween columnMb>
        <Fade cascade delay={200} direction="left" duration={500}>
          <Content>
            <Heading titleColor="#FFFFFF" titleSize="medium">
              Conheça o jeito
              <br />
              Álamo de educar!
            </Heading>
            <ButtonLink
              href="/matriculas"
              size="large"
              color="#BAC529"
              hover="#3D843C"
            >
              Matricule-se
            </ButtonLink>
          </Content>
        </Fade>
        <Fade cascade delay={210} direction="right" duration={500}>
          <img
            src={HomeHeroImage}
            alt="Conheça o jeito Álamo de educar!"
            width={665}
            height={577}
          />
        </Fade>
      </Container>
    </HeroContainer>
  )
}
export default Hero
