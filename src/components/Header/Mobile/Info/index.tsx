import React from 'react'
import Link from 'next/link'
import { InfoContainer, InfoContainerItem } from './styles'

const Info: React.FC = () => (
  <InfoContainer>
    <InfoContainerItem>
      <a rel="noreferrer" target="_blank" href="tel:1935147373">
        Telefone: (19) 3199-4500
      </a>
    </InfoContainerItem>

    <InfoContainerItem>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5519989028282"
      >
        WhatsApp: (19) 9 8902-8282
      </a>
    </InfoContainerItem>

    <InfoContainerItem>
      <Link href="/indicar-amigo" replace passHref>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5519989028282&text=Quero%20Indicar%20um%20Novo%20Aluno%20"
        >
          Indicar Amigo
        </a>
      </Link>
    </InfoContainerItem>
  </InfoContainer>
)

export default Info
