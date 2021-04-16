import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

import { ContainerProps } from '.'

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1320px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;

  ${props =>
    props.column
      ? css`
          flex-direction: column;
        `
      : ''}

  ${props =>
    props.spaceBetween
      ? css`
          justify-content: space-between;
        `
      : ''}

  ${props =>
    props.flexEnd
      ? css`
          justify-content: flex-end;
        `
      : ''}

  ${props =>
    props.alignIntems
      ? css`
          align-items: center;
        `
      : ''}

  ${props =>
    props.alignIntemsStart
      ? css`
          align-items: flex-start;
        `
      : ''}

  ${props =>
    props.flexWrap
      ? css`
          flex-wrap: wrap;
        `
      : ''}

  ${down('sm')} {
    ${props =>
      props.columnMb
        ? css`
            flex-direction: column;
          `
        : ''}

    ${props =>
      props.centerMB
        ? css`
            justify-content: center;
          `
        : ''}
  }
`
