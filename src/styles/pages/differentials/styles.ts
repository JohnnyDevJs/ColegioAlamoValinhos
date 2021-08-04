import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

import Arrow from '../../../../public/assets/arrow-hero-differentials.png'
import arrowDownSelect from '../../../../public/assets/arrow-down-select.png'

export const Hero = styled.section`
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
  position: relative;
  padding-top: 2rem;
  padding-bottom: 7rem;
  overflow: hidden;

  &:after {
    content: '';
    background: url(${Arrow}) no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12em;
  }

  svg {
    position: absolute;
    bottom: -3em;
    width: 100%;
    height: 100%;
  }

  p {
    font-size: calc(20px + (34 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(28px + (40 - 28) * ((100vw - 320px) / (1920 - 320)));
    margin-top: 0;
    color: ${props => props.theme.colors.grayThree};
    font-weight: 500;
  }

  .content_hero_differentials,
  .image_hero_differentials {
    z-index: 1;
  }

  .image_hero_differentials {
    margin-top: 2em;
    width: 50%;

    display: flex;
    justify-content: flex-end;
  }

  ${down('sm')} {
    padding-top: 7rem;
    padding-bottom: 4rem;
    height: auto;

    svg {
      bottom: -10em;
    }

    &:after {
      height: 18vw;
    }

    .content_hero_differentials {
      margin-bottom: 2rem;
    }

    .image_hero_differentials {
      width: 100%;
      margin-top: 0;
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

  width: 100%;

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

  .cambridge {
    display: flex;
    align-items: center;
    margin-top: 2.5rem;

    svg {
      width: 36px;
      height: 36px;
      position: relative;
      bottom: 0;
    }

    p {
      font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
      font-weight: 300;
      margin: 0 5px;
    }
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
export const ArrowHero = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`
export const BilingueContainer = styled.section`
  margin-top: 4rem;

  p {
    font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
    text-align: center;

    &:first-child {
      margin-top: 2rem;
    }

    &:nth-child(2) {
      margin-top: 30px;
      margin-bottom: 4vw;
    }
  }

  img {
    max-width: 100%;
  }
`
export const BilingualBoxes = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-evenly;

  > div {
    margin: 0 20px;
  }

  ${down('sm')} {
    flex-direction: column;

    div + div {
      margin-top: 3rem;
    }
  }
`

export const InvestmentsContainer = styled.section`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    margin-top: 3rem;
    max-width: 680px;
    width: 100%;

    li {
      display: flex;

      font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
      line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.grayThree};
      font-weight: 300;

      + li {
        margin-top: 2rem;
      }

      svg {
        margin-right: 10px;
        flex: none;
      }
    }
  }

  ${down('sm')} {
    margin: 3rem auto;
    ul {
      margin-top: 2rem;
      li + li {
        margin-top: 2rem !important;
      }
    }
  }
`

export const BilingualBoxe = styled.div`
  background: ${props => props.theme.colors.grayFour};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 25px;
  text-align: center;
  height: auto;

  span {
    background: ${props => props.theme.colors.lightGreen};
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    color: ${props => props.theme.colors.white};
    font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 35px;
    padding-right: 35px;
  }

  p {
    font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
    font-weight: 500;
  }

  ul {
    list-style: none;
    font-size: calc(19px + (24 - 19) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.lightGreen};
    font-weight: 500;
    margin-top: 1.5rem;
    text-align: left;
  }

  ${down('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: -1.5rem;
    }
  }
`

export const Methodology = styled.section`
  margin-top: 4rem;

  p {
    font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
    text-align: center;

    &:first-child {
      margin-top: 2vw;
    }

    &:nth-child(2) {
      margin-top: 30px;
      margin-bottom: 4vw;

      display: flex;
      justify-content: center;
    }
  }

  img {
    max-width: 100%;
  }
