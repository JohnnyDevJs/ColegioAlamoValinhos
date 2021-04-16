import React from 'react'

import { Fade } from 'react-awesome-reveal'

import { NetworkContainer, Content, TitleContent } from './styles'
import BackgroundNetwork from '../../../../public/assets/background-home-network.png'
import Symbol from '../../../../public/assets/symbol.svg'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import Button from '@/components/Buttons/Link'

const Network: React.FC = () => (
  <NetworkContainer>
    <Container alignIntems spaceBetween columnMb>
      <Fade
        cascade
        direction="up"
        duration={500}
        triggerOnce
        className="network_content"
      >
        <img
          src={BackgroundNetwork}
          alt="Divulgue seu trabalho aqui e tenha acesso aos serviços de outros pais e familiares de alunos. Com isso, você encontra o que procura de forma mais rápida e desfruta de alguns benefícios e descontos."
          width={599}
          height={706}
        />
        <Content>
          <TitleContent>
            <div>
              <Heading titleColor="#305FA4" titleSize="medium">
                Você sabe o que é
              </Heading>
              <Heading titleColor="#305FA4" titleSize="large">
                Rede do Bem
              </Heading>
            </div>
            <Symbol />
          </TitleContent>
          <Paragraph paragraphColor="#777777" size="24px">
            Divulgue seu trabalho aqui e tenha acesso aos serviços de outros
            pais e familiares de alunos. Com isso, você encontra o que procura
            de forma mais rápida e desfruta de alguns benefícios e descontos.
          </Paragraph>
          <Button
            color="#BAC529"
            href="/o-colegio/rede-do-bem"
            size="large"
            hover="#3D843C"
          >
            Saiba mais
          </Button>
        </Content>
      </Fade>
    </Container>
  </NetworkContainer>
)

export default Network
