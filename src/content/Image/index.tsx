import React, { ImgHTMLAttributes } from 'react'
import { Container } from './styles'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

const Image: React.FC<ImageProps> = ({ ...rest }) => (
  <Container {...rest}></Container>
)

export default Image
