import React from 'react'
import { useRouter } from 'next/dist/client/router'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'
import SEO from '@/components/SEO'

import { RegisterSuccessContainer } from '@/styles/pages/enrollment/register/styles'

const RegisterSuccess: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <SEO
        color="#CBCEC0"
        title="Cadastro Confirmado"
        shouldIndexPage={false}
      />
      <RegisterSuccessContainer>
        <Container column alignIntems>
          <Heading titleColor="#305FA4" titleSize="medium">
            Cadastro Confirmado
          </Heading>
          <Heading titleColor="#001D7E" titleSize="medium">
            Ensino Fundamental 2
          </Heading>
          <Paragraph
            paragraphColor="#696969"
            size="calc(25px + (34 - 25) * ((100vw - 320px) / (1920 - 320)))"
            lineHeight="30px"
          >
            Enviamos um e-mail de confirmação para você!
          </Paragraph>
          <div className="embed-responsive">
            <iframe
              src="https://www.youtube.com/embed/Caj41pDqWsc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              id="gdlr-video-135847"
            />
          </div>
          <button onClick={() => router.back()}>Voltar</button>
        </Container>
      </RegisterSuccessContainer>
    </>
  )
}
export default RegisterSuccess
