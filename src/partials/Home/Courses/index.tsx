import React from 'react'
import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { Fade } from 'react-awesome-reveal'

import Container from '@/layout/Container'
import Heading from '@/typography/Heading'

import { CoursesContainer, Course, Icon } from './styles'

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

const Courses: React.FC = () => (
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
)

export default Courses
