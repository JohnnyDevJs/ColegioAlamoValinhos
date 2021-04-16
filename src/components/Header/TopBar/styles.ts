import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const TopBar = styled.div`
  width: 100%;
  height: 42px;
  background-color: ${props => props.theme.colors.darkBlue};
  border-bottom: 7px solid ${props => props.theme.colors.blue};

  display: flex;
  align-items: center;

  ${down('md')} {
    display: none;
  }
`

export const Items = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  li + li {
    a {
      margin-left: calc(30px + (66 - 30) * ((100vw - 992px) / (1920 - 992)));
    }
  }

  a {
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    text-decoration: none;
    font-weight: 300;

    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors.lightGreen};
    }
  }
`

export const Item = styled.li`
  a {
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    text-decoration: none;
    font-weight: 300;

    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors.lightGreen};
    }
  }

  ${up('lg')} {
    + li {
      margin-left: calc(30px + (66 - 30) * ((100vw - 992px) / (1920 - 992)));
    }
  }
`
