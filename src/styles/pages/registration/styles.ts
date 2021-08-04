import styled from 'styled-components'

import { between, down } from 'styled-breakpoints'

export const CoursesContainer = styled.section`
  width: 100%;
  padding-top: 9%;
  padding-bottom: calc(16px + (96 - 16) * ((100vw - 320px) / (1920 - 320)));

  .courses_boxes {
    width: 32%;
  }

  ${between('sm', 'lg')} {
    .courses_boxes {
      width: 48%;
    }
  }

  ${down('sm')} {
    .courses_boxes {
      width: 100%;
    }
  }
`

export const Icon = styled.div`
  border: 4px solid ${props => props.theme.colors.lightGreen};
  background-color: ${props => props.theme.colors.white};
  width: 46px;
  height: 46px;
  border-radius: 50%;

  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;
  transform: translateY(0);
`

export const Course = styled.a`
  background-color: ${props => props.theme.colors.grayFour};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  text-decoration: none;
  padding: 25px 60px;
  margin-bottom: 5rem;

  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  transition: all 0.3s;
  transform: translateY(0);

  h4 {
    font-weight: 500;
    margin: auto;
  }

  &:hover {
    transform: translateY(-10px);

    ${Icon} {
      transform: translateX(10px);
    }
  }

  ${down('sm')} {
    margin-bottom: 3.5rem;
  }
`

export const RegistrationContainer = styled.section`
  > svg {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(137px + (690 - 137) * ((100vw - 576px) / (1920 - 576)));
    height: auto;
  }
  position: relative;
  .m-3 {
    padding-top: 12rem;
  }
  p {
    text-align: center;
  }

  ${down('xs')} {
    > svg {
      width: 137px;
    }
  }
`

export const Content = styled.div``
