import React from 'react'
import Link from 'next/link'

import { Fade } from 'react-awesome-reveal'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'

import BackgroundTop from '../../../../public/assets/background-home-differentials-one.svg'
import IconLamp from '../../../../public/assets/icon-lamp.svg'
import IconRobot from '../../../../public/assets/icon-robot.svg'
import IconFinance from '../../../../public/assets/icon-finance.svg'
import IconGlobe from '../../../../public/assets/icon-globe.svg'
import MockupClassApp from '../../../../public/assets/mockup-class-app.png'

import {
  DifferentialsContainer,
  BackgroundColor,
  DifferentialsContent,
  Differential,
  AppContent,
  Content
} from './styles'

const Differentials: React.FC = () => {
  const differentials = [
    {
      id: 1,
      slug: '/diferenciais/educacao-socioemocional',
      title: 'Educação <br/> Socioemocional',
      icon: <IconLamp />
    },
    {
      id: 2,
      slug: '/diferenciais/educacao-tecnologica',
      title: 'Educação <br/> Tecnológica',
      icon: <IconRobot />
    },
    {
      id: 3,
      slug: '/diferenciais/educacao-financeira',
      title: 'Educação <br/> Financeira',
      icon: <IconFinance />
    },
    {
      id: 4,
      slug: '/diferenciais/programa-bilingue',
      title: 'Programa <br/> Bilíngue',
      icon: <IconGlobe />
    }
  ]

  return (
    <DifferentialsContainer>
      <BackgroundTop />
      <BackgroundColor>
        <Container column>
          <Heading
            titleColor="#FFFFFF"
            titleSize="medium"
            titleBorder
            titleBorderColor="green"
          >
            Diferenciais
          </Heading>
          <DifferentialsContent>
            <Fade
              cascade
              direction="up"
              duration={500}
              triggerOnce
              className="boxes"
            >
              {differentials.map(differential => (
                <Link
                  key={differential.id}
                  href={differential.slug}
                  passHref
                  replace
                >
                  <Differential>
                    {differential.icon}
                    <Heading titleColor="#BAC529" titleSize="xsmall">
                      <div
                        dangerouslySetInnerHTML={{ __html: differential.title }}
                      />
                    </Heading>
                    <button>Saiba mais</button>
                  </Differential>
                </Link>
              ))}
            </Fade>
          </DifferentialsContent>
          <AppContent>
            <Fade
              cascade
              direction="up"
              duration={500}
              triggerOnce
              className="boxes"
            >
              <Content>
                <Heading
                  titleColor="#FFFFFF"
                  titleSize="small"
                  titleBorder
                  titleBorderColor="green"
                >
                  A comunicação oficial do Colégio Álamo com os pais é pelo
                  Class App
                </Heading>
                <Paragraph paragraphColor="#DBE5B1" size="26px">
                  Comunicados oficiais, eventos, recados, boletins e orientações
                  sobre a vida escolar do seu filho na palma da sua mão.
                </Paragraph>
              </Content>
              <img
                className="mockup"
                src={MockupClassApp}
                alt="A comunicação oficial do Colégio Álamo com os pais é pelo Class App"
                width={396}
                height={463}
              />
            </Fade>
          </AppContent>
        </Container>
      </BackgroundColor>
    </DifferentialsContainer>
  )
}

export default Differentials
