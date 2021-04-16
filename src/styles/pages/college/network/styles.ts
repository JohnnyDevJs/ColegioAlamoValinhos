import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

export const HeroNetwork = styled.section`
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
  position: relative;
  overflow: hidden;
  z-index: -1;
  display: flex;

  .image_hero_network {
    width: 100%;
    position: absolute;
    right: 0;

    display: flex;
    justify-content: flex-end;
  }

  ${down('sm')} {
    padding-top: 7rem;

    height: auto;

    flex-direction: column;

    .image_hero_network {
      position: relative;
      margin-top: 2rem;
    }

    .desktop {
      display: none;
    }
    .mb {
      display: flex;
    }
  }

  ${up('sm')} {
    height: calc(588px + (675 - 588) * ((100vw - 768px) / (1920 - 768)));

    .image_hero_network {
      width: calc(600px + (807 - 600) * ((100vw - 768px) / (1920 - 768)));
    }

    .mb {
      display: none;
    }

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

  ${up('md')} {
    width: calc(260px + (500 - 260) * ((100vw - 768px) / (1920 - 768)));
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

export const ServicesContainer = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${props => props.theme.colors.grayFour};

  .search-services {
    margin: 4rem auto;
  }

  ${down('sm')} {
    padding-top: 3rem;
    padding-bottom: 2rem;

    .search-services {
      margin: 2rem auto;
    }
  }
`

export const Services = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-gap: 3.3%;

  > div {
    width: 100%;

    &:nth-child(n + 4) {
      margin-top: 2rem;
    }
  }

  .card-services {
    transition: all 0.3s;
    .title-service {
      padding-top: 12px;
      padding-bottom: 12px;
    }

    p {
      font-weight: 300;
      transition: all 0.3s;
    }

    &:hover {
      background-color: ${props => props.theme.colors.lightBlue};

      p {
        color: ${props => props.theme.colors.blue};
        font-weight: 500;
      }
    }
  }

  .card-services.open {
    transition: all 0.3s;
    background-color: ${props => props.theme.colors.lightBlue};

    p {
      color: ${props => props.theme.colors.blue};
      font-weight: 500;
    }
  }

  .card-services .active {
    overflow-y: scroll;
    max-height: 500px;
    padding-right: 0;

    &::-webkit-scrollbar {
      background-color: rgba(255, 255, 255, 0);
    }

    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border: 11px solid rgba(255, 255, 255, 0);
      background-clip: padding-box;
    }
    &::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.lightBlue};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.grayThree};
    }
  }

  .subtitle {
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    color: ${props => props.theme.colors.lightBlue3};
    font-weight: 500;
  }

  .service-lists {
    width: 100%;
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    .service {
      display: flex;
      flex-direction: column;
      align-items: flex-start !important;
      border-bottom: 1px solid ${props => props.theme.colors.lightBlue3};
      padding-bottom: 20px;

      &:last-child {
        border-bottom: 0;
      }

      + .service {
        margin-top: 20px;
      }

      .service-benefits {
        margin: 10px 0;
        background-color: ${props => props.theme.colors.lightGreen};
        color: ${props => props.theme.colors.white};
        padding: 5px 10px;
        font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
        border-radius: 7px;
      }

      .service-services {
        margin-top: 10px;

        h3 {
          font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));
          font-weight: 600;
          color: ${props => props.theme.colors.grayThree};
        }

        p {
          font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));
          line-height: calc(
            22px + (24 - 22) * ((100vw - 320px) / (1920 - 320))
          );
          font-weight: 300;
          color: ${props => props.theme.colors.grayThree};
        }
      }

      .service-socials {
        margin-top: 20px;

        h3 {
          font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (1920 - 320)));
          font-weight: 600;
          color: ${props => props.theme.colors.grayThree};
        }

        ul {
          margin-top: 10px;

          li {
            display: flex;
            align-items: center;

            + li {
              padding-top: 0.7rem;
            }

            img {
              padding-right: 5px !important;
            }
          }
        }
      }
    }

    .services {
      width: 100%;
    }
  }

  ${down('sm')} {
    grid-template-columns: 48% 48%;
    grid-gap: 3.3%;

    > div {
      &:nth-child(n + 4) {
        margin-top: 0;
      }
    }

    .card-services {
      p {
        font-size: 18px;
      }
    }

    .card-services {
      margin-bottom: 1rem;
    }
  }

  ${down('xs')} {
    display: flex;
    flex-direction: column;
  }
`
