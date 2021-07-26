import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { Fade } from 'react-awesome-reveal'
import { client } from '@/lib/prismic'
import Prismic from 'prismic-javascript'
import { useRouter } from 'next/dist/client/router'
import { Document } from 'prismic-javascript/types/documents'
import Loading from 'react-loading'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Button from '@/components/Buttons/Link'

import { Food, ContentFood, FoodImage } from '@/styles/pages/college/styles'

import SEO from '@/components/SEO'

interface CarteenProps {
  carteen: Document[]
}
const Carteen: React.FC<CarteenProps> = ({ carteen }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  // console.log(carteen.map(item => item.data.button.map(b => b.text)))

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
                Cantina
              </Heading>
            </Fade>
            <p>{carteen.map(item => item.data.description.map(i => i.text))}</p>
            <ul>
              {carteen.map(item => item.data.list.map(l => <li>{l.text}</li>))}
            </ul>
            {carteen.map(item => (
              <Link href={item.data.url.url} passHref={true}>
                Vizualizar Cardápio
              </Link>
            ))}
          </ContentFood>
          <FoodImage>
            {carteen.map(item => (
              <img alt="Cantina" src={item.data.imagem.url} />
            ))}
          </FoodImage>
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
