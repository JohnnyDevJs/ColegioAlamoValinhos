import styled from 'styled-components'
import { down } from 'styled-breakpoints'

interface CollapseProps {
  cardColor: string
}

export const Card = styled.div`
  background: ${(props: CollapseProps) => props.cardColor};

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  .arrow-down {
    svg {
      transition: all 0.4s;
      transform: rotate(0);
    }
  }

  &.open {
    .arrow-down {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  ${down('xs')} {
    margin-bottom: 2rem;
  }
`

export const CardHeader = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  h3 {
    margin: 0.8vw 0;
  }

  .arrow-down {
    height: 23px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const CardBody = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-height: 0;
  overflow: hidden;

  transition: all 0.8s ease-out;
  visibility: hidden;

  ul {
    opacity: 0;
    transition: all 0.3s ease-out;

    li {
      font-size: calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayThree};
      font-weight: 325;

      + li {
        padding-top: 0.5em;
      }

      display: flex;

      svg {
        flex: none;
        margin-right: 2px;
      }
    }
  }

  &.active {
    max-height: 400px;
    visibility: visible;
    opacity: 1;
    //padding-top: 1vw;

    ul {
      opacity: 1;
    }
  }
`
