import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import BackgroudCurved from '../../assets/background-curve.png'

export const Wrapper = styled.div`
  position: relative;
  section {
    svg {
      margin-top: -2rem;
    }

    ${down('sm')} {
      svg {
        width: 100%;
        order: 1;
      }
    }
  }
`

export const Header = styled.header`
  width: 100%;
  height: calc(350px + (454 - 350) * ((100vw - 320px) / (1920 - 768)));
  padding-left: 15px;
  padding-right: 15px;

  background: url(${BackgroudCurved}) no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin-top: 2vw;
    line-height: 30px;
  }

  ${down('sm')} {
    svg {
      width: calc(150px + (200 - 150) * ((100vw - 320px) / (768 - 320)));
    }

    text-align: center;

    h3 {
      margin-top: 0;
    }
  }
`

export const Unit = styled.a`
  background: ${props => props.theme.colors.grayOne};
  width: calc(338px + (338 - 338) * ((100vw - 768px) / (1920 - 768)));
  height: 186px;
  border-radius: calc(45px + (62 - 45) * ((100vw - 320px) / (1920 - 320)));
  text-align: center;
  line-height: 38px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;
  transform: translateY(0);

  &:hover {
    background-color: ${props => props.theme.colors.green};
    transform: translateY(-0.5rem);
  }

  ${down('sm')} {
    width: 100%;
    height: 130px;

    &:last-child {
      margin-top: 2rem;
      margin-bottom: calc(
        -37px + (70 - (-37)) * ((100vw - 320px) / (768 - 320))
      );
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  margin-top: -8rem;

  display: flex;

  svg {
    width: 100%;
  }

  ${down('sm')} {
    margin-top: calc(
      -227px + (-130 - (-227)) * ((100vw - 320px) / (768 - 320))
    );
  }
`
