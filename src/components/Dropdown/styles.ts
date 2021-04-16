import styled, { css } from 'styled-components'
import { down, up } from 'styled-breakpoints'

interface DropdownItemsProps {
  dropdownWidth?: string
}

export const DropdownContainer = styled.li`
  position: relative;
  list-style: none;

  color: ${props => props.theme.colors.blue};
  font-weight: 500;
  font-size: 20px;

  &:hover {
    ul {
      transform: translateY(-40px);
      opacity: 1;
      visibility: visible;
    }
  }

  ${up('lg')} {
    margin-right: calc(16px + (48 - 16) * ((100vw - 768px) / (1920 - 768)));
    //font-size: calc(16px + (20 - 16) * ((100vw - 768px) / (1920 - 768)));
  }

  ${down('md')} {
    display: none;
  }
`

export const DropdownItems = styled.ul<DropdownItemsProps>`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  position: absolute;
  opacity: 0;
  visibility: hidden;
  border-radius: 25px;
  list-style: none;
  padding: 1rem 1.5rem;
  left: -25px;
  z-index: 2;

  transition: all 0.4s;
  transform: translateY(0);

  li {
    a {
      color: ${props => props.theme.colors.grayThree};
      margin-top: 1rem;

      display: flex;

      transition: color 0.3s;

      &:hover {
        color: ${props => props.theme.colors.lightGreen};
      }
    }
  }

  ${props =>
    props.dropdownWidth
      ? css`
          width: ${props.dropdownWidth};
        `
      : css`
          width: 100%;
        `}
`

export const DropdownTitle = styled.span`
  color: ${props => props.theme.colors.darkBlue};
  border-bottom: 1px solid ${props => props.theme.colors.grayTwo};
  padding-bottom: 12px;
  font-weight: bold;
  width: 100%;

  display: flex;
`
