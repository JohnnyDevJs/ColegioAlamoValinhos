import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const MenuHamburger = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${props => props.theme.colors.lightGreen};
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    margin-right: 5px;
    margin-top: 4px;

    transition: color 0.3s;
  }

  svg {
    transition: color 0.3s;
  }

  &:hover {
    span {
      color: ${props => props.theme.colors.blue};
    }

    svg {
      color: ${props => props.theme.colors.lightGreen} !important;
    }
  }

  ${up('lg')} {
    display: none;
  }
`
