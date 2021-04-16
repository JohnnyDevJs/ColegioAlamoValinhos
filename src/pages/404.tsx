import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { Fade } from 'react-awesome-reveal'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import {
  PageNotFoundContainer,
  Button
} from '@/styles/pages/pagenotfound/styles'

import PageNotFoundImage from '../assets/page-not-found.svg'

const PageNotFound: React.FC = () => {
  const router = useRouter()

  return (
    <PageNotFoundContainer>
      <Container column alignIntems>
        <Fade duration={500} direction="up" cascade triggerOnce>
          <Heading titleColor="#305FA4" titleSize="medium">
            Oops!
          </Heading>
          <Paragraph
            paragraphColor="#696969"
            lineHeight="calc(30px + (41 - 30) * ((100vw - 320px) / (1920 - 320)))"
            size="calc(28px + (34 - 28) * ((100vw - 320px) / (1920 - 320)))"
          >
            A página que você está procurando
            <br />
            não foi encontrada!
          </Paragraph>
          <Button onClick={() => router.back()}>Voltar</Button>

          <PageNotFoundImage />
        </Fade>
      </Container>
    </PageNotFoundContainer>
  )
}
export default PageNotFound
