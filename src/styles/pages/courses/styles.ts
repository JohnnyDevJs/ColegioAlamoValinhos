import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

import VectorVideo from '../../../../public/assets/background-video.png'
import VectorVideoMb from '../../../../public/assets/background-video-mb.png'
import TitleBorder from '../../../../public/assets/title-border.png'

export const Hero = styled.section`
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
  position: relative;
  padding-top: 2rem;
  padding-bottom: 7rem;
  overflow: hidden;

  svg {
    position: absolute;
    bottom: -3em;
    width: 100%;
    height: 100%;
  }

  .content_hero_courses,
  .image_hero_courses {
    z-index: 1;
  }

  ${down('sm')} {
    padding-top: 7rem;
    padding-bottom: 4rem;
    height: auto;

    &.hero-ec {
      padding-bottom: 0;
    }

    svg {
      bottom: -10em;
    }

    .content_hero_courses {
      margin-bottom: 2rem;
    }
  }

  ${up('md')} {
    svg {
      bottom: calc(-95px + (-19 - (-95)) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`

export const ContentHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 12;

  width: 35vw;

  a {
    margin-top: 2rem;
  }

  p {
    margin-top: 0.7rem;
  }

  ${down('sm')} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

export const HeroContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${down('sm')} {
    flex-direction: column;
  }
`
export const Methods = styled.section`
  h2 {
    margin-bottom: 2.2rem;
  }

  .methods_text_one p {
    line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
    font-size: calc(21px + (26 - 22) * ((100vw - 320px) / (1920 - 320)));
    text-align: center;
    color: ${props => props.theme.colors.grayThree};
  }

  p.methods_paragraph {
    font-weight: 400;
    text-align: center;

    &:last-child {
      margin-top: 20px;
    }
  }

  ${down('sm')} {
    h2 {
      margin-bottom: 0.1em;
    }

    p.methods_text_one {
      margin-top: 1rem;
    }
  }
`

export const Items = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .methods_effects {
    width: 50%;

    &:nth-child(n + 3) {
      margin-top: 4em;
    }

    display: flex;
  }

  ${down('sm')} {
    margin-top: 2rem;

    .methods_effects {
      width: 100%;
      justify-content: center;

      + .methods_effects {
        margin-top: 2em;
      }
    }
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
  }

  ${down('sm')} {
    flex-direction: column;
  }
`

export const Icon = styled.div`
  width: 9.125em;
  height: 9.125em;
  background-color: ${props => props.theme.colors.lightGreen};
  border-radius: 50%;

  margin-right: 1.7vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;

  ${down('sm')} {
    width: calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));
    height: calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));

    img {
      width: calc(55px + (77 - 55) * ((100vw - 320px) / (768 - 320)));
      height: calc(55px + (77 - 55) * ((100vw - 320px) / (768 - 320)));
    }
  }
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${down('sm')} {
    align-items: center;
    margin-top: 5px;
  }
`
export const Videos = styled.section`
  margin-top: 5em;

  ${down('sm')} {
    margin-top: 2.5em;
  }

  h2 {
    text-align: center;
  }
`

export const BackgroundVideo = styled.div`
  background: url(${VectorVideo}) no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .alice-carousel {
    margin: 0;

    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      top: 45%;
      position: absolute;
    }

    .alice-carousel__prev-btn {
      text-align: left;
      left: 5vw;
    }

    .alice-carousel__next-btn {
      text-align: right;
      right: 5vw;
    }

    .alice-carousel__next-btn-item span,
    .alice-carousel__prev-btn-item span {
      &:after {
        content: '';
        border: solid ${props => props.theme.colors.white};
        border-width: 0 5.5px 5.5px 0;
        display: inline-block;
        padding: calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));
        border-radius: 2px;

        transition: all 0.3s;
      }

      &:hover {
        &:after {
          border-color: ${props => props.theme.colors.lightGreen};
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
      margin: 0;

      .alice-carousel__dots-item {
        width: calc(12px + (19 - 12) * ((100vw - 320px) / (1920 - 320)));
        height: calc(12px + (19 - 12) * ((100vw - 320px) / (1920 - 320)));
        background-color: ${props => props.theme.colors.white};

        &.__active {
          background-color: ${props => props.theme.colors.lightGreen};
        }
      }
    }
  }

  .embed-responsive {
    position: relative;
    display: block;
    width: 70%;
    padding: 0;
    margin: calc(15px + (50 - 15) * ((100vw - 576px) / (1920 - 576))) auto;
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

  ${up('sm')} {
    height: calc(370px + (900 - 370) * ((100vw - 576px) / (1920 - 576)));
  }

  ${down('sm')} {
    background: url(${VectorVideoMb});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    height: calc(422px + (790 - 422) * ((100vw - 320px) / (576 - 320)));

    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      top: 30% !important;
    }
  }
`
export const Registration = styled.section`
  margin: 5em 0;

  .d-none {
    display: none;
  }

  ${down('sm')} {
    margin: 3em 0;
  }
`

