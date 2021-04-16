import React from 'react'
import { Fade } from 'react-awesome-reveal'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'

import EnrollmentImage from '../../../public/assets/enrollment.svg'
import { Hero } from '@/styles/pages/enrollment/styles'

import SEO from '@/components/SEO'

const Kindergarten: React.FC = () => (
  <>
    <SEO
      color="#CBCEC0"
      title="Matricule-se » Ensino Fundamental II"
      shouldIndexPage={false}
    />
    <Hero>
      <Container column className="container-enrollment">
        <Fade cascade delay={200} duration={500} direction="up" triggerOnce>
          <Heading titleColor="#001D7E" titleSize="medium">
            Ensino Fundamental II
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
      <form
        id="llCaptureForm"
        className="llform001"
        action="//paginas.rocks/capture"
        method="post"
      >
        <input type="hidden" id="mid" name="mid" value="314952" />
        <input type="hidden" id="fid" name="fid" value="14975" />
        <div>
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
          <input
            type="text"
            id="llfield32591"
            name="llfield32591"
            placeholder="Bairro"
            data-required="true"
          />
          <div className="field-error" id="llerror32591"></div>
        </div>
        <div>
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
          <label htmlFor="llfield32733">Ano Letivo Desejado Médio</label>
          <select id="llfield32733" name="llfield32733" data-required="true">
            <option value="">Ano Letivo Desejado</option>
            <option value="1º ANO">1º ANO</option>
            <option value="2º ANO">2º ANO</option>
            <option value="3º ANO">3º ANO</option>
          </select>
          <div className="field-error" id="llerror32733"></div>
        </div>
        <div>
          <label htmlFor="llfield32734">Idade do Aluno Médio</label>
          <select id="llfield32734" name="llfield32734" data-required="true">
            <option value="">Idade do Aluno Ensino Médio</option>
            <option value="15 anos">15 anos</option>
            <option value="16 anos">16 anos</option>
            <option value="17 anos">17 anos</option>
          </select>
          <div className="field-error" id="llerror32734"></div>
        </div>
        <div className="button-bar">
          <button type="submit">Enviar</button>
        </div>
        <div className="loading-box">
          <div>loading...</div>
        </div>
        <div className="error-box">
          <div></div>
        </div>
      </form>
    </Hero>
  </>
)

export default Kindergarten
