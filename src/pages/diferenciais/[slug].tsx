import React, { useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Fade } from 'react-awesome-reveal'
import { GoTriangleDown, GoCheck } from 'react-icons/go'
import { client } from '@/lib/prismic'
import { useRouter } from 'next/dist/client/router'
import { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom'
import Loading from '@/components/Loading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Collapse from '@/components/Collapse'

import Badge from '../../../public/assets/badge-differential.svg'
import BgMindTop from '../../../public/assets/background-mind-top-2.svg'
import BgMindBottom from '../../../public/assets/background-mind-bottom-3.svg'
import BackgroundDescriptionTop from '../../../public/assets/background-description-top-2.svg'
import BackgroundDescriptionBottom from '../../../public/assets/background-description-bottom.svg'

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
// const SettingsVideosThumbails = {
//   dots: false,
//   arrows: false,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   swipeToSlide: true,
//   focusOnSelect: true,
//   autoplay: false,

//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3
//       }
//     },
//     {
//       breakpoint: 400,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// }

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
            'Educa????o Socioemocional') ||
          (router.query.slug === 'educacao-tecnologica' &&
            'Educa????o Tecnol??gica') ||
          (router.query.slug === 'educacao-financeira' &&
            'Educa????o Financeira') ||
          (router.query.slug === 'programa-bilingue' && 'Programa Bil??ngue')
        }
        description={
          (router.query.slug === 'educacao-socioemocional' &&
            'Fundamentada na Teoria da Intelig??ncia Multifocal, elaborada pelo Dr. Augusto Cury, a metodologia promove, por meio da educa????o das emo????es e da intelig??ncia, a melhoria dos ??ndices de aprendizagem, redu????o da indisciplina, aprimoramento das rela????es interpessoais e o aumento da participa????o da fam??lia na forma????o integral dos alunos.') ||
          (router.query.slug === 'educacao-tecnologica' &&
            'Os alunos, de forma integrada, constroem solu????es e mergulham no mundo da rob??tica e da educa????o tecnol??gica atrav??s do Pensamento Computacional - material did??tico da Mind Makers. Essa disciplina une o ensino de linguagens de programa????o (CODE) a pr??ticas m??o na massa (MAKER), que envolvem eletr??nica digital, rob??tica, Internet das Coisas e Intelig??ncia Artificial.') ||
          (router.query.slug === 'educacao-financeira' &&
            'O programa G??nio das Finan??as tem como um dos fundamentos a Teoria da Intelig??ncia Multifocal ??? TIM ??? de autoria do m??dico psiquiatra e escritor Dr. Augusto Cury, que, com foco na constru????o dos pensamentos e na forma????o de pensadores, estuda e analisa a mente humana e osdesdobramentos que adv??m da gest??o dos pensamentos.') ||
          (router.query.slug === 'programa-bilingue' &&
            'Imagine uma solu????o educacional completa para formar alunos bil??ngues e deixar seu filho apto a compreender, falar, ler e escrever em ingl??s: esse ?? o PES - POSITIVO ENGLISH SOLUTION.')
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
                          <Badge />
                          <p>Certifica????o Cambridge</p>
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
                    Formando cidad??os bil??ngues
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
                    Programa Escola da Intelig??ncia
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
                <BackgroundDescriptionTop />
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
                <BackgroundDescriptionBottom />
              </Description>
            </Intelligence>
          )) ||
          (slice.slice_type === 'mind_makers' && (
            <MindMakersContainer key={index}>
              <BgMindTop />
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
              <BgMindBottom />
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

                {/* <Slider
                asNavFor={nav1}
                ref={slider2}
                {...SettingsVideosThumbails}
                >
                  {slice.items.map((item, index) => (
                    <img
                      key={index}
                      src={item.url.thumbnail_url}
                      alt={item.url.title}
                      width={item.url.thumbnail_width}
                      height={item.url.thumbnail_height}
                      onClick={() => setActive(index)}
                    />
                  ))}
                </Slider> */}
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
