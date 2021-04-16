import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const NetworkContainer = styled.section`
  padding-top: 5rem;
  padding-bottom: calc(40px + (80 - 40) * ((100vw - 320px) / (1920 - 320)));

  background-color: ${props => props.theme.colors.graySix};

  .network_content {
    width: 43%;
  }

  ${down('lg')} {
    .network_content {
      width: 100%;
      margin-left: 20px;
    }
  }

  ${down('sm')} {
    .network_content {
      margin-left: 0;
    }
  }
`

export const Content = styled.div`
  text-align: center;

  h2 {
    font-weight: 500;
  }

  p {
    margin-top: 40px;
    margin-bottom: 35px;
  }

  ${down('sm')} {
    p {
      font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (768 - 320)));
      margin-top: calc(10px + (40 - 10) * ((100vw - 320px) / (768 - 320)));
    }
  }
`
export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 10px;
  }

  ${up('md')} {
    svg {
      width: calc(48px + (77 - 48) * ((100vw - 768px) / (1920 - 768)));
    }
  }

  ${down('sm')} {
    svg {
      width: calc(48px + (77 - 48) * ((100vw - 768px) / (1920 - 768)));
    }
  }
`
