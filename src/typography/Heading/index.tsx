import React from 'react'
import { H1, H2, H3, H4, H5, HeadingH2 } from './styles'

export interface HeadingProps {
  titleColor: string
  titleSize: string
  titleBorder?: boolean
  titleBorderColor?: string
  dotBorder?: boolean
  uppercase?: boolean
  dangerouslySetInnerHTML?: { __html: string }
}

const Heading: React.FC<HeadingProps> = ({
  titleColor,
  titleSize,
  titleBorder = false,
  titleBorderColor,
  dotBorder = false,
  uppercase,
  children,
  dangerouslySetInnerHTML
}) => {
  return (
    (titleSize === 'large' && (
      <H1
        titleColor={titleColor}
        titleSize={titleSize}
        titleBorder={titleBorder}
        titleBorderColor={titleBorderColor}
      >
        {children}
      </H1>
    )) ||
    (titleSize === 'medium' &&
      (!dangerouslySetInnerHTML ? (
        <H2
          titleColor={titleColor}
          titleSize={titleSize}
          titleBorder={titleBorder}
          titleBorderColor={titleBorderColor}
        >
          {children}
        </H2>
      ) : (
        <HeadingH2
          titleColor={titleColor}
          titleSize={titleSize}
          titleBorder={titleBorder}
          titleBorderColor={titleBorderColor}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        />
      ))) ||
    (titleSize === 'small' && (
      <H3
        titleColor={titleColor}
        titleSize={titleSize}
        titleBorder={titleBorder}
        titleBorderColor={titleBorderColor}
      >
        {children}
      </H3>
    )) ||
    (titleSize === 'xsmall' && (
      <H4
        titleColor={titleColor}
        titleSize={titleSize}
        titleBorder={titleBorder}
        titleBorderColor={titleBorderColor}
        uppercase={uppercase}
      >
        {children}
      </H4>
    )) ||
    (titleSize === 'xsmall2' && (
      <H5
        titleColor={titleColor}
        titleSize={titleSize}
        titleBorder={titleBorder}
        titleBorderColor={titleBorderColor}
        dotBorder={dotBorder}
        uppercase={uppercase}
      >
        {children}
      </H5>
    ))
  )
}

export default Heading
