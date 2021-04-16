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
          slug: '/o-colegio/galeria'
        },
        {
          id: 2,
          title: 'Blog',
          slug: '/o-colegio/blog'
        },
        {
          id: 3,
          title: 'Rede do Bem',
          slug: '/o-colegio/rede-do-bem'
        },
        {
          id: 4,
          title: 'Cantina',
          slug: '/o-colegio/cantina'
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
          slug: '/cursos/educacao-infantil',
          enrollment: '/matriculas/educacao-infantil'
        },
        {
          id: 2,
          title: 'Ensino Fundamental I',
          slug: '/cursos/ensino-fundamental-1'
        },
        {
          id: 3,
          title: 'Ensino Fundamental II',
          slug: '/cursos/ensino-fundamental-2'
        },

        {
          id: 4,
          title: 'Cursos Extracurriculares',
          slug: '/cursos/cursos-extracurriculares'
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
          title: 'Educação Sócioemocional',
          slug: '/diferenciais/educacao-socioemocional'
        },
        {
          id: 2,
          title: 'Educação Tecnológica',
          slug: '/diferenciais/educacao-tecnologica'
        },
        {
          id: 3,
          title: 'Educação Financeira',
          slug: '/diferenciais/educacao-financeira'
        },
        {
          id: 4,
          title: 'Programa Bilíngue',
          slug: '/diferenciais/programa-bilingue'
        }
      ]
    },
    {
      id: 4,
      title: 'Matrículas',
      slug: '/matriculas'
    },
    {
      id: 5,
      title: 'Contato',
      slug: '/contato',
      width: ''
    },
    {
      id: 6,
      title: 'Trabalhe Conosco',
      slug: '/trabalhe-conosco',
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
                    <Link href={item.slug}>
                      <a
                        className={router.asPath === item.slug ? 'active' : ''}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </Dropdown>
            ) : (
              <Link href={navItem.slug} key={navItem.id}>
                <a className={router.pathname === navItem.slug ? 'active' : ''}>
                  {navItem.title}
                </a>
              </Link>
            )
          )}
        </Nav>
        <MobileHamburger />
      </Container>
    </NavBar>
  )
}
export default Navbar
