import React from 'react'
import { TopBar, Items, Item } from './styles'
import Container from '@/layout/Container'

const Topbar: React.FC = () => {
  const informations = [
    {
      id: 1,
      title: 'Telefone: (19) 3199-4500',
      url: 'tel:1931994500'
    },
    {
      id: 2,
      title: 'WhatsApp: (19) 9 8902-8282',
      url: 'https://api.whatsapp.com/send?phone=5519989028282'
    },
    {
      id: 3,
      title: 'Indicar Amigo',
      url:
        'https://api.whatsapp.com/send?phone=5519989028282&text=Quero%20Indicar%20um%20Novo%20Aluno%20'
    }
  ]
  return (
    <TopBar>
      <Container>
        <Items>
          {informations.map(information =>
            information.id !== 3 ? (
              <li key={information.id}>
                <a href={information.url}>{information.title}</a>
              </li>
            ) : (
              <Item key={information.url}>
                <a href={information.url}>{information.title}</a>
              </Item>
            )
          )}
        </Items>
      </Container>
    </TopBar>
  )
}

export default Topbar
