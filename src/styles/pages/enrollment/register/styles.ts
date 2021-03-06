import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const RegisterSuccessContainer = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);

  p {
    margin: 1rem auto 1.5rem;
  }

  .embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    max-width: 800px;
    padding: 0;

    overflow: hidden;

    &:before {
      content: '';
      display: block;
      padding-top: 56.25%;
    }

    iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: calc(25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)));
    }
  }

  button {
    background-color: ${props => props.theme.colors.lightGreen};
    color: ${props => props.theme.colors.white};
    border: none;
    border-radius: 61px;
    padding: 13px 70px;
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    cursor: pointer;
    margin: 1.8rem 0;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.green};
    }

    &:focus,
    &:active {
      outline: none;
    }
  }

  ${down('sm')} {
    padding-top: 7rem;
    padding-bottom: 1rem;

    p {
      text-align: center;
    }
  }
`
