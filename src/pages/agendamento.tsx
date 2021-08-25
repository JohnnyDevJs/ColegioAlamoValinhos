import React, { useCallback, useRef } from 'react'
import { Fade } from 'react-awesome-reveal'

import { SchedulingContainer, Content } from '@/styles/pages/scheduling/styles'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import SEO from '@/components/SEO'

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        color="#001D7E"
        title="Agendamento"
        description="Agende uma visita"
      />
      <SchedulingContainer>
        <Container column>
          <Fade direction="up" duration={500} cascade triggerOnce>
            <Heading titleColor="#001D7E" titleSize="medium">
              Agende uma visita
            </Heading>
            <Paragraph
              paragraphColor="#606060"
              className="paragraph-contact"
              size="calc(28px + (34 - 28) * ((100vw - 320px) / (1920 - 320)))"
            >
              Conheça o jeito Álamo de educar!
            </Paragraph>
            <Content>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/colegioalamovalinhos"
              ></div>
            </Content>
          </Fade>
        </Container>
      </SchedulingContainer>
    </>
  )
}
export default Contact
