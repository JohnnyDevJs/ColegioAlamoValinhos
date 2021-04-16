import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const PageNotFoundContainer = styled.section`
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
  padding-top: 5rem;

  p {
    text-align: center;
    margin-top: 1rem;
  }

  svg {
    width: 100%;
  }

  ${down('xs')} {
    padding-top: 9rem;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 61px;
  padding: 13px 70px;
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
  cursor: pointer;
  margin: 1rem auto 5rem;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.green};
  }

  &:focus,
  &:active {
    outline: none;
  }

  ${down('xs')} {
    margin: 1rem auto 0;
  }
`
