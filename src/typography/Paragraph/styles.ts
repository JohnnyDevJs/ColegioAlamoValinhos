import styled from 'styled-components'

interface ParagraphContainerProps {
  paragraphColor?: string
  lineHeight?: string
  size?: string
}

export const ParagraphContainer = styled.p<ParagraphContainerProps>`
  color: ${props => props.paragraphColor};
  font-size: ${props => props.size};
  font-weight: 500;
  line-height: ${props =>
    props.lineHeight ? props => props.lineHeight : 'normal'};

  a {
    color: ${props => props.paragraphColor};
    text-decoration: none;
    font-weight: 500;

    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors.green};
    }
  }
`
