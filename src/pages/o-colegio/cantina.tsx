import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'

import { Fade } from 'react-awesome-reveal'
import { client } from '@/lib/prismic'
import PrismicDOM from 'prismic-dom'
import Prismic from 'prismic-javascript'
import { useRouter } from 'next/dist/client/router'
import { Document } from 'prismic-javascript/types/documents'
import Loading from 'react-loading'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Button from '@/components/Buttons/Link'

import { Food, ContentFood } from '@/styles/pages/college/styles'

import SEO from '@/components/SEO'

interface CarteenProps {
  carteen: Document[]
}
const Carteen: React.FC<CarteenProps> = ({ carteen }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  console.log(carteen.map(item => item.data.description.map(i => i.text)))

  return (
    <>
      <SEO
        color="#305FA4"
        title="Cantina"
        description="Cardápios balanceados para uma alimentação saudável!"
      />

      <Food>
        <Container alignIntems spaceBetween columnMb>
          <ContentFood>
            <Fade direction="left" duration={500} triggerOnce cascade>
              <Heading titleColor="#305FA4" titleSize="medium">
                {carteen.map(item => item.data.description.map(i => i.text))}
              </Heading>
              {carteen.map(item =>
                item.data.description.map((i, index) => i.text)
              )}
            </Fade>
          </ContentFood>
        </Container>
      </Food>
    </>
  )
}

export default Carteen

export const getServerSideProps: GetServerSideProps<CarteenProps> = async () => {
  const carteen = await client().query(
    Prismic.Predicates.at('document.type', 'carteen')
  )

  return {
    props: {
      carteen: carteen.results
    }
  }
}
