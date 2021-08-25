import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

import ArrowSelect from '../../../../public/assets/arrow-select.png'

export const Hero = styled.section`
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 50%);
  position: relative;
  padding-top: 9rem;
  padding-bottom: 5rem;
  overflow: hidden;

  height: auto;

  > svg {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(137px + (690 - 137) * ((100vw - 576px) / (1920 - 576)));
    height: auto;
  }

  p {
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    margin-top: 1rem;

    li {
      font-size: calc(22px + (26 - 22) * ((100vw - 320px) / (1920 - 320)));
      line-height: calc(29px + (34 - 29) * ((100vw - 320px) / (1920 - 320)));
      margin-top: 0;
      color: ${props => props.theme.colors.grayThree};
      font-weight: 500;

      svg {
        position: relative;
        margin-right: 10px;
      }
    }
  }

  .container-enrollment {
    height: 100%;
    text-align: center;
  }

  form {
    max-width: 570px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin: 4rem auto 0;

    input,
    select {
      width: 100%;

      background: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.grayThree};
      border-radius: 16px;
      padding: calc(16px + (19 - 16) * ((100vw - 320px) / (1920 - 320))) 25px;
      font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayNine};

      transition: all 0.3s;

      &::placeholder {
        font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      }

      &:focus,
      &:active {
        outline: none;
        border: 1px solid ${props => props.theme.colors.lightGreen};
      }
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url(${ArrowSelect}) no-repeat center right 20px;
      background-size: calc(
        14px + (20 - 14) * ((100vw - 320px) / (1920 - 320))
      ) !important;
    }

    > div {
      margin-top: 1.3rem;
    }

    button {
      background-color: ${props => props.theme.colors.lightGreen};
      border: 0;
      width: 100%;
      color: ${props => props.theme.colors.white};
      font-size: calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)));
      padding: calc(12px + (15 - 12) * ((100vw - 320px) / (1920 - 320)));
      border-radius: 16px;
      cursor: pointer;

      transition: background-color 0.3s;

      &:hover {
        background-color: ${props => props.theme.colors.green};
      }

      &:focus,
      &:active {
        outline: none;
      }
    }

    #click_form {
      display: none;
    }

    .field-error {
      color: ${props => props.theme.colors.red};
      padding-top: 3px;
      font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
    }

    label {
      font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayNine};
      font-weight: 500;
      margin-bottom: 10px;
      display: block;
    }
  }

  .loading-box,
  .error-box {
    display: none;
  }

  ${down('sm')} {
    padding-top: 8rem;
    padding-bottom: 3rem;
    height: auto;
  }

  ${down('xs')} {
    > svg {
      width: 137px;
    }

    form {
      margin: 2rem auto 0;
    }
  }
`
