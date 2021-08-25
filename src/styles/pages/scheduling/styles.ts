import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const SchedulingContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 4%;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
  padding-bottom: calc(16px + (96 - 16) * ((100vw - 320px) / (1920 - 320)));
  p {
    text-align: center;
  }

  ${down('sm')} {
    padding-top: 22%;

    p {
      padding-bottom: 5%;
    }
  }
`
export const Content = styled.div`
  height: 100%;
  .calendly-inline-widget {
    width: 100%;
    height: 100vh;
  }
`
