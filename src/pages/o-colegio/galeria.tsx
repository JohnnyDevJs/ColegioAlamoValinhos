import React, { useState } from 'react'
import { GetStaticProps } from 'next'

import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'

import {
  GalleryContainer,
  Tabs,
  TabMenu,
  TabContent,
  FeaturedImages,
  Thumbnails,
  FeaturedVideo
} from '@/styles/pages/college/gallery/styles'

import SEO from '@/components/SEO'

interface GalleryProps {
  photos: Document[]
  videos: Document[]
}

const tabsMenu = [
  {
    id: 0,
    title: 'Fotos'
  },
  {
    id: 1,
    title: 'Vídeos'
  }
]

const galleryFeaturedImage = {
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: true
}

const galleryThumbails = {
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  swipeToSlide: true,
  focusOnSelect: true,
  autoplay: false,

  responsive: [
    {
      breakpoint: 1024,
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

const Gallery: React.FC<GalleryProps> = ({ photos, videos }) => {
  const [active, setActive] = useState(0)
  const [active2, setActive2] = useState(0)
  const [active3, setActive3] = useState(0)
  return (
    <>
      <SEO color="#305FA4" title="Galeria" />
      <GalleryContainer>
        <Container column alignIntems>
          <Heading
            titleSize="medium"
            titleColor="#001D7E"
            titleBorder
            titleBorderColor="blue"
          >
            Galeria
          </Heading>

          <Tabs>
            <TabMenu>
              {tabsMenu.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={active === index ? 'active' : ''}
                >
                  {tab.title}
                </li>
              ))}
            </TabMenu>

            <TabContent className={active === 0 ? 'show' : ''}>
              {photos.map((photo, index) => (
                <FeaturedImages
                  key={index}
                  className={active2 === index ? 'open' : ''}
                >
                  <Slider {...galleryFeaturedImage}>
                    {photo.data.images.map(item => (
                      <img
                        key={index}
                        src={item.image.url}
                        alt={item.image.alt}
                        width={item.image.dimensions.width}
                        height={item.image.dimensions.height}
                      />
                    ))}
                  </Slider>
                </FeaturedImages>
              ))}

              <Thumbnails>
                <Slider {...galleryThumbails}>
                  {photos.map((photo, index) => (
                    <li
                      key={photo.id}
                      onClick={() => setActive2(index)}
                      className={active2 === index ? 'active' : ''}
                    >
                      <img
                        key={index}
                        src={photo.data.cover_image.url}
                        alt={photo.data.cover_image.alt}
                        width={photo.data.cover_image.dimensions.width}
                        height={photo.data.cover_image.dimensions.height}
                      />

                      <div
                        className="overlay"
                        dangerouslySetInnerHTML={{
                          __html: photo.data.title.map(item => item.text)
                        }}
                      />
                    </li>
                  ))}
                </Slider>
              </Thumbnails>
            </TabContent>

            <TabContent className={active === 1 ? 'show' : ''}>
              {videos.map((item, index) => (
                <FeaturedVideo
                  key={index}
                  className={active3 === index ? 'open' : ''}
                >
                  <div
                    className="embed-responsive"
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: item.data.video.html
                    }}
                  ></div>
                </FeaturedVideo>
              ))}

              <Thumbnails>
                <Slider {...galleryThumbails}>
                  {videos.map((video, index) => (
                    <li
                      key={video.id}
                      onClick={() => setActive3(index)}
                      className={active3 === index ? 'active' : ''}
                    >
                      <img
                        key={index}
                        src={video.data.video.thumbnail_url.replace(
                          'hqdefault',
                          'maxresdefault'
                        )}
                        alt={video.data.video.title}
                        width="215"
                        height="118"
                      />

                      <div className="overlay"></div>
                    </li>
                  ))}
                </Slider>
              </Thumbnails>
            </TabContent>
          </Tabs>
        </Container>
      </GalleryContainer>
    </>
  )
}

export default Gallery

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const photos = await client().query(
    Prismic.Predicates.at('document.type', 'photos')
  )

  const videos = await client().query(
    Prismic.Predicates.at('document.type', 'videos')
  )

  return {
    props: {
      photos: photos.results,
      videos: videos.results
    }
  }
}