`

export const ItemsMethodology = styled.div`
  display: flex;
  justify-content: space-between;

  .box {
    width: 100%;
    max-width: 31em;

    h2 {
      color: ${props => props.theme.colors.green};
      font-size: calc(25px + (40 - 25) * ((100vw - 320px) / (1920 - 320)));
      font-weight: bold;
    }

    ul {
      list-style: none;
      margin-top: 2rem;

      li {
        display: flex;
        font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (1920 - 320)));
        line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
        color: ${props => props.theme.colors.grayThree};

        + li {
          margin-top: 1em;
        }

        svg {
          flex: none;
        }
      }
    }
  }

  ${down('sm')} {
    flex-direction: column;

    ul {
      margin-top: 1rem;
    }

    .box {
      width: 100%;
      max-width: 100%;

      &:last-child {
        margin-top: 2rem;
      }
    }
  }
`

export const Intelligence = styled.section`
  margin-top: 4rem;

  p {
    font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
    text-align: center;
    margin-top: 2vw;
  }

  h2 {
    text-align: center;
  }
`
export const Videos = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  .embed-responsive {
    position: relative;
    display: block;
    width: 48%;
    padding: 0;
    margin: calc(15px + (50 - 15) * ((100vw - 576px) / (1920 - 576))) 0;
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

  ${down('sm')} {
    flex-direction: column;
    .embed-responsive {
      width: 100%;
    }
  }

  ${down('sm')} {
    margin-bottom: 2rem;
  }
`
export const Description = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  svg {
    &:first-child {
      margin: -1px 0;
    }
  }
`

export const BackgroundColor = styled.div`
  background-color: ${props => props.theme.colors.blue};

  p {
    font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.white};
    text-align: center;
    width: 100%;
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
  }
`

export const Benefits = styled.section`
  margin-top: 4rem;
  .items {
    display: grid;
    grid-template-columns: 398px 398px;
    grid-gap: 3vw;

    margin: 3rem auto 0;

    .open .arrow-down {
      margin-bottom: 10px;
    }

    h3 {
      text-align: center;
    }

    img {
      height: 139px !important;
    }

    ${down('md')} {
      grid-template-columns: 48% 48%;
      grid-gap: 4%;
    }

    ${down('sm')} {
      img {
        height: calc(89px + (130 - 89) * ((100vw - 320px) / (768 - 320)));
      }
    }

    ${down('xs')} {
      display: flex;
      flex-direction: column;

      .arrow-down {
        svg {
          height: 33px;
        }
      }

      img {
        height: 90px !important;
      }
    }
  }

  .card-benefits {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`

export const ResultsContainer = styled.section`
  margin: 5rem 0 5rem 0;

  ${down('sm')} {
    margin: 2rem 0 3rem 0;
  }
`

export const Results = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  grid-gap: 4%;

  ${down('sm')} {
    grid-template-columns: 48% 48%;
    margin-top: 2rem;
  }

  ${down('xs')} {
    display: flex;
    flex-direction: column;
  }
`

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  .circle {
    width: 146px;
    height: 146px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.lightGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1vw;

    h1,
    span {
      color: ${props => props.theme.colors.white};
    }

    H1 {
      font-size: calc(35px + (60 - 35) * ((100vw - 320px) / (1920 - 320)));
    }
    span {
      font-size: calc(25px + (40 - 25) * ((100vw - 320px) / (1920 - 320)));
    }
  }

  p {
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(27px + (29 - 27) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
    text-align: center;
    width: 100%;
  }

  ${down('sm')} {
    .circle {
      width: calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));
      height: calc(100px + (146 - 100) * ((100vw - 320px) / (768 - 320)));
    }

    p {
      margin-bottom: 1.5rem;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
`

export const MindMakersContainer = styled.section`
  margin-top: 4rem;
  .description-mind-makers {
    width: 100%;
    p {
      font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
      line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.white};
      text-align: center;
      width: 100%;
      margin-top: 2.4rem;
      margin-bottom: 1.6rem;
    }
  }

  ul {
    margin-top: 1rem;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.white};
      text-transform: uppercase;
      font-weight: 300;

      display: flex;
      flex-direction: column;

      img {
        height: calc(60px + (78 - 60) * ((100vw - 320px) / (1920 - 320)));
      }

      p {
        margin-top: 1rem;
        font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
      }
    }
  }

  svg {
    display: flex;

    &:first-child {
      margin: -1px 0;
    }
  }

  ${down('sm')} {
    ul {
      flex-wrap: wrap;

      li {
        width: 50% !important;
        text-align: center;

        + li {
          margin-top: 1rem;
        }
      }
    }
  }

  ${down('xs')} {
    ul {
      li {
        width: 100% !important;
      }
    }
  }
