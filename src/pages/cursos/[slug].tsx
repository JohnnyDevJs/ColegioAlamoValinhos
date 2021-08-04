import React, { useState, useRef, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/dist/client/router'

import { Document } from 'prismic-javascript/types/documents'
import { client } from '@/lib/prismic'
import PrismicDOM from 'prismic-dom'
import AliceCarousel from 'react-alice-carousel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import Loading from '@/components/Loading'

import {
  Hero,
  ContentHero,
  HeroContainer,
  Methods,
  Items,
  Item,
  Icon,
  Text,
  Videos,
  BackgroundVideo,
  Registration,
  Box,
  Border,
  Items2,
  Item2,
  BackgroundGallery,
  Gallery
} from '@/styles/pages/courses/styles'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import Button from '@/components/Buttons/Link'

import LineHero from '../../../public/assets/line-hero-courses.svg'

import SEO from '@/components/SEO'

interface CourseProps {
  course: Document
}
const optionsVideos = {
  autoPlayInterval: 900,
  animationEasingFunction: 'ease',
  animationDuration: 1200,
  autoPlay: false
}

const SettingsGalleryThumbails = {
  dots: true,
  slidesToShow: 10,
  slidesToScroll: 10,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }
  ]
}

const SettingsFeaturedImage = {
  autoplay: false,
  fade: true,
  centerMode: true,
  arrows: true,
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

function Course({ course }: CourseProps) {
  const router = useRouter()

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [slider1, slider2])

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <SEO
        color="#3D843C"
        title={
          (router.query.slug === 'educacao-infantil' && 'Educação Infantil') ||
          (router.query.slug === 'ensino-fundamental-1' &&
            'Ensino Fundamental 1') ||
          (router.query.slug === 'ensino-fundamental-2' &&
            'Ensino Fundamental 2') ||
          (router.query.slug === 'cursos-extracurriculares' &&
            'Cursos Extracurriculares')
        }
        description={
          (router.query.slug === 'educacao-infantil' &&
            'A educação infantil é fundamental para a formação sócio-cultural da criança, as quais precisam de bons modelos para desenvolver suas habilidades sociais.') ||
          (router.query.slug === 'ensino-fundamental-1' &&
            'É no Fundamental I que a criança consolida sua alfabetização e desenvolve suas inteligências de forma rápida e dinâmica!') ||
          (router.query.slug === 'ensino-fundamental-2' &&
            'O Ensino Fundamental II é o momento em que o aluno experimenta diversas formas de aprender com diferentes tecnologias, métodos e projetos para se conhecer cada vez mais!') ||
          (router.query.slug === 'cursos-extracurriculares' &&
            'Essenciais para o desenvolvimento de habilidades cognitivas, motoras e afetivas.')
        }
      />
      {course.data.body.map(
        (slice, index) =>
          (slice.slice_type === 'hero' && (
            <Hero
              key={index}
              className={
                router.query.slug === 'cursos-extracurriculares' && 'hero-ec'
              }
            >
              <Container alignIntems spaceBetween columnMb>
                <HeroContainer>
                  <Fade
                    cascade
                    delay={200}
                    duration={500}
                    direction="left"
                    className="content_hero_courses"
                  >
                    <ContentHero>
                      <Heading titleColor="#305FA4" titleSize="medium">
                        {slice.primary.title.map(item => item.text)}
                      </Heading>
                      <Paragraph
                        paragraphColor="#606060"
                        size="calc(25px + (34 - 25) * ((100vw - 320px) / (1920 - 320)))"
                        lineHeight="calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))"
                      >
                        {slice.primary.description.map(item => item.text)}
                      </Paragraph>

                      {router.query.slug !== 'cursos-extracurriculares' && (
                        <Button
                          color="#BAC529"
                          size="large"
                          href={`/matriculas/${router.query.slug}`}
                          hover="#3D843C"
                        >
                          Matricule-se
                        </Button>
                      )}
                    </ContentHero>
                  </Fade>
                  <Fade
                    cascade
                    delay={210}
                    duration={500}
                    direction="right"
                    className="image_hero_courses"
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
              <LineHero />
            </Hero>
          )) ||
          (slice.slice_type === 'metodo_de_ensino' && (
            <Methods key={index}>
              <Container column>
                <Fade direction="up" duration={500} triggerOnce>
                  {router.query.slug !== 'cursos-extracurriculares' ? (
                    <Heading
                      titleSize="medium"
                      titleColor="#001D7E"
                      titleBorder
                      titleBorderColor="blue"
                    >
                      Método de Ensino
                    </Heading>
                  ) : (
                    <p></p>
                  )}

                  <div
                    className="methods_text_one"
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: PrismicDOM.RichText.asHtml(slice.primary.subtitle)
                    }}
                  />
                  {router.query.slug === 'cursos-extracurriculares' ? (
                    <Border />
                  ) : (
                    <></>
                  )}
                </Fade>
                {router.query.slug !== 'cursos-extracurriculares' ? (
                  <Items>
                    <Fade
                      cascade
                      duration={500}
                      direction="up"
                      triggerOnce
                      className="methods_effects"
                    >
                      {slice.items.map((item, index) => (
                        <Item key={index}>
                          <Icon>
                            <img
                              src={item.icon.url}
                              alt={item.description.text}
                              width={item.icon.dimensions.width}
                              height={item.icon.dimensions.height}
                            />
                          </Icon>
                          <Text>
                            {item.description.map((item, index) => (
                              <Paragraph
                                key={index}
                                paragraphColor="#696969"
                                lineHeight="calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)))"
                                size="calc(21px + (26 - 22) * ((100vw - 320px) / (1920 - 320)))"
                              >
                                {item.text}
                              </Paragraph>
                            ))}
                          </Text>
                        </Item>
                      ))}
                    </Fade>
                  </Items>
                ) : (
                  <Items2>
                    <Fade
                      cascade
                      duration={500}
                      direction="up"
                      triggerOnce
                      className="methods_effects"
                    >
                      {slice.items.map((item, index) => (
                        <Item2 key={index}>
                          <img
                            src={item.icon.url}
                            alt={item.description.text}
                            width={item.icon.dimensions.width}
                            height={item.icon.dimensions.height}
                          />

                          {item.description.map((item, index) => (
                            <Paragraph
                              key={index}
                              paragraphColor="#001D7E"
                              size="calc(19px + (32 - 19) * ((100vw - 320px) / (1920 - 320)))"
                              className="methods_text_2"
                            >
                              {item.text}
                            </Paragraph>
                          ))}
                        </Item2>
                      ))}
                    </Fade>
                  </Items2>
                )}
              </Container>
            </Methods>
          )) ||
          (slice.slice_type === 'videos' && (
            <Videos key={index}>
              <Container>
                <BackgroundVideo>
                  <Heading
                    titleColor="#FFFFFF"
                    titleBorder
                    titleBorderColor="green"
                    titleSize="medium"
                  >
                    {router.query.slug === 'educacao-infantil' &&
                      'Conheça a Educação Infantil'}
                    {router.query.slug === 'ensino-fundamental-1' &&
                      'Conheça o Ensino Fundamental I'}
                    {router.query.slug === 'ensino-fundamental-2' &&
                      'Conheça o Ensino Fundamental II'}
                  </Heading>
                  <AliceCarousel
                    key={index}
                    animationType={'fadeout'}
                    {...optionsVideos}
                  >
                    {slice.items.map((item, index) => (
                      <div
                        className="embed-responsive"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item.url.html }}
                      ></div>
                    ))}
                  </AliceCarousel>
                </BackgroundVideo>
              </Container>
            </Videos>
          )) ||
          (slice.slice_type === 'galeria' && (
            <Gallery key={index}>
              <Container>
                <BackgroundGallery>
                  <Heading
                    titleColor="#FFFFFF"
                    titleBorder
                    titleBorderColor="green"
                    titleSize="medium"
                  >
                    {router.query.slug === 'cursos-extracurriculares' &&
                      'Veja um pouco dos cursos'}
                  </Heading>

                  <Slider
                    asNavFor={nav2}
                    ref={slider1}
                    className="gallery_featured"
                    {...SettingsFeaturedImage}
                  >
                    {slice.items.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.image.url}
                          alt="Conheça o nosso espaço"
                          width={item.image.dimensions.width}
                          height={item.image.dimensions.height}
                        />
                      </div>
                    ))}
                  </Slider>

                  <Slider
                    {...SettingsGalleryThumbails}
                    asNavFor={nav1}
                    ref={slider2}
                    className="gallery_thumbnails"
                  >
                    {slice.items.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.image.url}
                          alt="Conheça o nosso espaço"
                          width={item.image.dimensions.width}
                          height={item.image.dimensions.height}
                        />
                      </div>
                    ))}
                  </Slider>
                </BackgroundGallery>
              </Container>
            </Gallery>
          ))
      )}

      <Registration>
        <Container
          column
          alignIntems
          className={
            router.query.slug === 'cursos-extracurriculares' ? 'd-none' : ''
          }
        >
          <Fade direction="up" cascade triggerOnce duration={500}>
            <Box>
              <Paragraph
                paragraphColor="#305FA4"
                size="calc(21px + (28 - 22) * ((100vw - 320px) / (1920 - 320)))"
              >
                Quer uma escolha que desenvolva
                <br />o que seu filho tem de melhor?
              </Paragraph>
              <Button
                color="#BAC529"
                hover="#3D843C"
                size="large"
                href={`/matriculas/${router.query.slug}`}
              >
                Informações de Matrícula
              </Button>
            </Box>
          </Fade>
        </Container>
      </Registration>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<CourseProps> = async context => {
  const { slug } = context.params

  const course = await client().getByUID('course', String(slug), {})

  return {
    props: {
      course
    },
    revalidate: 5
  }
}

export default Course
