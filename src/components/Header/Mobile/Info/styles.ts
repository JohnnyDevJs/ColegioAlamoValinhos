import styled from 'styled-components'

export const InfoContainer = styled.ul`
  list-style: none;

  background-color: ${props => props.theme.colors.darkBlue};
`

export const InfoContainerItem = styled.li`
  a {
    color: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.darkBlueFour};
    display: block;
    padding: 0.5rem 15px;
    text-decoration: none;
    font-size: 14px;

    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors.lightGreen};
    }
  }
`
