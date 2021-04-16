import styled from 'styled-components'

export const NavContainer = styled.nav`
  a {
    color: ${props => props.theme.colors.blue};
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    font-size: 14px;

    transition: color 0.3s;

    &.active {
      color: ${props => props.theme.colors.lightGreen};
    }

    + a {
      border-top: 1px solid ${props => props.theme.colors.grayEight};
      padding: 10px 15px;
    }

    &:hover {
      color: ${props => props.theme.colors.darkBlue};
    }
  }
`
