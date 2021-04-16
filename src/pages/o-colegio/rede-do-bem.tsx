import React from 'react'
import { GetServerSideProps } from 'next'

import { Fade } from 'react-awesome-reveal'
import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'
import { useRouter } from 'next/dist/client/router'
import { Document } from 'prismic-javascript/types/documents'
import Loading from '@/components/Loading'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import SearchForm from '@/components/SearchForm'
import Collapse from '@/components/Collapse'

import NetworkImage from '../../../public/assets/rede-do-bem.svg'
import NetworkMobileImage from '../../../public/assets/rede-do-bem-mb.svg'
import WhatsappIcon from '../../../public/assets/whatsapp.png'
import PhoneIcon from '../../../public/assets/phone.png'
import EmailIcon from '../../../public/assets/email.png'
import WebIcon from '../../../public/assets/web.png'
import FacebookIcon from '../../../public/assets/facebook.png'
import InstagramIcon from '../../../public/assets/instagram.png'

import {
  HeroNetwork,
  HeroContainer,
  ContentHero,
  ServicesContainer,
  Services
} from '@/styles/pages/college/network/styles'

import SEO from '@/components/SEO'

interface NetworkProps {
  services: Document[]
}

const Network: React.FC<NetworkProps> = ({ services }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  return (
    <>
      <SEO
        color="#305FA4"
        title="Rede do Bem"
        description="Divulgue seu trabalho aqui e tenha acesso aos serviços de outros pais e familiares de alunos. Com isso, você encontra o que procura de forma mais rápida e desfruta de alguns benefícios e descontos."
      />
      <HeroNetwork>
        <Container alignIntems spaceBetween columnMb>
          <HeroContainer>
            <Fade
              cascade
              delay={200}
              duration={500}
              direction="left"
              className="content_hero_differentials"
            >
              <ContentHero>
                <Heading titleColor="#305FA4" titleSize="large">
                  Rede do Bem
                </Heading>
                <Paragraph
                  paragraphColor="#606060"
                  size="calc(25px + (34 - 25) * ((100vw - 320px) / (1920 - 320)))"
                >
                  Nos mantemos unidos
                  <br />
                  mesmo à distância!
                </Paragraph>
              </ContentHero>
            </Fade>
          </HeroContainer>
        </Container>
        <Fade
          cascade
          delay={210}
          direction="right"
          duration={500}
          className="image_hero_network desktop"
        >
          <NetworkImage />
        </Fade>

        <Fade
          cascade
          delay={210}
          direction="right"
          duration={500}
          className="image_hero_network mb"
        >
          <NetworkMobileImage />
        </Fade>
      </HeroNetwork>
      <ServicesContainer>
        <Container column alignIntems>
          <Heading
            titleSize="medium"
            titleColor="#001D7E"
            titleBorder
            titleBorderColor="blue"
          >
            Serviços
          </Heading>

          <SearchForm className="search-services" />

          <Services id="services">
            <Fade cascade direction="up" triggerOnce duration={500}>
              {services.map(service =>
                service.data.body.map((item, index) => (
                  <div key={index} className="">
                    <Collapse
                      cardColor="#FFFFFF"
                      title={item.primary.title.map(i => (
                        <Paragraph
                          key={index}
                          paragraphColor="#696969"
                          size="calc(14px + (24 - 14) * ((100vw - 768px) / (1920 - 768)))"
                          className="title-service"
                        >
                          {i.text}
                        </Paragraph>
                      ))}
                      className="card-services"
                    >
                      <div className="service-lists">
                        {item.items.map((i, index) => (
                          <div key={index} className="service">
                            {i.title.map(title => (
                              <h1 key={index} className="subtitle">
                                {title.text}
                              </h1>
                            ))}

                            {i.benefits.map(
                              benefit =>
                                benefit.text !== '' &&
                                i.benefits.map((benefit, index) => (
                                  <p key={index} className="service-benefits">
                                    {benefit.text}
                                  </p>
                                ))
                            )}

                            <div className="service-services">
                              <h3>Serviços:</h3>

                              <div className="service-description">
                                {i.to_do.map((benefit, index) => (
                                  <p key={index} className="service-services">
                                    {benefit.text}
                                  </p>
                                ))}
                              </div>
                            </div>

                            <div className="service-socials">
                              <h3>Contato:</h3>

                              <ul>
                                {i.name.map((n, index) => (
                                  <li key={index}>{n.text}</li>
                                ))}

                                {i.whatsapp.map(
                                  whats =>
                                    whats.text !== '' &&
                                    i.whatsapp.map((whats, index) => (
                                      <li key={index}>
                                        <img
                                          src={WhatsappIcon}
                                          alt="WhatsApp"
                                          width="23"
                                          height="23"
                                        />
                                        {whats.text}
                                      </li>
                                    ))
                                )}

                                {i.phone.map(
                                  ph =>
                                    ph.text !== '' &&
                                    i.phone.map((ph, index) => (
                                      <li key={index}>
                                        <img
                                          src={PhoneIcon}
                                          alt="WhatsApp"
                                          width="23"
                                          height="23"
                                        />
                                        {ph.text}
                                      </li>
                                    ))
                                )}
                                {i.email.map(
                                  em =>
                                    em.text !== '' &&
                                    i.email.map((em, index) => (
                                      <li key={index}>
                                        <img
                                          src={EmailIcon}
                                          alt="WhatsApp"
                                          width="23"
                                          height="23"
                                        />
                                        {em.text}
                                      </li>
                                    ))
                                )}
                                {i.site.map(
                                  st =>
                                    st.text !== '' &&
                                    i.site.map((st, index) => (
                                      <li key={index}>
                                        <img
                                          src={WebIcon}
                                          alt="WhatsApp"
                                          width="23"
                                          height="23"
                                        />
                                        {st.text}
                                      </li>
                                    ))
                                )}

                                {i.facebook.map(
                                  fb =>
                                    fb.text !== '' &&
                                    i.facebook.map((fb, index) => (
                                      <li key={index}>
                                        <img
                                          src={FacebookIcon}
                                          alt="WhatsApp"
                                          width="23"
                                          height="23"
                                        />
                                        {fb.text}
                                      </li>
                                    ))
                                )}

                                {i.instagram.map(
                                  insta =>
                                    insta.text !== '' &&
                                    i.instagram.map((insta, index) => (
                                      <li key={index}>
                                        <img
                                          src={InstagramIcon}
                                          alt="WhatsApp"
                                          width="23"
                                          height="23"
                                        />
                                        {insta.text}
                                      </li>
                                    ))
                                )}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Collapse>
                  </div>
                ))
              )}
            </Fade>
          </Services>
        </Container>
      </ServicesContainer>
    </>
  )
}
export default Network

export const getServerSideProps: GetServerSideProps<NetworkProps> = async context => {
  const { q } = context.query

  if (!q) {
    const services = await client().query(
      Prismic.Predicates.at('document.type', 'services'),
      { orderings: '[my.services.title]' }
    )

    return {
      props: {
        services: services.results
      }
    }
  }
  const services = await client().query(
    Prismic.Predicates.fulltext('document', String(q)),
    { orderings: '[my.services.title]' }
  )

  return {
    props: {
      services: services.results
    }
  }
}
