import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'
import { HeadingProps } from '.'

import TitleBorder from '../../../public/assets/title-border.png'
import DotBorder from '../../../public/assets/dot-border.png'

export const H1 = styled.h1<HeadingProps>`
  color: ${props => props.titleColor};
  font-size: ${props =>
    props.titleSize === 'large' &&
    'calc(30px + (64 - 30) * ((100vw - 320px) / (1920 - 320)));'};

  ${props =>
    props.titleBorder &&
    css`
      &:after {
        content: 'tem a borda';
      }
    `}
`

export const H2 = styled.h2<HeadingProps>`
  color: ${props => props.titleColor};
  font-size: ${props => props.titleSize === 'medium' && '48px'};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.titleBorder &&
    css`
      &:after {
        content: '';
        mask-image: url(${TitleBorder});
        mask-size: contain;
        mask-repeat: no-repeat;
        margin: 10px auto 0 auto;

        width: calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));
        height: 7px;

        display: flex;
      }
    `}

  ${props =>
    props.titleBorderColor === 'blue' &&
    css`
      &:after {
        content: '';
        background-color: ${props => props.theme.colors.blue};
      }
    `}

    ${props =>
    props.titleBorderColor === 'green' &&
    css`
      &:after {
        content: '';
        background-color: ${props => props.theme.colors.lightGreen};
      }
    `}

  ${down('lg')} {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
`

export const H3 = styled.h3<HeadingProps>`
  color: ${props => props.titleColor};
  font-size: ${props =>
    props.titleSize === 'small' && 'min(max(1.7rem, 4vw), 32px)'};

  ${props =>
    props.dotBorder &&
    css`
      &:before {
        content: '';
        background: url(${DotBorder}) no-repeat;
        background-size: contain;
        margin-right: 10px;

        width: 34px;
        height: 7px;

        display: flex;
      }
    `}

  ${props =>
    props.titleBorder &&
    css`
      &:after {
        content: '';
        mask-image: url(${TitleBorder});
        mask-size: contain;
        mask-repeat: no-repeat;
        margin: 10px auto 0 auto;

        width: calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));
        height: 7px;

        display: flex;
      }
    `}

    ${props =>
    props.titleBorderColor === 'blue' &&
    css`
      &:after {
        content: '';
        background-color: ${props => props.theme.colors.blue};
      }
    `}

    ${props =>
    props.titleBorderColor === 'green' &&
    css`
      &:after {
        content: '';
        background-color: ${props => props.theme.colors.lightGreen};
      }
    `}
`

export const H4 = styled.h4<HeadingProps>`
  color: ${props => props.titleColor};
  font-size: ${props =>
    props.titleSize === 'xsmall' && 'min(max(1.5rem, 4vw), 24px)'};

  ${props =>
    props.uppercase
      ? css`
          text-transform: uppercase;
        `
      : ''}
`

export const H5 = styled.h5<HeadingProps>`
  color: ${props => props.titleColor};
  font-size: ${props =>
    props.titleSize === 'xsmall2' &&
    'calc(22px + (28 - 22) * ((100vw - 320px) / (1920 - 320)));'};

  ${props =>
    props.uppercase
      ? css`
          text-transform: uppercase;
        `
      : ''}

  ${props =>
    props.dotBorder &&
    css`
      &:before {
        content: '';
        background: url(${DotBorder}) no-repeat;
        background-size: contain;
        margin-right: 10px;

        width: 34px;
        height: 7px;

        display: flex;
      }
    `}

  display: flex;
  align-items: center;
`
export const HeadingH2 = styled.div<HeadingProps>`
  h2 {
    color: ${props => props.titleColor};
    font-size: ${props =>
      props.titleSize === 'medium' &&
      'calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));'};
    position: relative;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${props =>
    props.titleBorder &&
    css`
      &:after {
        content: '';
        mask-image: url(${TitleBorder});
        mask-size: contain;
        mask-repeat: no-repeat;
        margin: 10px auto 0 auto;

        width: calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));
        height: 7px;

        display: flex;
      }
    `}

  ${props =>
    props.titleBorderColor === 'blue' &&
    css`
      &:after {
        content: '';
        background-color: ${props => props.theme.colors.blue};
      }
    `}

    ${props =>
    props.titleBorderColor === 'green' &&
    css`
      &:after {
        content: '';
        background-color: ${props => props.theme.colors.lightGreen};
      }
    `}

  ${down('lg')} {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
`
