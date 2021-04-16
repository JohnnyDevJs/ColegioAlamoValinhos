import React, { useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Fade } from 'react-awesome-reveal'
import { GoTriangleDown, GoCheck } from 'react-icons/go'
import { client } from '@/lib/prismic'
import { useRouter } from 'next/dist/client/router'
import { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom'
import Loading from '@/components/Loading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Collapse from '@/components/Collapse'

import {
  Hero,
  HeroContainer,
  ContentHero,
  BilingueContainer,
  BilingualBoxes,
  BilingualBoxe,
  Methodology,
  ItemsMethodology,
  InvestmentsContainer,
  Intelligence,
  Videos,
  Description,
  BackgroundColor,
  Benefits,
  ResultsContainer,
  Results,
  Result,
  MindMakersContainer,
  BgMindColor,
  GalleryContainer,
  IconsContainer,
  Items,
  Item,
  Items2,
  Item2,
  Icon,
  Icon2,
  Text,
  UniversityContainer
} from '@/styles/pages/differentials/styles'

import SEO from '@/components/SEO'

interface DifferentialsProps {
  differential: Document
}
const SettingsVideosThumbails = {
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

const SettingsFeaturedVideos = {
  autoplay: false,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        centerMode: false,
        arrows: false
      }
    }
  ]
}

