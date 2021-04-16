import React from 'react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { SiInstagram } from 'react-icons/si'

import Heading from 'typography/Heading'
import Container from 'layout/Container'
import Paragraph from 'typography/Paragraph'

import { FooterContainer, Items, Item, Social } from './styles'

const Footer: React.FC = () => (
  <FooterContainer>
    <Container column alignIntemsStart className="main-footer">
      <Items>
        <Item>
          <Heading titleColor="#BAC529" titleSize="xsmall" uppercase>
            Unidade Valinhos
          </Heading>
          <Paragraph paragraphColor="#FFFFFF" size="24px">
            Alameda Maria Tereza 3.700
            <br />
            Dois Córregos – Valinhos SP
            <br />
            CEP 13278-181
          </Paragraph>
        </Item>
      </Items>
      <Items>
        <Item>
          <Heading titleColor="#BAC529" titleSize="xsmall">
            Telefone:
          </Heading>
          <Paragraph paragraphColor="#FFFFFF">
            <a href="tel:1935147373">(19) 3514-7373</a>
          </Paragraph>
        </Item>
      </Items>
      <Items>
        <Item>
          <Heading titleColor="#BAC529" titleSize="xsmall">
            WhatsApp:
          </Heading>
          <Paragraph paragraphColor="#FFFFFF">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519989028282"
            >
              (19) 9 8202-8282
            </a>
          </Paragraph>
        </Item>
      </Items>

      <Link href="/vinhedo">
        <a className="linkVinhedo">Unidade Vinhedo</a>
      </Link>
    </Container>

    <Social>
      <Fade direction="right" triggerOnce className="social">
        <SiInstagram size={33} color="#FFFFFF" />
        <span>@colegioalamovalinhos</span>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/colegioalamovalinhos/"
        >
          Seguir
        </a>
      </Fade>
    </Social>
  </FooterContainer>
)

export default Footer
