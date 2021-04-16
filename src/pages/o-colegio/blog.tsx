import React, { useCallback, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import Link from 'next/link'
import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import SearchForm from '@/components/SearchForm'

import {
  BlogContainer,
  Tabs,
  TabMenu,
  TabContent,
  TabCards,
  TabsCardsContainer,
  Cards,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonWrapper
} from '@/styles/pages/college/blog/styles'

import SEO from '@/components/SEO'
import Paragraph from '@/typography/Paragraph'
import { GetServerSideProps } from 'next'

interface BlogProps {
  categories: Document[]
  blogByTagKnow: Document[]
  blogByTagEvents: Document[]
  blogByTagChildEducation: Document[]
  blogByTagFundamentalOneEducation: Document[]
  blogByTagFundamentalTwoEducation: Document[]
  blogByTagCourses: Document[]
}

const Blog: React.FC<BlogProps> = ({
  categories,
  blogByTagKnow,
  blogByTagEvents,
  blogByTagChildEducation,
  blogByTagFundamentalOneEducation,
  blogByTagFundamentalTwoEducation,
  blogByTagCourses
}) => {
  const [active, setActive] = useState(0)
  const [active2, setActive2] = useState(0)
  const [visible, setVisible] = useState(6)

  const handleMoreItems = useCallback(() => {
    setVisible(prevValue => prevValue + 6)
  }, [])

  const tabs = [
    {
      id: 0,
      title: 'Educação <br/>Infantil'
    },
    {
      id: 1,
      title: 'Educação <br/>Fundamental 1'
    },
    {
      id: 2,
      title: 'Educação <br/>Fundamental 2'
    },
    {
      id: 3,
      title: 'Cursos <br/>Extracurriculares'
    }
  ]

  return (
    <>
      <SEO color="#305FA4" title="Galeria" />
      <BlogContainer>
        <Container column alignIntems>
          <Heading
            titleSize="medium"
            titleColor="#001D7E"
            titleBorder
            titleBorderColor="blue"
          >
            Blog
          </Heading>

          <Tabs>
            <TabMenu>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={active === index ? 'active' : ''}
                >
                  {category.data.title.map(item => item.text)}
                </li>
              ))}
            </TabMenu>

            <TabContent className={active === 0 ? 'show' : ''}>
              <SearchForm className="search-blog" />
              <Cards>
                <Fade duration={500} direction="up" cascade triggerOnce>
                  {blogByTagKnow.slice(0, visible).map((know, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <img
                          src={know.data.cover_image.url}
                          alt="teste"
                          width="600"
                          height="400"
                        />
                      </CardHeader>
                      <CardBody>
                        <Paragraph
                          lineHeight="29px"
                          size="calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))"
                          paragraphColor="#555555"
                        >
                          {know.data.title.map(item => item.text)}
                        </Paragraph>
                      </CardBody>
                      <CardFooter>
                        <Link href="/" passHref replace>
                          <a>Veja mais</a>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </Fade>
              </Cards>
              {visible < blogByTagKnow.length && (
                <ButtonWrapper>
                  <button onClick={handleMoreItems} className="load-more">
                    Carregar mais
                  </button>
                </ButtonWrapper>
              )}
            </TabContent>

            <TabContent className={active === 1 ? 'show' : ''}>
              <TabsCardsContainer>
                <Fade duration={500} direction="up" cascade triggerOnce>
                  {tabs.map((tab, index) => (
                    <TabCards
                      key={tab.id}
                      onClick={() => setActive2(index)}
                      className={active2 === index ? 'active' : ''}
                    >
                      <p dangerouslySetInnerHTML={{ __html: tab.title }} />
                    </TabCards>
                  ))}
                </Fade>
              </TabsCardsContainer>
              <SearchForm className="search-blog" />

              <TabContent className={active2 === 0 ? 'show' : ''}>
                <Cards>
                  <Fade duration={500} direction="up" cascade triggerOnce>
                    {blogByTagChildEducation
                      .slice(0, visible)
                      .map((know, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <img
                              src={know.data.cover_image.url}
                              alt="teste"
                              width="600"
                              height="400"
                            />
                          </CardHeader>
                          <CardBody>
                            <Paragraph
                              lineHeight="29px"
                              size="calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))"
                              paragraphColor="#555555"
                            >
                              {know.data.title.map(item => item.text)}
                            </Paragraph>
                          </CardBody>
                          <CardFooter>
                            <Link href="/" passHref replace>
                              <a>Veja mais</a>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </Fade>
                </Cards>
              </TabContent>

              <TabContent className={active2 === 1 ? 'show' : ''}>
                <Cards>
                  <Fade duration={500} direction="up" cascade triggerOnce>
                    {blogByTagFundamentalOneEducation
                      .slice(0, visible)
                      .map((know, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <img
                              src={know.data.cover_image.url}
                              alt="teste"
                              width="600"
                              height="400"
                            />
                          </CardHeader>
                          <CardBody>
                            <Paragraph
                              lineHeight="29px"
                              size="calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))"
                              paragraphColor="#555555"
                            >
                              {know.data.title.map(item => item.text)}
                            </Paragraph>
                          </CardBody>
                          <CardFooter>
                            <Link href="/" passHref replace>
                              <a>Veja mais</a>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </Fade>
                </Cards>
              </TabContent>

              <TabContent className={active2 === 2 ? 'show' : ''}>
                <Cards>
                  <Fade duration={500} direction="up" cascade triggerOnce>
                    {blogByTagFundamentalTwoEducation
                      .slice(0, visible)
                      .map((know, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <img
                              src={know.data.cover_image.url}
                              alt="teste"
                              width="600"
                              height="400"
                            />
                          </CardHeader>
                          <CardBody>
                            <Paragraph
                              lineHeight="29px"
                              size="calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))"
                              paragraphColor="#555555"
                            >
                              {know.data.title.map(item => item.text)}
                            </Paragraph>
                          </CardBody>
                          <CardFooter>
                            <Link href="/" passHref replace>
                              <a>Veja mais</a>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </Fade>
                </Cards>
              </TabContent>

              <TabContent className={active2 === 3 ? 'show' : ''}>
                <Cards>
                  <Fade duration={500} direction="up" cascade triggerOnce>
                    {blogByTagCourses.slice(0, visible).map((know, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <img
                            src={know.data.cover_image.url}
                            alt="teste"
                            width="600"
                            height="400"
                          />
                        </CardHeader>
                        <CardBody>
                          <Paragraph
                            lineHeight="29px"
                            size="calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))"
                            paragraphColor="#555555"
                          >
                            {know.data.title.map(item => item.text)}
                          </Paragraph>
                        </CardBody>
                        <CardFooter>
                          <Link href="/" passHref replace>
                            <a>Veja mais</a>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </Fade>
                </Cards>
              </TabContent>
            </TabContent>

            <TabContent className={active === 2 ? 'show' : ''}>
              <SearchForm className="search-blog" />
              <Cards>
                <Fade duration={500} direction="up" cascade triggerOnce>
                  {blogByTagEvents.slice(0, visible).map((know, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <img
                          src={know.data.cover_image.url}
                          alt="teste"
                          width="600"
                          height="400"
                        />
                      </CardHeader>
                      <CardBody>
                        <Paragraph
                          lineHeight="29px"
                          size="calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)))"
                          paragraphColor="#555555"
                        >
                          {know.data.title.map(item => item.text)}
                        </Paragraph>
                      </CardBody>
                      <CardFooter>
                        <Link href="/" passHref replace>
                          <a>Veja mais</a>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </Fade>
              </Cards>
              {visible < blogByTagKnow.length && (
                <ButtonWrapper>
                  <button onClick={handleMoreItems} className="load-more">
                    Carregar mais
                  </button>
                </ButtonWrapper>
              )}
            </TabContent>
          </Tabs>
        </Container>
      </BlogContainer>
    </>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps = async context => {
  const { q } = context.query

  if (!q) {
    const categories = await client().query(
      Prismic.Predicates.at('document.type', 'blog_category'),
      { orderings: '[my.blog.title]' }
    )

    const blogByTagKnow = await client().query([
      Prismic.Predicates.at('document.tags', ['Você Sabia'])
    ])

    const blogByTagEvents = await client().query([
      Prismic.Predicates.at('document.tags', ['Eventos'])
    ])

    const blogByTagChildEducation = await client().query([
      Prismic.Predicates.at('document.tags', ['Educação Infantil'])
    ])

    const blogByTagFundamentalOneEducation = await client().query([
      Prismic.Predicates.at('document.tags', ['Ensino Fundamental I'])
    ])

    const blogByTagFundamentalTwoEducation = await client().query([
      Prismic.Predicates.at('document.tags', ['Ensino Fundamental II'])
    ])

    const blogByTagCourses = await client().query([
      Prismic.Predicates.at('document.tags', ['Cursos Extracurriculares'])
    ])

    return {
      props: {
        categories: categories.results,
        blogByTagKnow: blogByTagKnow.results,
        blogByTagEvents: blogByTagEvents.results,
        blogByTagChildEducation: blogByTagChildEducation.results,
        blogByTagFundamentalOneEducation:
          blogByTagFundamentalOneEducation.results,
        blogByTagFundamentalTwoEducation:
          blogByTagFundamentalTwoEducation.results,
        blogByTagCourses: blogByTagCourses.results
      }
    }
  }

  const categories = await client().query(
    Prismic.Predicates.at('document.type', 'blog_category'),
    { orderings: '[my.blog.title]' }
  )

  const blogByTagKnow = await client().query([
    Prismic.Predicates.at('document.tags', ['Você Sabia']),
    Prismic.Predicates.fulltext('document', String(q))
  ])

  const blogByTagEvents = await client().query([
    Prismic.Predicates.at('document.tags', ['Eventos']),
    Prismic.Predicates.fulltext('document', String(q))
  ])

  const blogByTagChildEducation = await client().query([
    Prismic.Predicates.at('document.tags', ['Educação Infantil']),
    Prismic.Predicates.fulltext('document', String(q))
  ])

  const blogByTagFundamentalOneEducation = await client().query([
    Prismic.Predicates.at('document.tags', ['Ensino Fundamental I']),
    Prismic.Predicates.fulltext('document', String(q))
  ])

  const blogByTagFundamentalTwoEducation = await client().query([
    Prismic.Predicates.at('document.tags', ['Ensino Fundamental II']),
    Prismic.Predicates.fulltext('document', String(q))
  ])

  const blogByTagCourses = await client().query([
    Prismic.Predicates.at('document.tags', ['Cursos Extracurriculares']),
    Prismic.Predicates.fulltext('document', String(q))
  ])

  return {
    props: {
      categories: categories.results,
      blogByTagKnow: blogByTagKnow.results,
      blogByTagEvents: blogByTagEvents.results,
      blogByTagChildEducation: blogByTagChildEducation.results,
      blogByTagFundamentalOneEducation:
        blogByTagFundamentalOneEducation.results,
      blogByTagFundamentalTwoEducation:
        blogByTagFundamentalTwoEducation.results,
      blogByTagCourses: blogByTagCourses.results
    }
  }
}
