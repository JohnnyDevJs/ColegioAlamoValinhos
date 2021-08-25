import React from 'react'

import { Fade } from 'react-awesome-reveal'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'

import EnrollmentImage from '../../../public/assets/enrollment.svg'
import { Hero } from '@/styles/pages/enrollment/styles'

import SEO from '@/components/SEO'

const Kindergarten: React.FC = () => {
  return (
    <>
      <SEO
        color="#CBCEC0"
        title="Matricule-se » Educação Infantil"
        shouldIndexPage={false}
      />
      <Hero>
        <Container column className="container-enrollment">
          <Fade cascade delay={200} duration={500} direction="up" triggerOnce>
            <Heading titleColor="#001D7E" titleSize="medium">
              Educação Infantil
            </Heading>
            <Heading titleColor="#305FA4" titleSize="medium">
              Matricule-se
            </Heading>
            <Paragraph
              paragraphColor="#696969"
              lineHeight="calc(30px + (41 - 30) * ((100vw - 320px) / (1920 - 320)))"
              size="calc(22px + (34 - 22) * ((100vw - 320px) / (1920 - 320)))"
            >
              Preencha o formulário
              <br /> e receba por e-mail
              <br /> todas as informações!
            </Paragraph>
          </Fade>
        </Container>
        <EnrollmentImage />
        <Fade cascade delay={200} duration={500} direction="up" triggerOnce>
          <form
            id="llCaptureForm"
            className="llform001"
            action="//paginas.rocks/capture"
            method="post"
          >
            <input type="hidden" id="mid" name="mid" value="314951" />
            <input type="hidden" id="fid" name="fid" value="14752" />
            <input
              type="hidden"
              id="formType"
              name="formType"
              value="dynamic"
            />
            <div>
              <label htmlFor="llfield32412">Responsável</label>
              <input
                type="text"
                id="llfield32412"
                name="llfield32412"
                placeholder="Nome do Responsável"
                data-required="true"
              />
              <div className="field-error" id="llerror32412"></div>
            </div>
            <div>
              <label htmlFor="llfield32414">E-mail</label>
              <input
                type="email"
                id="llfield32414"
                name="llfield32414"
                placeholder="Seu Melhor E-mail"
                data-required="true"
              />
              <div className="field-error" id="llerror32414"></div>
            </div>
            <div>
              <label htmlFor="llfield32590">WhatsApp com DDD</label>
              <input
                type="text"
                id="llfield32590"
                name="llfield32590"
                placeholder="WhatsApp com DDD"
                data-required="true"
              />
              <div className="field-error" id="llerror32590"></div>
            </div>
            <div>
              <label htmlFor="llfield32441">Cidade</label>
              <input
                type="text"
                id="llfield32441"
                name="llfield32441"
                placeholder="Cidade"
                data-required="true"
              />
              <div className="field-error" id="llerror32441"></div>
            </div>
            <div>
              <label htmlFor="llfield30116">Nome do Aluno</label>
              <input
                type="text"
                id="llfield30116"
                name="llfield30116"
                placeholder="Nome do Aluno"
                data-required="true"
              />
              <div className="field-error" id="llerror30116"></div>
            </div>
            <div>
              <label htmlFor="llfield32438">Data de Nascimento</label>
              <input
                type="date"
                id="llfield32438"
                name="llfield32438"
                placeholder="Data de Nascimento"
                data-required="true"
              />
              <div className="field-error" id="llerror32438"></div>
            </div>
            <div>
              <label htmlFor="llfield32440">Grupo desejado - Infantil</label>
              <select
                id="llfield32440"
                name="llfield32440"
                data-required="true"
              >
                <option value="">Selecionar</option>
                <option value="G1">G1</option>
                <option value="G2">G2</option>
                <option value="G3">G3</option>
                <option value="G4">G4</option>
                <option value="G5">G5</option>
              </select>
              <div className="field-error" id="llerror32440"></div>
            </div>

            <div className="button-bar">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Fade>
      </Hero>
    </>
  )
}

export default Kindergarten
