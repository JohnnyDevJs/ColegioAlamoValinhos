import styled from 'styled-components'

export const MobileContent = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.graySeven};
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9999;

  opacity: 0;
  visibility: hidden;

  transition: all 0.3s;
  transform: translateX(-20%);

  &.open {
    opacity: 1;
    visibility: visible;

    transform: translateX(0);
  }

  svg.close {
    cursor: pointer;
    margin-top: 15px;
    margin-right: 15px;
    right: 0;
    position: absolute;

    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors.lightGreen} !important;
    }
  }
`
export const Logo = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 127px;
    height: 127px;
    margin: 0;
  }
`
