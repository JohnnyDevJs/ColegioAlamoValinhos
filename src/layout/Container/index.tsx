import React from 'react'
import { Container } from './styles'

export interface ContainerProps {
  column?: boolean
  columnMb?: boolean
  spaceBetween?: boolean
  alignIntems?: boolean
  alignIntemsStart?: boolean
  flexWrap?: boolean
  centerMB?: boolean
  className?: string
  flexEnd?: boolean
}

const Containers: React.FC<ContainerProps> = ({
  column,
  centerMB,
  className,
  columnMb,
  spaceBetween,
  alignIntems,
  flexWrap,
  alignIntemsStart,
  flexEnd,
  children
}) => (
  <Container
    column={column}
    columnMb={columnMb}
    spaceBetween={spaceBetween}
    alignIntems={alignIntems}
    alignIntemsStart={alignIntemsStart}
    flexWrap={flexWrap}
    centerMB={centerMB}
    className={className}
    flexEnd={flexEnd}
  >
    {children}
  </Container>
)

export default Containers
