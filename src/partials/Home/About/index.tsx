import React from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import Container from '@/layout/Container'

import ImageOne from '../../../../public/assets/about-image-one.png'
import ImageTwo from '../../../../public/assets/about-image-two.png'

import { AboutContainer, CarouselContent, Content } from './styles'

const handleDragStart = e => e.preventDefault()

const options = {
  onDragStart: handleDragStart,
  animationDuration: 600,
  autoPlayInterval: 900
}

const About: React.FC = () => (
  <AboutContainer>
    <Heading
      titleColor="#001D7E"
      titleSize="medium"
      titleBorder
      titleBorderColor="blue"
    >
      Quem somos?
    </Heading>

    <Container>
      <AliceCarousel mouseTracking {...options}>
        <CarouselContent className="one">
          <img
            src={ImageOne}
            alt="O Colégio Álamo conta com uma infraestrutura moderna e segura, além de professores qualificados e uma proposta pedagógica que estimula a aprendizagem de forma significativa e prazerosa."
            width={567}
            height={553}
          />
          <Content>
            <Heading titleColor="#BAC529" titleSize="small">
              Estrututura
            </Heading>
            <Paragraph paragraphColor="#777777" lineHeight="32px" size="26px">
              O Colégio Álamo conta com uma infraestrutura moderna e segura,
              além de professores qualificados e uma proposta pedagógica que
              estimula a aprendizagem de forma significativa e prazerosa.
            </Paragraph>
          </Content>
        </CarouselContent>

        <CarouselContent>
          <img
            src={ImageTwo}
            alt="Formar, através dos princípios cristãos, cidadãos capacitados academicamente, responsáveis, conscientes e críticos."
            width={558}
            height={513}
          />
          <Content>
            <Heading titleColor="#BAC529" titleSize="xsmall2" dotBorder>
              Missão
            </Heading>
            <Paragraph paragraphColor="#777777" lineHeight="24px" size="20px">
              Formar, através dos princípios cristãos, cidadãos capacitados
              academicamente, responsáveis, conscientes e críticos.
            </Paragraph>
            <br />
            <Heading titleColor="#BAC529" titleSize="xsmall2" dotBorder>
              Visão
            </Heading>
            <Paragraph paragraphColor="#777777" lineHeight="24px" size="20px">
              Ser um colégio de excelência acadêmica, fundamentado em princípios
              cristãos e alta qualidade pedagógica.
            </Paragraph>
            <br />
            <Heading titleColor="#BAC529" titleSize="xsmall2" dotBorder>
              Valores
            </Heading>
            <Paragraph paragraphColor="#777777" lineHeight="24px" size="20px">
              Caráter, integridade, responsabilidade, respeito e amor ao
              próximo.
            </Paragraph>
          </Content>
        </CarouselContent>
      </AliceCarousel>
    </Container>
  </AboutContainer>
)

export default About
