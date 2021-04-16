import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

interface ButtonLinkContainerProps {
  size: string
  color: string
  hover: string
}

export const ButtonLinkContainer = styled.a<ButtonLinkContainerProps>`
  background-color: ${props => props.color};
  border-radius: 61px;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.hover};
  }

  ${props =>
    props.size === 'large' &&
    css`
      font-size: 24px;
      padding: 15px 45px;
      text-align: center;

      ${down('lg')} {
        font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
        padding-left: calc(30px + (45 - 30) * ((100vw - 320px) / (1920 - 320)));
        padding-right: calc(
          30px + (45 - 30) * ((100vw - 320px) / (1920 - 320))
        );
        padding-top: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
        padding-bottom: calc(
          10px + (15 - 10) * ((100vw - 320px) / (1920 - 320))
        );
      }
    `}
`
