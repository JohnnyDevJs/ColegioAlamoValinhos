import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { CgArrowRight } from 'react-icons/cg'
import EnrollmentImage from '../../public/assets/enrollment.svg'

import {
  RegistrationContainer,
  Content,
  CoursesContainer,
  Course,
  Icon
} from '@/styles/pages/registration/styles'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'
import Paragraph from '@/typography/Paragraph'

import SEO from '@/components/SEO'

const courses = [
  {
    id: 1,
    title: 'Educação<br/>Infantil',
    url: '/cursos/educacao-infantil'
  },
  {
    id: 2,
    title: 'Ensino<br/>Fundamental I',
    url: '/cursos/ensino-fundamental-1'
  },
  {
    id: 3,
    title: 'Ensino<br/>Fundamental II',
    url: '/cursos/ensino-fundamental-2'
  }
]

const Registration: React.FC = () => {
  return (
    <>
      <SEO color="#001D7E" title="Matrículas" description="Matricule-se!" />
      <RegistrationContainer>
        <EnrollmentImage />
        <Container column className="m-3">
          <Fade direction="up" duration={500} cascade triggerOnce>
            <Heading titleColor="#001D7E" titleSize="medium">
              Matricule-se
            </Heading>
            <Paragraph
              paragraphColor="#606060"
              className="paragraph-Registration"
              size="calc(22px + (34 - 22) * ((100vw - 320px) / (1920 - 320)))"
            >
              Escolha o curso abaixo e <br />
              conheça o jeito Álamo de educar!
            </Paragraph>
            <Content>
              <div></div>
            </Content>
          </Fade>
        </Container>
      </RegistrationContainer>

      <CoursesContainer>
        <Container spaceBetween flexWrap>
          <Fade
            cascade
            direction="up"
            duration={500}
            triggerOnce
            className="courses_boxes"
          >
            {courses.map(course => (
              <Link key={course.id} href={course.url} passHref replace>
                <Course>
                  <Heading titleColor="#305FA4" titleSize="xsmall">
                    <div dangerouslySetInnerHTML={{ __html: course.title }} />
                  </Heading>
                  <Icon>
                    <CgArrowRight color="#BAC529" size={30} />
                  </Icon>
                </Course>
              </Link>
            ))}
          </Fade>
        </Container>
      </CoursesContainer>
    </>
  )
}
export default Registration