const Differential: React.FC<DifferentialsProps> = ({ differential }) => {
  const router = useRouter()
  const [active, setActive] = useState(0)

  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <SEO
        color="#BAC529"
        title={
          (router.query.slug === 'educacao-socioemocional' &&
            'Educação Sócioemocional') ||
          (router.query.slug === 'educacao-tecnologica' &&
            'Educação Tecnológica') ||
          (router.query.slug === 'educacao-financeira' &&
            'Educação Financeira') ||
          (router.query.slug === 'programa-bilingue' && 'Programa Bilíngue')
        }
        description={
          (router.query.slug === 'educacao-socioemocional' &&
            'Fundamentada na Teoria da Inteligência Multifocal, elaborada pelo Dr. Augusto Cury, a metodologia promove, por meio da educação das emoções e da inteligência, a melhoria dos índices de aprendizagem, redução da indisciplina, aprimoramento das relações interpessoais e o aumento da participação da família na formação integral dos alunos.') ||
          (router.query.slug === 'educacao-tecnologica' &&
            'Os alunos, de forma integrada, constroem soluções e mergulham no mundo da robótica e da educação tecnológica através do Pensamento Computacional - material didático da Mind Makers. Essa disciplina une o ensino de linguagens de programação (CODE) a práticas mão na massa (MAKER), que envolvem eletrônica digital, robótica, Internet das Coisas e Inteligência Artificial.') ||
          (router.query.slug === 'educacao-financeira' &&
            'O programa Gênio das Finanças tem como um dos fundamentos a Teoria da Inteligência Multifocal – TIM – de autoria do médico psiquiatra e escritor Dr. Augusto Cury, que, com foco na construção dos pensamentos e na formação de pensadores, estuda e analisa a mente humana e osdesdobramentos que advêm da gestão dos pensamentos.') ||
          (router.query.slug === 'programa-bilingue' &&
            'Imagine uma solução educacional completa para formar alunos bilíngues e deixar seu filho apto a compreender, falar, ler e escrever em inglês: esse é o PES - POSITIVO ENGLISH SOLUTION.')
        }
      />
      {differential.data.body.map(
        (slice, index) =>
          (slice.slice_type === 'hero' && (
            <Hero key={index}>
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
                      <Heading titleColor="#305FA4" titleSize="medium">
                        {slice.primary.title.map(item => item.text)}
                      </Heading>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: PrismicDOM.RichText.asHtml(
                            slice.primary.description
                          )
                        }}
                      />
                      {router.query.slug === 'programa-bilingue' && (
                        <div className="cambridge" key={index}>
                          <p>Certificação Cambridge</p>
                        </div>
                      )}
                    </ContentHero>
                  </Fade>
                  <Fade
                    cascade
                    delay={210}
                    direction="right"
                    duration={500}
                    className="image_hero_differentials"
                  >
                    <img
                      src={slice.primary.image.url}
                      alt={slice.primary.description.map(item => item.text)}
                      width={slice.primary.image.dimensions.width}
                      height={slice.primary.image.dimensions.height}
                    />
                  </Fade>
                </HeroContainer>
              </Container>
            </Hero>
          )) ||
          (slice.slice_type === 'bilingues' && (
            <BilingueContainer key={index}>
              <Container column>
                <Fade cascade direction="up" duration={500} triggerOnce>
                  <Heading
                    titleSize="medium"
                    titleColor="#001D7E"
                    titleBorder
                    titleBorderColor="blue"
                  >
                    Formando cidadãos bilíngues
                  </Heading>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: PrismicDOM.RichText.asHtml(
                        slice.primary.description
                      )
                    }}
                  />
                </Fade>
                <BilingualBoxes key={index}>
                  <Fade cascade direction="up" duration={500} triggerOnce>
                    {slice.items.map((item, index) => (
                      <BilingualBoxe key={index}>
                        <span>{item.title.map(i => i.text)}</span>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: PrismicDOM.RichText.asHtml(item.subtitle)
                          }}
                        />

                        <ul>
                          {item.list.map((item, index) => (
                            <li key={index}>{item.text}</li>
                          ))}
                        </ul>
                      </BilingualBoxe>
                    ))}
                  </Fade>
                </BilingualBoxes>
              </Container>
            </BilingueContainer>
          )) ||
          (slice.slice_type === 'listas' && (
            <InvestmentsContainer key={index}>
              <Container column alignIntems>
                <Fade cascade direction="up" duration={500} triggerOnce>
                  <Heading
                    titleSize="medium"
                    titleColor="#001D7E"
                    titleBorder
                    titleBorderColor="blue"
                    dangerouslySetInnerHTML={{
                      __html: PrismicDOM.RichText.asHtml(slice.primary.title)
                    }}
                  ></Heading>

                  <ul>
                    {slice.primary.list.map((item, index) => (
                      <li key={index}>
                        <GoCheck size={30} color="#BAC529" />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.text
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </Fade>
              </Container>
            </InvestmentsContainer>
          )) ||
          (slice.slice_type === 'icones' && (
            <IconsContainer key={index}>
              <Container column alignIntems>
                {router.query.slug !== 'educacao-financeira' ? (
                  <Items>
                    <Fade
                      cascade
                      direction="up"
                      triggerOnce
                      duration={500}
                      className="methods_effects"
                    >
                      {slice.items.map((item, index) => (
                        <Item key={index}>
                          <Icon>
                            <img
                              src={item.image.url}
                              alt={item.image.alt}
                              width={item.image.dimensions.width}
                              height={item.image.dimensions.height}
                            />
                          </Icon>
                          <Text>
                            {item.description.map((item, index) => (
                              <p
                                key={index}
                                dangerouslySetInnerHTML={{ __html: item.text }}
                              />
                            ))}
                          </Text>
                        </Item>
                      ))}
                    </Fade>
                  </Items>
                ) : (
                  <>
                    <Fade
                      cascade
                      direction="up"
                      triggerOnce
                      duration={500}
                      className="methods_effects"
                    >
                      <Heading
                        titleSize="medium"
                        titleColor="#001D7E"
                        titleBorder
                        titleBorderColor="blue"
                      >
                        Objetivos
                      </Heading>
                    </Fade>
                    <Items2>
                      <Fade
                        cascade
                        direction="up"
                        triggerOnce
                        duration={500}
                        className="methods_effects"
                      >
                        {slice.items.map((item, index) => (
                          <Item2 key={index}>
                            <Icon2>
                              <img
                                src={item.image.url}
                                alt={item.image.alt}
                                width={item.image.dimensions.width}
                                height={item.image.dimensions.height}
                              />
                            </Icon2>
                            <Text>
                              {item.description.map((item, index) => (
                                <p
                                  key={index}
                                  dangerouslySetInnerHTML={{
                                    __html: item.text
                                  }}
                                />
                              ))}
                            </Text>
                          </Item2>
                        ))}
                      </Fade>
                    </Items2>
                  </>
                )}
              </Container>
            </IconsContainer>
          )) ||
          (slice.slice_type === 'metodogia' && (
            <Methodology key={index}>
              <Container column>
                <Fade cascade direction="up" duration={500} triggerOnce>
                  <Heading
                    titleSize="medium"
                    titleColor="#001D7E"
                    titleBorder
                    titleBorderColor="blue"
                  >
                    Metodologia
                  </Heading>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: PrismicDOM.RichText.asHtml(slice.primary.content)
                    }}
                  />
                </Fade>

                <ItemsMethodology>
                  <Fade cascade direction="up" duration={500} triggerOnce>
                    {slice.items.map((item, index) => (
                      <div className="box" key={index}>
                        {item.title.map(i => (
                          <h2 key={index}>{i.text}</h2>
                        ))}
                        <ul>
                          {item.lists.map((item, index) => (
                            <li key={index}>
                              <GoCheck size={30} color="#BAC529" />
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.text
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Fade>
                </ItemsMethodology>
              </Container>
            </Methodology>
          )) ||
          (slice.slice_type === 'escola_da_inteligencia' && (
            <Intelligence key={index}>
              <Container column spaceBetween>
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  delay={200}
                  triggerOnce
                >
                  <Heading
                    titleSize="medium"
                    titleColor="#001D7E"
                    titleBorder
                    titleBorderColor="blue"
                  >
                    Programa Escola da Inteligência
                  </Heading>
                </Fade>
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  delay={200}
                  triggerOnce
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: slice.primary.subtitle.map(item => item.text)
                    }}
                  />

                  <Videos>
                    {slice.items.map((item, index) => (
                      <div
                        className="embed-responsive"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item.video.html }}
                      ></div>
                    ))}
                  </Videos>
                </Fade>
              </Container>
              <Description>
                <BackgroundColor>
                  <Fade
                    cascade
                    direction="up"
                    duration={500}
                    delay={300}
                    triggerOnce
                  >
                    <Container alignIntems>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: slice.primary.description.map(
                            item => item.text
                          )
                        }}
                      />
                    </Container>
                  </Fade>
                </BackgroundColor>
              </Description>
            </Intelligence>
          )) ||
          (slice.slice_type === 'mind_makers' && (
            <MindMakersContainer key={index}>
              <BgMindColor>
                <Container column>
                  <Fade
                    cascade
                    direction="up"
                    key={index}
                    duration={500}
                    triggerOnce
                  >
                    <div
                      className="description-mind-makers"
                      dangerouslySetInnerHTML={{
                        __html: PrismicDOM.RichText.asHtml(
                          slice.primary.description
                        )
                      }}
                    />
                  </Fade>
                  <ul>
                    {slice.items.map((item, index) => (
                      <Fade
                        cascade
                        direction="up"
                        key={index}
                        duration={500}
                        triggerOnce
                      >
                        <li key={index}>
                          <img
                            src={item.icon.url}
                            width={item.icon.dimensions.width}
                            height={item.icon.dimensions.height}
                            alt={item.icon.alt}
                          />
                          <p>{item.title.map(item => item.text)}</p>
                        </li>
                      </Fade>
                    ))}
                  </ul>
                </Container>
              </BgMindColor>
            </MindMakersContainer>
          )) ||
          (slice.slice_type === 'videos' && (
            <GalleryContainer key={index}>
              <Container column>
                {slice.items.map((item, index) => (
                  <div
                    className={`embed-responsive ${
                      active === index ? 'active' : ''
                    }`}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.url.html }}
                  ></div>
                ))}

                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  {...SettingsVideosThumbails}
                >
                  {slice.items.map((item, index) => (
                    <img
                      key={index}
                      src={item.url.thumbnail_url.replace(
                        'hqdefault',
                        'maxresdefault'
                      )}
                      alt={item.url.title}
                      width={item.url.thumbnail_width}
                      height={item.url.thumbnail_height}
                      onClick={() => setActive(index)}
                    />
                  ))}
                </Slider>
              </Container>
            </GalleryContainer>
          )) ||
          (slice.slice_type === 'beneficios' && (
            <Benefits key={index}>
              <Container column>
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  triggerOnce
                  delay={200}
                >
                  <Heading
                    titleSize="medium"
                    titleColor="#001D7E"
                    titleBorder
                    titleBorderColor="blue"
                  >
                    Vantagens
                  </Heading>
                </Fade>

                <div className="items">
                  <Fade cascade direction="up" triggerOnce duration={500}>
                    {slice.items.map((item, index) => (
                      <Collapse
                        cardColor="#F9F9F9"
                        key={index}
                        className="card-benefits"
                        title={item.title.map((i, index) => (
                          <div key={index}>
                            <img
                              src={item.image.url}
                              alt="Alunos"
                              width={item.image.dimensions.width}
                              height={item.image.dimensions.height}
                            />
                            <Heading
                              key={index}
                              titleSize="small"
                              titleColor="#001D7E"
                            >
                              {i.text}
                            </Heading>
                            <div className="arrow-down">
                              <GoTriangleDown size={55} color="#BAC529" />
                            </div>
                          </div>
                        ))}
                      >
                        <ul key={index}>
                          {item.items.map((i, index) => (
                            <li key={index}>
                              <GoCheck size={20} color="#BAC529" />
                              {i.text}
                            </li>
                          ))}
                        </ul>
                      </Collapse>
                    ))}
                  </Fade>
                </div>
              </Container>
            </Benefits>
          )) ||
          (slice.slice_type === 'resultados' && (
            <ResultsContainer key={index}>
              <Container column>
                <Fade cascade duration={500} direction="up" triggerOnce>
                  <Heading
                    titleSize="medium"
                    titleColor="#001D7E"
                    titleBorder
                    titleBorderColor="blue"
                  >
                    Resultados
                  </Heading>
                </Fade>
                <Results>
                  <Fade
                    cascade
                    direction="up"
                    duration={500}
                    delay={300}
                    triggerOnce
                  >
                    {slice.items.map((item, index) => (
                      <Result key={index}>
                        <div className="circle">
                          <h1
                            dangerouslySetInnerHTML={{
                              __html: item.percent.map(p => p.text)
                            }}
                          />
                          <span>%</span>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.description.map(i => i.text)
                          }}
                        />
                      </Result>
                    ))}
                  </Fade>
                </Results>
              </Container>
            </ResultsContainer>
          )) ||
          (slice.slice_type === 'logotipos' && (
            <UniversityContainer key={index}>
              <Container>
                <div className="logos">
                  <Fade cascade duration={500} direction="up" triggerOnce>
                    {slice.items.map((item, index) => (
                      <img
                        key={index}
                        src={item.logo.url}
                        alt={item.logo.alt}
                        width={item.logo.dimensions.width}
                        height={item.logo.dimensions.height}
                      />
                    ))}
                  </Fade>
                </div>
              </Container>
            </UniversityContainer>
          ))
      )}
    </>
  )
}

export default Differential

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<DifferentialsProps> = async context => {
  const { slug } = context.params

  const differential = await client().getByUID('differential', String(slug), {})

  return {
    props: {
      differential
    },
    revalidate: 5
  }
}
