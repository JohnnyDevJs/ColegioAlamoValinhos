import React from 'react'
import Link from 'next/link'
import { NavBar, Nav } from './styles'

import Container from '@/layout/Container'
import Dropdown from '@/components/Dropdown'
import MobileHamburger from '@/components/Header/Mobile/Hamburger'
import { useRouter } from 'next/dist/client/router'

const Navbar: React.FC = () => {
  const router = useRouter()

  const navItems = [
    {
      id: 1,
      title: 'O Colégio',
      slug: '',
      width: '225px',
      items: [
        {
          id: 1,
          title: 'Galeria',
          slug: 'https://colegioalamovalinhos.com.br/o-colegio/galeria'
        },
        // {
        //   id: 2,
        //   title: 'Blog',
        //   slug: '/o-colegio/blog'
        // },
        {
          id: 3,
          title: 'Rede do Bem',
          slug: 'https://colegioalamovalinhos.com.br/o-colegio/rede-do-bem'
        },
        {
          id: 4,
          title: 'Cantina',
          slug: 'https://colegioalamovalinhos.com.br/o-colegio/cantina'
        }
      ]
    },
    {
      id: 2,
      title: 'Cursos',
      slug: '',
      width: '297px',
      items: [
        {
          id: 1,
          title: 'Educação Infantil',
          slug: 'https://colegioalamovalinhos.com.br/cursos/educacao-infantil',
          enrollment:
            'https://colegioalamovalinhos.com.br/matriculas/educacao-infantil'
        },
        {
          id: 2,
          title: 'Ensino Fundamental I',
          slug:
            'https://colegioalamovalinhos.com.br/cursos/ensino-fundamental-1'
        },
        {
          id: 3,
          title: 'Ensino Fundamental II',
          slug:
            'https://colegioalamovalinhos.com.br/cursos/ensino-fundamental-2'
        },
        {
          id: 4,
          title: 'Cursos Extracurriculares',
          slug:
            'https://colegioalamovalinhos.com.br/cursos/cursos-extracurriculares'
        }
      ]
    },
    {
      id: 3,
      title: 'Diferenciais',
      slug: '',
      width: '314px',
      items: [
        {
          id: 1,
          title: 'Educação Socioemocional',
          slug:
            'https://colegioalamovalinhos.com.br/diferenciais/educacao-socioemocional'
        },
        {
          id: 2,
          title: 'Educação Tecnológica',
          slug:
            'https://colegioalamovalinhos.com.br/diferenciais/educacao-tecnologica'
        },
        {
          id: 3,
          title: 'Educação Financeira',
          slug:
            'https://colegioalamovalinhos.com.br/diferenciais/educacao-financeira'
        },
        {
          id: 4,
          title: 'Programa Bilíngue',
          slug:
            'https://colegioalamovalinhos.com.br/diferenciais/programa-bilingue'
        }
      ]
    },
    {
      id: 4,
      title: 'Matrículas',
      slug: 'matriculas',
      width: '297px',
      items: [
        {
          id: 1,
          title: 'Educação Infantil',
          slug:
            'https://colegioalamovalinhos.com.br/matriculas/educacao-infantil'
        },
        {
          id: 2,
          title: 'Ensino Fundamental I',
          slug:
            'https://colegioalamovalinhos.com.br/matriculas/ensino-fundamental-1'
        },
        {
          id: 3,
          title: 'Ensino Fundamental II',
          slug:
            'https://colegioalamovalinhos.com.br/matriculas/ensino-fundamental-2'
        }
      ]
    },
    {
      id: 5,
      title: 'Trabalhe Conosco',
      slug:
        'https://docs.google.com/forms/d/e/1FAIpQLScnHyxB6f_aoj5YgWN83lJCGNskzuDrYkTEysJZ6h7GAxKFcA/viewform',
      width: ''
    },
    {
      id: 6,
      title: 'Agendamento',
      slug: 'https://colegioalamovalinhos.com.br/agendamento',
      width: ''
    },
    {
      id: 7,
      title: 'Contato',
      slug: 'https://colegioalamovalinhos.com.br/contato',
      width: ''
    }
  ]

  return (
    <NavBar>
      <Container flexEnd>
        <Nav>
          {navItems.map(navItem =>
            navItem.items ? (
              <Dropdown
                key={navItem.id}
                title={navItem.title}
                dropdownWidth={navItem.width}
              >
                {navItem.items.map(item => (
                  <li key={item.id}>
                    <a
                      href={item.slug}
                      className={router.asPath === item.slug ? 'active' : ''}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </Dropdown>
            ) : (
              <a
                href={navItem.slug}
                className={router.pathname === navItem.slug ? 'active' : ''}
              >
                {navItem.title}
              </a>
            )
          )}
        </Nav>
        <MobileHamburger />
      </Container>
    </NavBar>
  )
}
export default Navbar
