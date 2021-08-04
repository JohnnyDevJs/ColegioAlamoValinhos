import React, { useCallback, useRef } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillYoutube } from 'react-icons/ai'
import { Fade } from 'react-awesome-reveal'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '@/utils/getValidationErrors'

import {
  ContactContainer,
  Content,
  Items,
  Item,
  Network
} from '@/styles/pages/contact/styles'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'

import Concertina from '../../public/assets/concertina.svg'

import SEO from '@/components/SEO'

const Contact: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        fullname: Yup.string().required('Nome Obrigatório'),
        phone: Yup.string().required('Telefone Obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        message: Yup.string().required('Mensagem obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])

  const networks = [
    {
      id: 1,
      slug: 'facebook',
      url: 'https://www.facebook.com/ColegioAlamoValinhos/'
    },
    {
      id: 2,
      slug: 'instagram',
      url: 'https://www.instagram.com/colegioalamovalinhos/'
    },
    {
      id: 3,
      slug: 'youtube',
      url: 'https://www.youtube.com/channel/UCq8eesuhHgFZ7S4XqOs6r_Q'
    }
  ]
  return (
    <>
      <SEO
        color="#001D7E"
        title="Contato"
        description="Entre em contato conosco!"
      />
      <ContactContainer>
        <Container column>
          <Fade direction="up" duration={500} cascade triggerOnce>
            <Heading titleColor="#001D7E" titleSize="medium">
              Contato
            </Heading>
            <Paragraph
              paragraphColor="#606060"
              className="paragraph-contact"
              size="calc(28px + (34 - 28) * ((100vw - 320px) / (1920 - 320)))"
            >
              Entre em contato conosco!
            </Paragraph>
            <Content>
              <div>
                <Items>
                  <Item>
                    <Heading titleColor="#BAC529" titleSize="xsmall" uppercase>
                      Unidade Valinhos
                    </Heading>
                    <Paragraph paragraphColor="#696969" size="24px">
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
                    <Paragraph paragraphColor="#696969">
                      <a rel="noreferrer" target="_blank" href="tel:1931994500">
                        (19) 3199-4500
                      </a>
                    </Paragraph>
                  </Item>
                </Items>
                <Items>
                  <Item>
                    <Heading titleColor="#BAC529" titleSize="xsmall">
                      WhatsApp:
                    </Heading>
                    <Paragraph paragraphColor="#696969">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=5519989028282"
                      >
                        (19) 9 8902-8282
                      </a>
                    </Paragraph>
                  </Item>
                </Items>
                <Network>
                  {networks.map(network => (
                    <li key={network.id}>
                      <a href={network.url}>
                        {(network.id === 1 && (
                          <FaFacebookF size={20} color="#FFFFFF" />
                        )) ||
                          (network.id === 2 && (
                            <GrInstagram size={18} color="#FFFFFF" />
                          )) ||
                          (network.id === 3 && (
                            <AiFillYoutube size={20} color="#FFFFFF" />
                          ))}
                      </a>
                    </li>
                  ))}
                </Network>
              </div>

              <form
                id="llCaptureForm"
                className="llform001"
                action="//paginas.rocks/capture"
                method="post"
              >
                <input type="hidden" id="mid" name="mid" value="531495" />
                <input type="hidden" id="fid" name="fid" value="34861" />
                <div>
                  <input
                    type="text"
                    id="llfield62069"
                    name="llfield62069"
                    placeholder="Nome Completo"
                    data-required="true"
                  />
                  <div className="field-error" id="llerror62069"></div>
                </div>
                <div>
                  <input
                    type="email"
                    id="llfield32414"
                    name="llfield32414"
                    placeholder="Seu Melhor E-mail"
                    data-required="true"
                  />
                  <div className="field-error" id="llerror32414"></div>
                </div>
                <div>
                  <input
                    type="text"
                    id="llfield32590"
                    name="llfield32590"
                    placeholder="WhatsApp com DDD"
                    data-required="true"
                  />
                  <div className="field-error" id="llerror32590"></div>
                </div>
                <div>
                  <textarea
                    id="llfield62070"
                    name="llfield62070"
                    placeholder="Mensagem"
                    data-required="true"
                  ></textarea>
                  <div className="field-error" id="llerror62070"></div>
                </div>
                <div className="button-bar">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </Content>
          </Fade>
        </Container>
        <Concertina />
      </ContactContainer>
    </>
  )
}
export default Contact
