import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const ContactContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 3rem;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);

  p.paragraph-contact {
    text-align: center;
  }

  > svg {
    width: calc(120px + (208 - 120) * ((100vw - 320px) / (1920 - 320)));
    position: absolute;
    right: 0;
  }
`

export const Content = styled.div`
  padding-top: 7rem;
  display: flex;
  justify-content: space-around;

  form {
    max-width: 400px;
    width: 100%;

    div {
      margin-bottom: 1rem;
    }

    input,
    textarea {
      width: 100%;

      background: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.grayThree};
      border-radius: 16px;
      padding: 13px 25px;
      font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayNine};

      transition: all 0.3s;

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

    textarea {
      height: 115px;
    }

    button {
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
    }

    .field-error {
      color: ${props => props.theme.colors.red};
      font-size: 14px;
      padding-top: 5px;
    }
  }

  ${down('xs')} {
    padding-top: 3rem;

    flex-direction: column;

    > div {
      text-align: center;

      ul {
        justify-content: center;
      }
    }

    form {
      margin-top: 2rem;
      max-width: 100%;
    }
  }
`

export const Items = styled.ul`
  list-style: none;
  position: relative;
  z-index: 1;

  + ul {
    margin-top: 2rem;
  }
`

export const Item = styled.li`
  width: 100%;

  ${up('xs')} {
    p {
      font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`

export const Network = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    margin-right: 7px;
  }

  a {
    background-color: ${props => props.theme.colors.lightBlue2};
    font-size: calc(15px + (24 - 15) * ((100vw - 320px) / (1920 - 320)));
    text-transform: none;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    width: 30px;
    height: 30px;
    margin-top: 0;
    border-radius: 50%;

    transition: background-color 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${props => props.theme.colors.darkBlue};
    }
  }
`
