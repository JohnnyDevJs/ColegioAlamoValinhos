import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const GalleryContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 4rem;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
`
export const Tabs = styled.div`
  width: 100%;
  padding-top: 4rem;

  ${down('sm')} {
    padding-top: 2rem;
  }
`

export const TabMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  border-bottom: 1px solid ${props => props.theme.colors.grayEleven};

  width: 100%;
  margin-bottom: 4rem;

  li {
    font-size: calc(20px + (32 - 20) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
    font-weight: bold;
    cursor: pointer;
    position: relative;
    width: 20%;
    padding: 10px;
    text-align: center;

    display: flex;
    justify-content: center;
    position: relative;

    &.active {
      &:after {
        background-color: ${props => props.theme.colors.lightGreen};
      }
    }

    &:after {
      content: '';
      width: 50%;
      height: calc(5px + (7 - 5) * ((100vw - 320px) / (1920 - 320)));
      background-color: transparent;
      position: absolute;
      bottom: 0;
      margin: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.3s;
    }
  }

  ${down('sm')} {
    margin-bottom: 2.5rem;
  }

  ${down('xs')} {
    li {
      width: 100%;
    }
  }
`

export const TabContent = styled.div`
  width: 100%;
  max-width: 930px;
  margin: auto;
  display: none;

  &.show {
    display: block;
  }
`

export const Thumbnails = styled.ul`
  display: flex;
  width: 100%;

  .slick-slider {
    width: 100%;

    .slick-list {
      margin: 0 -10px;
    }

    .slick-track {
      .slick-slide {
        position: relative;

        > div {
          margin: 0 calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
        }
      }
    }

    .slick-next,
    .slick-prev {
      &:before {
        border-width: 0 5.5px 5.5px 0;
        padding: calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));
      }
    }

    .slick-prev {
      left: -5vw;
    }

    .slick-next {
      right: -5vw;
    }

    .slick-prev,
    .slick-next {
      z-index: 12;

      &:before {
        content: '';
        display: inline-block;
        border-right: calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320)))
          solid ${props => props.theme.colors.lightGreen};
        border-bottom: calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320)))
          solid ${props => props.theme.colors.lightGreen};
        width: 10px;
        height: 10px;

        transition: all 0.3s;
      }

      &:hover {
        &:before {
          border-color: ${props => props.theme.colors.lightGreen};
        }
      }
    }

    .slick-prev {
      &:before {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }
    }

    .slick-next {
      &:before {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
  }

  li {
    position: relative;
    cursor: pointer;
    display: flex !important;

    &:focus,
    &:active {
      outline: none;
    }

    .overlay {
      background-color: rgba(48, 95, 164, 0.7);
      color: ${props => props.theme.colors.white};
      font-weight: 500;
      position: absolute;
      border-radius: calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320)));
      top: 0;

      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      visibility: hidden;

      transition: all 0.3s;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 320)));
    }
  }

  .active {
    .overlay {
      opacity: 1;
      visibility: visible;
    }
  }

  ${down('lg')} {
    .slick-prev,
    .slick-next {
      top: 120%;
      margin: auto;
      left: 0;
      right: 0;
    }
  }
`

export const FeaturedImages = styled.div`
  display: none;
  margin-bottom: 2rem;

  img {
    outline: none;
  }

  &.open {
    display: flex;
  }

  .slick-slider {
    width: 100%;

    img {
      border-radius: calc(26px + (32 - 26) * ((100vw - 320px) / (1920 - 320)));
      height: auto;
    }

    .slick-next,
    .slick-prev {
      &:before {
        display: inline-block;
        border-right: 5px solid ${props => props.theme.colors.white};
        border-bottom: 5px solid ${props => props.theme.colors.white};
        width: 10px;
        height: 10px;
      }

      &:hover {
        &:before {
          border-width: 0 5.5px 5.5px 0;
        }
      }
    }

    .slick-prev {
      left: 5vw;
    }

    .slick-next {
      right: 5vw;
    }

    .slick-prev,
    .slick-next {
      z-index: 12;

      &:before {
        content: '';
        display: inline-block;
        border-right: calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320)))
          solid ${props => props.theme.colors.white};
        border-bottom: calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320)))
          solid ${props => props.theme.colors.white};
        width: calc(15px + (22 - 15) * ((100vw - 320px) / (1920 - 320)));
        height: calc(15px + (22 - 15) * ((100vw - 320px) / (1920 - 320)));

        transition: all 0.3s;
      }

      &:hover {
        &:before {
          border-color: ${props => props.theme.colors.lightGreen};
        }
      }
    }

    .slick-prev {
      &:before {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }
    }

    .slick-next {
      &:before {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }
  }

  ${down('md')} {
    margin-bottom: 1rem;
  }
`

export const FeaturedVideo = styled.div`
  display: none;
  margin-bottom: 2rem;

  &.open {
    display: flex;
  }

  .embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;

    overflow: hidden;

    &:before {
      content: '';
      display: block;
      padding-top: 56.25%;
    }

    iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: calc(25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`