`

export const BgMindColor = styled.div`
  background-color: ${props => props.theme.colors.blue};
  padding-bottom: 2rem;

  svg {
    &:nth-child(0) {
      border: 1px solid aqua;
    }
  }
`

export const GalleryContainer = styled.section`
  margin: 4rem auto;

  .embed-responsive {
    position: relative;
    display: block;
    width: 80%;
    padding: 0;
    overflow: hidden;
    display: none;
    transition: all 0.3s;
    margin: auto;

    &.active {
      display: block;
      position: relative;
    }

    &:before {
      content: '';
      display: block;
      padding-top: 56.25%;
    }
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

  .slick-slider {
    &:first-child {
      width: 80%;
      margin: auto;

      .slick-slide {
        border-radius: calc(
          25px + (53 - 25) * ((100vw - 320px) / (1920 - 320))
        );
      }
    }

    &:last-child {
      width: 100%;
      overflow: hidden;
      padding-top: 1.5rem;

      .slick-list {
        margin: 0 -10px;
        .slick-track {
          .slick-slide {
            padding-top: 4.5rem;
            position: relative;

            > div {
              margin: 0 10px;

              img {
                border-radius: calc(
                  16px + (53 - 16) * ((100vw - 320px) / (1920 - 320))
                );
              }
            }

            img {
              cursor: pointer;
              outline: none;
              object-fit: cover;
              width: 100%;
              height: 15vw !important;
            }

            &:before {
              content: '';
              position: absolute;
              width: 100%;
              top: 7%;
              border-top: 1px solid ${props => props.theme.colors.lightBlue2};
            }
          }

          .slick-current {
            &:after {
              transition: all 0.9s;
              content: '';
              background: url(${arrowDownSelect}) no-repeat center;
              background-size: cover;
              width: calc(27px + (40 - 27) * ((100vw - 320px) / (1920 - 320)));
              height: calc(37px + (57 - 37) * ((100vw - 320px) / (1920 - 320)));

              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              margin: auto;
            }
          }
        }
      }
    }
  }

  ${down('sm')} {
    margin: 3rem auto;
    .slick-list {
      .slick-track {
        .slick-slide {
          &:before {
            top: 11% !important;
          }
        }
      }
    }
  }

  ${down('xs')} {
    .embed-responsive {
      width: 100%;
    }
    .slick-slider {
      &:last-child {
        padding-top: 0.5rem;

        .slick-list {
          .slick-track {
            .slick-slide {
              padding-top: 3.5rem !important;
            }
          }
        }
      }
    }
  }
`

export const IconsContainer = styled.section`
  margin: 5rem 0 4rem;

  ${down('sm')} {
    margin: 2rem 0 4rem;
  }
`
export const Items = styled.div`
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

export const Items2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin-top: 3rem;

  .methods_effects {
    width: 100%;

    &:nth-child(n + 2) {
      margin-top: 2em;
    }

    display: flex;
  }

  ${down('sm')} {
    .methods_effects {
      width: 100%;
      justify-content: center;

      + .methods_effects {
        margin-top: 2em;
      }
    }
  }
`

export const Item2 = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
  }

  ${down('sm')} {
    flex-direction: column;
  }
`

export const Icon2 = styled.div`
  width: 6.1875em;
  height: 6.1875em;
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

  p {
    font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
    line-height: calc(28px + (31 - 28) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.grayThree};
  }

  ${down('sm')} {
    align-items: center;
    margin-top: 5px;

    p {
      text-align: center;
    }
  }
`
export const UniversityContainer = styled.section`
  margin: 7rem 0 7rem;

  .logos {
    width: 100%;

    display: flex;
    justify-content: center;

    > div {
      margin: 0 30px;
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  ${down('sm')} {
    margin: 4rem 0 5rem;

    .logos {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        max-width: 200px;
      }

      div + div {
        margin-top: 2.5rem;
      }
    }
  }
`
