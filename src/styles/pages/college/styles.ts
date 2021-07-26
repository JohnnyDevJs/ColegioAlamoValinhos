import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const Food = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);

  ${down('sm')} {
    padding-bottom: 3rem;
  }
`

export const ContentFood = styled.div`
  width: 70%;
  h2 {
    align-items: flex-start;
  }

  p {
    font-size: calc(25px + (34 - 25) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin: 0.5rem auto 2.2rem;
    color: ${props => props.theme.colors.grayThree};
    font-weight: 500;
  }

  a {
    background-color: #bac529;
    border-radius: 61px;
    color: #ffffff;
    font-weight: 500;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    font-size: 24px;
    padding: 15px 45px;
    text-align: center;

    &:hover {
      opacity: 0.6;
    }
  }

  ul {
    list-style: none;
    margin-top: 3rem;
    margin-bottom: 3rem;

    li {
      font-size: calc(20px + (22 - 20) * ((100vw - 320px) / (1920 - 320)));
      line-height: calc(30px + (30 - 30) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayThree};

      display: flex;

      &:before {
        content: '';
        display: inline-block;
        transform: rotate(45deg);
        height: 24px;
        width: 12px;
        border-bottom: 5px solid ${props => props.theme.colors.lightGreen};
        border-right: 5px solid ${props => props.theme.colors.lightGreen};
        margin-right: 18px;
      }

      strong {
        display: contents !important;
      }

      + li {
        margin-top: 1.8rem;
      }
    }
  }

  ${down('sm')} {
    margin-bottom: 2rem;
    width: 100%;

    h2,
    p {
      text-align: center;
      display: block;
    }

    a {
      width: 100%;
    }

    .align-button {
      text-align: center;
    }
  }
`
export const FoodImage = styled.div``