export const Box = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 2em 5em;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 25px;
    text-align: center;
  }

  ${down('sm')} {
    padding: 25px 25px;
  }
`

export const Border = styled.span`
  mask-image: url(${TitleBorder});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${props => props.theme.colors.blue};

  width: calc(150px + (222 - 150) * ((100vw - 320px) / (1920 - 320)));
  height: 7px;
  margin: 1em auto;

  display: flex;
`

export const Items2 = styled.div`
  display: grid;
  grid-gap: 3em;
  margin: 4em auto 0;

  ${up('lg')} {
    grid-template-columns: 258px 258px 258px;
  }

  ${down('lg')} {
    grid-template-columns: 258px 258px;
  }

  ${down('md')} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  ${down('sm')} {
    margin: 1em auto 0;
  }
`

export const Item2 = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  height: 258px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    padding-bottom: 1.2em !important;
  }

  p {
    font-weight: bold;
  }

  ${down('md')} {
    width: calc(110px + (146 - 100) * ((100vw - 320px) / (768 - 320)));
    height: calc(110px + (146 - 100) * ((100vw - 320px) / (768 - 320)));

    img {
      width: calc(70px + (77 - 55) * ((100vw - 320px) / (768 - 320)));
      height: calc(70px + (77 - 55) * ((100vw - 320px) / (768 - 320)));
    }
  }
`
export const Gallery = styled.section`
  margin-top: 5em;

  ${down('sm')} {
    margin-top: 2.5em;
  }

  h2 {
    text-align: center;
  }
`
export const BackgroundGallery = styled.div`
  background: url(${VectorVideo}) no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .gallery_featured {
    width: 68%;
    margin-top: calc(15px + (50 - 15) * ((100vw - 576px) / (1920 - 576)));

    img {
      width: 57vw !important;
      border-radius: calc(25px + (53 - 25) * ((100vw - 320px) / (1920 - 320)));
    }

    .slick-next,
    .slick-prev {
      &:before {
        border-width: 0 5.5px 5.5px 0;
        padding: calc(5px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));
      }

      &:hover {
        &:before {
          border-width: 0 5.5px 5.5px 0;
        }
      }
    }

    .slick-prev {
      left: -5vw;
    }

    .slick-next {
      right: -5vw;
    }
  }

  .gallery_thumbnails {
    margin-top: 1em;
    width: 57%;
    cursor: pointer;

    .slick-current {
      position: relative;
      display: flex !important;

      &:before {
        content: '';
        position: absolute;
        background: rgba(61, 132, 60, 0.5);

        width: 100%;
        height: 100%;
        z-index: 1;
      }

      div {
        display: flex !important;
      }
    }

    .slick-next,
    .slick-prev {
      &:before {
        border-width: 0 4.5px 4.5px 0;
        padding: calc(2px + (8 - 5) * ((100vw - 320px) / (1920 - 320)));
      }

      &:hover {
        &:before {
          border-width: 0 4.5px 4.5px 0;
        }
      }
    }
  }

  .slick-dots {
    li {
      margin: 0 calc(0px + (5 - 0) * ((100vw - 320px) / (1920 - 320)));
      button {
        &:before {
          opacity: 1;
          font-size: calc(8px + (19 - 8) * ((100vw - 320px) / (1920 - 320)));
          color: ${props => props.theme.colors.white};
        }
      }
    }

    li.slick-active {
      button {
        &:before {
          color: ${props => props.theme.colors.lightGreen};
        }
      }
    }
  }

  .slick-prev,
  .slick-next {
    &:before {
      content: '';
      border: solid ${props => props.theme.colors.white};
      display: inline-block;
      border-radius: 2px;
      transition: all 0.3s;
      opacity: 1;
    }

    &:hover {
      &:before {
        border: solid ${props => props.theme.colors.lightGreen};
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

  ${up('sm')} {
    height: calc(410px + (900 - 410) * ((100vw - 576px) / (1920 - 576)));
  }

  ${down('sm')} {
    background: url(${VectorVideoMb});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    height: calc(422px + (790 - 422) * ((100vw - 320px) / (576 - 320)));

    .galllery_featured {
      width: 100%;
    }
  }

  ${down('md')} {
    .gallery_featured {
      img {
        width: 100% !important;
      }
    }
  }
`
