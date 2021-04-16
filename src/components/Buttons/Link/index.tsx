import React from 'react'
import Link from 'next/link'

import { ButtonLinkContainer } from './styles'

interface ButtonLinkProps {
  href: string
  size: string
  color: string
  target?: string
  hover: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  size,
  color,
  hover,
  target,
  children
}) => (
  <Link href={href} passHref replace>
    <ButtonLinkContainer
      target={target}
      size={size}
      color={color}
      hover={hover}
    >
      {children}
    </ButtonLinkContainer>
  </Link>
)

export default ButtonLink
