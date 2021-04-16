import styled from 'styled-components'

export const Search = styled.div`
  max-width: 414px;
  width: 100%;
  height: calc(45px + (53 - 45) * ((100vw - 320px) / (1920 - 320)));
  background: ${props => props.theme.colors.white};
  border: 1px solid #5db7e3;
  box-sizing: border-box;
  border-radius: 148px;
  overflow: hidden;

  display: {
    display: flex;
    align-items: center;
  }

  form {
    display: flex;
    align-items: center;

    height: 100%;

    input {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 7px calc(12px + (25 - 12) * ((100vw - 320px) / (1920 - 320)));
      border: 0;
      background-color: transparent;
      font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayTen};

      &:-webkit-autofill {
        -webkit-text-fill-color: ${props => props.theme.colors.grayTen};
        -webkit-box-shadow: 0 0 0 30px ${props => props.theme.colors.white}
          inset;
      }

      &:focus,
      &:active {
        outline: none;
      }
      &::placeholder {
        font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
        color: ${props => props.theme.colors.grayTen};
      }
    }

    button {
      margin-right: calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));
      outline: none;
      cursor: pointer;
      background-color: transparent;
      border: none;

      svg {
        transition: fill 0.3s;
        width: calc(25px + (30 - 25) * ((100vw - 320px) / (1920 - 320)));
        height: calc(25 + (30 - 25) * ((100vw - 320px) / (1920 - 320)));
      }

      &:hover {
        svg {
          fill: ${props => props.theme.colors.lightBlue2};
        }
      }
    }
  }
`
