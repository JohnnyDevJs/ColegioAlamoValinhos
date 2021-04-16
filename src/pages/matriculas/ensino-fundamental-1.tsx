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
      title="Matricule-se » Ensino Fundamental I"
      shouldIndexPage={false}
    />
    <Hero>
      <Container column className="container-enrollment">
        <Fade cascade delay={200} duration={500} direction="up" triggerOnce>
          <Heading titleColor="#001D7E" titleSize="medium">
            Ensino Fundamental I
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
        <input type="hidden" id="mid" name="mid" value="314947" />
        <input type="hidden" id="fid" name="fid" value="14908" />
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
            placeholder="Nome do aluno"
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
          <label htmlFor="llfield32603">Ano Letivo</label>
          <select id="llfield32603" name="llfield32603" data-required="true">
            <option value="">Ano Letivo</option>
            <option value="1º ANO">1º ANO</option>
            <option value="2º ANO">2º ANO</option>
            <option value="3º ANO">3º ANO</option>
            <option value="4º ANO">4º ANO</option>
            <option value="5º ANO">5º ANO</option>
          </select>
          <div className="field-error" id="llerror32603"></div>
        </div>
        <div>
          <label htmlFor="llfield32602">Idade do Aluno</label>
          <select id="llfield32602" name="llfield32602" data-required="true">
            <option value="">Idade do Aluno</option>
            <option value="06 anos">06 anos</option>
            <option value="07 anos">07 anos</option>
            <option value="08 anos">08 anos</option>
            <option value="09 anos">09 anos</option>
            <option value="10 anos">10 anos</option>
          </select>
          <div className="field-error" id="llerror32602"></div>
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
