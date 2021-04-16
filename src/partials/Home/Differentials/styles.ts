import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const DifferentialsContainer = styled.section`
  position: relative;
  background: rgb(249, 250, 253);
  background: linear-gradient(
    0deg,
    rgba(244, 244, 244, 1) 20%,
    rgba(249, 250, 253, 0) 50%
  );

  svg {
    width: 100%;
    height: 5.9vw;
    display: flex;
  }
`
export const BackgroundColor = styled.div`
  background-color: ${props => props.theme.colors.blue};
  padding-top: 2rem;
  border-radius: 0 0 90% 20% /30px 30px 30% 15%;

  ${down('md')} {
    border-radius: 0 0 90% 20% /30px 30px 22% 3%;
  }

  ${down('xs')} {
    border-radius: 0 0 90% 35% /30px 30px 4% 6%;
  }
`

export const DifferentialsContent = styled.div`
  padding-top: 3rem;

  display: flex;
  justify-content: space-between;

  .boxes {
    width: 100%;

    + .boxes {
      margin-left: 3vw;
    }
  }

  ${down('md')} {
    flex-wrap: wrap;
    justify-content: center;

    .boxes {
      width: 31%;

      &:nth-child(4) {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
  }

  ${down('sm')} {
    .boxes {
      width: 41%;

      &:nth-child(3) {
        margin-left: 0;
        margin-top: 2rem;
        margin-right: 3vw;
      }
    }
  }

  ${down('xs')} {
    .boxes {
      width: 100%;
      margin-left: 0 !important;

      &:nth-child(2) {
        margin-top: 2rem;
      }

      &:nth-child(3) {
        margin-right: 0;
      }
    }
  }
`

export const Differential = styled.a`
  width: 100%;

  text-align: center;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding-top: 35px;
  padding-bottom: 35px;

  transition: all 0.3s;

  button {
    background-color: ${props => props.theme.colors.lightGreen};
    border-radius: 61px;
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    border: 2px solid transparent;
    font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
    padding-left: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
    padding-right: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
    padding-top: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
    cursor: pointer;

    transition: all 0.3s;

    &:focus,
    &:active {
      outline: none;
    }
  }

  h4 {
    margin-bottom: 1.3rem;
    margin-top: 1rem;
  }

  svg {
    width: 82px;
    height: 82px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.grayOne};
    transform: translateY(-10px);

    button {
      background-color: ${props => props.theme.colors.white};
      border: 2px solid ${props => props.theme.colors.lightGreen};
      color: ${props => props.theme.colors.lightGreen};
    }
  }
`
export const AppContent = styled.div`
  margin-top: calc(48px + (80 - 48) * ((100vw - 320px) / (1920 - 320)));

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${down('sm')} {
    flex-direction: column;

    .boxes {
      &:last-child {
        top: 52px;
        position: relative;
      }
    }
  }
`

export const Content = styled.div`
  max-width: 699px;
  width: 100%;

  h3 {
    font-size: calc(25px + (38 - 25) * ((100vw - 320px) / (1920 - 320)));

    &:after {
      margin: 10px 0;
    }
  }

  p {
    margin-top: 2.5rem;
  }

  ${down('sm')} {
    text-align: center;

    p {
      font-size: 20px;
    }

    h3 {
      &:after {
        margin: 10px auto;
      }
    }
  }
`
export const BackgroundBottom = styled.div`
  width: 100%;

  display: flex;
`
