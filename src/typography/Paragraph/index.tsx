import React from 'react'
import { ParagraphContainer } from './styles'

interface ParagraphProps {
  paragraphColor?: string
  lineHeight?: string
  size?: string
  className?: string
}

const Paragraph: React.FC<ParagraphProps> = ({
  paragraphColor,
  lineHeight,
  size,
  children,
  className
}) => (
  <ParagraphContainer
    paragraphColor={paragraphColor}
    lineHeight={lineHeight}
    size={size}
    className={className}
  >
    {children}
  </ParagraphContainer>
)

export default Paragraph
