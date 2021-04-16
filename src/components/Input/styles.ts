import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;

    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.grayThree};
    border-radius: 16px;
    padding: 13px 25px;
    font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayNine};

    transition: all 0.3s;

    &.has-error {
      border: 1px solid ${props => props.theme.colors.red};
    }
    &::placeholder {
      font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayNine};
    }

    &:focus,
    &:active {
      outline: none;
      border: 1px solid ${props => props.theme.colors.lightGreen};
    }
  }

  .error {
    color: ${props => props.theme.colors.red};
    font-size: 14px;
  }
`
