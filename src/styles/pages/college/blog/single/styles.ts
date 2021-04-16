import styled from 'styled-components'

export const BlogContainer = styled.article`
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 100%);
  padding-top: 5rem;

  .blog-content {
    margin-top: 3rem;
    p {
      font-size: calc(20px + (26 - 20) * ((100vw - 320px) / (1920 - 320)));
      color: ${props => props.theme.colors.gray};
      line-height: 31px;
      text-align: center;
    }
  }

  .slick-slider {
    width: 100%;
    max-width: 960px;
    margin: auto;

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
        border-radius: calc(
          25px + (53 - 25) * ((100vw - 320px) / (1920 - 320))
        );
      }
    }
  }

  .video-featured {
    margin: 3.4rem auto 0;
  }

  .image-gallery {
    .slick-list {
      margin: 0 -10px;
      .slick-track {
        .slick-current {
          > div {
            position: relative;
            display: flex;

            &::before {
              content: '';
              width: 100%;
              height: 100%;

              position: absolute;
              border-radius: calc(
                12px + (20 - 12) * ((100vw - 320px) / (1920 - 320))
              );
              background-color: rgba(186, 197, 41, 0.6);

              transition: all 0.3s;
            }
          }
        }
        .slick-slide {
          > div {
            margin: 0 10px;
            cursor: pointer;

            img {
              border-radius: calc(
                12px + (20 - 12) * ((100vw - 320px) / (1920 - 320))
              );

              &:focus,
              &:active {
                outline: none !important;
              }
            }
          }
        }
      }
    }
  }

  .image-featured {
    margin: 3.4rem auto 2rem;

    .slick-list {
      .slick-track {
        .slick-slide {
          div {
            margin: auto;

            display: flex;
            justify-content: center;
          }
          img {
            border-radius: calc(
              22px + (32 - 22) * ((100vw - 320px) / (1920 - 320))
            );
          }
        }
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
      border-right: calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320))) solid
        ${props => props.theme.colors.white};
      border-bottom: calc(4px + (5 - 4) * ((100vw - 320px) / (1920 - 320)))
        solid ${props => props.theme.colors.white};
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
`

export const Breadcrumbs = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  margin-top: 0.5rem;

  li {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};

    span {
      color: ${props => props.theme.colors.lightGreen};
      font-size: 16px;
      font-weight: 500;
    }
  }
`

export const Share = styled.ul``
