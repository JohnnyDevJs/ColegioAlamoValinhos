import styled from 'styled-components'

export const AccordionContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.grayEight};
  padding: 10px 15px;
  &.active {
    svg {
      transform: rotate(90deg);
    }
  }
`

export const AccordionTitle = styled.div`
  color: ${props => props.theme.colors.blue};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.darkBlue};
  }

  svg {
    margin-top: 0 !important;

    transition: all 0.3s;
    transform: rotate(0);
  }
`

export const AccordionContainerItems = styled.ul`
  list-style: none;
  height: 0;
  display: none;
  position: relative;
  margin-top: 5px;

  transition: height 0.3s ease;

  &.open {
    height: 100%;
    display: block;
    transform: translateY(0);
  }

  li {
    a {
      color: ${props => props.theme.colors.grayThree};
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s;
      padding: 5px 0;
      font-size: 14px;

      &:hover {
        color: ${props => props.theme.colors.lightGreen};
      }
    }
  }
`
