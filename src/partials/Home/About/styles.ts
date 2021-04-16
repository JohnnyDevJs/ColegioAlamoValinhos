import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const AboutContainer = styled.section`
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    top: 45%;
    position: absolute;
  }

  .alice-carousel__prev-btn {
    text-align: left;
  }

  .alice-carousel__next-btn {
    text-align: right;
    right: 0;
  }

  .alice-carousel__next-btn-item span,
  .alice-carousel__prev-btn-item span {
    &:after {
      content: '';
      border: solid ${props => props.theme.colors.blue};
      border-width: 0 5.5px 5.5px 0;
      display: inline-block;
      padding: 8px;
      border-radius: 2px;

      transition: all 0.3s;
    }

    &:hover {
      &:after {
        border-color: ${props => props.theme.colors.green};
      }
    }
  }

  .alice-carousel__next-btn-item span {
    &:after {
      content: '';
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  .alice-carousel__prev-btn-item span {
    &:after {
      content: '';
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }

  .alice-carousel__prev-btn-item.__inactive,
  .alice-carousel__next-btn-item.__inactive {
    display: none;
  }

  .alice-carousel__dots {
    .alice-carousel__dots-item {
      width: 19px;
      height: 19px;
      background-color: ${props => props.theme.colors.grayFive};

      &.__active {
        background-color: ${props => props.theme.colors.blue};
      }
    }
  }
`

export const CarouselContent = styled.div`
  padding-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${down('sm')} {
    flex-direction: column;
  }

  &.one {
    p {
      font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`
export const Content = styled.div`
  margin-left: 6vw;

  p {
    max-width: 468px;
    width: 100%;
  }

  h3 {
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 12px;
  }

  ${down('sm')} {
    margin-top: 2rem;
    margin-left: 0;
    text-align: center;

    h5 {
      justify-content: center;
    }
  }
`
