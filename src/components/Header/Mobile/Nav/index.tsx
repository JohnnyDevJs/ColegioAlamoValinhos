import React, { useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import Accordion from '@/components/Accordion'
import { NavContainer } from './styles'

const Nav: React.FC = () => {
  const router = useRouter()

  const accordions = [
    {
      id: 1,
      title: 'O Colégio',
      url: '',
      items: [
        // {
        //   id: 1,
        //   title: 'Blog',
        //   url: '/o-colegio/blog'
        // },
        {
          id: 2,
          title: 'Rede do Bem',
          url: 'https://colegioalamovalinhos.com.br/o-colegio/rede-do-bem'
        },
        {
          id: 3,
          title: 'Cantina',
          url: 'https://colegioalamovalinhos.com.br/o-colegio/cantina'
        },
        {
          id: 4,
          title: 'Galeria',
          url: 'https://colegioalamovalinhos.com.br/o-colegio/galeria'
        }
      ]
    },
    {
      id: 2,
      title: 'Cursos',
      url: '',
      items: [
        {
          id: 1,
          title: 'Educação Infantil',
          url: 'https://colegioalamovalinhos.com.br/cursos/educacao-infantil'
        },
        {
          id: 2,
          title: 'Ensino Fundamental I',
          url: 'https://colegioalamovalinhos.com.br/cursos/ensino-fundamental-1'
        },
        {
          id: 3,
          title: 'Ensino Fundamental II',
          url: 'https://colegioalamovalinhos.com.br/cursos/ensino-fundamental-2'
        }
      ]
    },
    {
      id: 3,
      title: 'Diferenciais',
      url: '',
      items: [
        {
          id: 1,
          title: 'Educação Socioemocional',
          url:
            'https://colegioalamovalinhos.com.br/diferenciais/educacao-socioemocional'
        },
        {
          id: 2,
          title: 'Educação Tecnológica',
          url:
            'https://colegioalamovalinhos.com.br/diferenciais/educacao-tecnologica'
        },
        {
          id: 3,
          title: 'Educação Financeira',
          url:
            'https://colegioalamovalinhos.com.br/diferenciais/educacao-financeira'
        },
        {
          id: 4,
          title: 'Programa Bilíngue',
          url:
            'https://colegioalamovalinhos.com.br/diferenciais/programa-bilingue'
        }
      ]
    },
    {
      id: 4,
      title: 'Matrículas',
      url: '',
      items: [
        {
          id: 1,
          title: 'Educação Infantil',
          url:
            'https://colegioalamovalinhos.com.br/matriculas/educacao-infantil'
        },
        {
          id: 2,
          title: 'Ensino Fundamental I',
          url:
            'https://colegioalamovalinhos.com.br/matriculas/ensino-fundamental-1'
        },
        {
          id: 3,
          title: 'Ensino Fundamental II',
          url:
            'https://colegioalamovalinhos.com.br/matriculas/ensino-fundamental-2'
        }
      ]
    },
    {
      id: 5,
      title: 'Trabalhe conosco',
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLScnHyxB6f_aoj5YgWN83lJCGNskzuDrYkTEysJZ6h7GAxKFcA/viewform',
      items: []
    },
    {
      id: 6,
      title: 'Agendamento',
      url: 'https://colegioalamovalinhos.com.br/agendamento',
      items: []
    },
    {
      id: 7,
      title: 'Contato',
      url: 'https://colegioalamovalinhos.com.br/contato',
      items: []
    }
  ]

  const handleCloseToggle = useCallback(() => {
    document.querySelector('.toggle-menu').classList.remove('open')
  }, [])

  return (
    <NavContainer>
      {accordions.map(accordion =>
        accordion.items.length !== 0 ? (
          <Accordion key={accordion.id} title={accordion.title}>
            {accordion.items.map(item => (
              <li key={item.id}>
                <a
                  href={item.url}
                  onClick={handleCloseToggle}
                  className={router.asPath === item.url ? 'active' : ''}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </Accordion>
        ) : (
          <a
            key={accordion.id}
            href={accordion.url}
            onClick={handleCloseToggle}
            className={router.pathname === accordion.url ? 'active' : ''}
          >
            {accordion.title}
          </a>
        )
      )}
    </NavContainer>
  )
}
export default Nav
