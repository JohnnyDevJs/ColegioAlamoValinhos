import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 16px;
  padding: 13px 25px;
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
  cursor: pointer;
  width: 100%;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.green};
  }

  &:focus,
  &:active {
    outline: none;
  }
`
