import React, { useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { useRouter } from 'next/dist/client/router'
import Loading from '@/components/Loading'
import { client } from '@/lib/prismic'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'

import {
  Breadcrumbs,
  BlogContainer,
  Share
} from '@/styles/pages/college/blog/single/styles'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillYoutube } from 'react-icons/ai'

const SettingsGaleryFeatured = {
  autoplay: false,
  dots: false,
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

interface BlogProps {
  blog: Document
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  console.log(blog)
  return (
    <BlogContainer>
      <Container column>
        <Heading titleSize="medium" titleColor="#001D7E">
          {PrismicDOM.RichText.asText(blog.data.title)}
        </Heading>
        <Breadcrumbs>
          <li>
            Por <span>Colégio Álamo Valinhos</span> em <span>26/10/2021</span>
          </li>
        </Breadcrumbs>

        {blog.data.photos.length > 0 && (
          <>
            <Slider className="image-featured" {...SettingsGaleryFeatured}>
              {blog.data.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.image.url}
                  alt={photo.image.title}
                  width={photo.image.dimensions.width}
                  height={photo.image.dimensions.height}
                />
              ))}
            </Slider>
          </>
        )}

        {blog.data.videos.length > 0 && (
          <>
            <Slider className="video-featured" {...SettingsGaleryFeatured}>
              {blog.data.videos.map((video, index) => (
                <div
                  className="embed-responsive"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: video.url.html }}
                />
              ))}
            </Slider>
          </>
        )}

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(blog.data.content)
          }}
        />

        <Share>
          <li>
            <a href="" target="_blank">
              <FaFacebookF size={20} color="#FFFFFF" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <GrInstagram size={18} color="#FFFFFF" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <AiFillYoutube size={20} color="#FFFFFF" />
            </a>
          </li>
        </Share>
      </Container>
    </BlogContainer>
  )
}
export default Blog

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}
export const getStaticProps: GetStaticProps<BlogProps> = async context => {
  const { slug } = context.params

  const blog = await client().getByUID('blog', String(slug), {})

  return {
    props: {
      blog
    }
  }
}
