import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const BlogContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 4rem;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(238, 238, 238, 0) 50%);
`
export const Tabs = styled.div`
  width: 100%;
  padding-top: 4rem;

  .search-blog {
    margin: auto;
  }

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

  margin: auto;
  display: none;

  &.show {
    display: block;
  }
`

export const TabCards = styled.div`
  background: ${props => props.theme.colors.grayFour};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  border: 3px solid transparent;
  cursor: pointer;

  margin-bottom: 4rem;
  padding: 20px 35px;

  transition: all 0.3s;

  p {
    text-align: center;
    line-height: 29px;
    font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 500;
    color: ${props => props.theme.colors.blue};
  }
  &.active,
  &:hover {
    background: ${props => props.theme.colors.grayTwelve};
    border: 3px solid ${props => props.theme.colors.blue};
  }
`

export const TabsCardsContainer = styled.div`
  display: flex;
  grid-gap: 30px;
  justify-content: center;
`

export const Cards = styled.div`
  grid-gap: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`

export const Card = styled.div`
  background: ${props => props.theme.colors.grayOne};
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding: 35px;
  text-align: center;
  height: 100%;
  max-width: 370px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardHeader = styled.header`
  img {
    width: 100%;
    height: auto;
    border-radius: calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`

export const CardBody = styled.main`
  p {
    margin: 1.5rem auto;
  }
`

export const CardFooter = styled.footer`
  a {
    background-color: ${props => props.theme.colors.lightGreen};
    border: 0;
    color: ${props => props.theme.colors.white};
    font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
    padding: 9px calc(30px + (45 - 30) * ((100vw - 320px) / (1920 - 320)));
    border-radius: 61px;
    font-weight: 500;
    cursor: pointer;
    display: block;
    text-decoration: none;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.green};
    }

    &:focus,
    &:active {
      outline: none;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 5rem auto 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .load-more {
    background-color: ${props => props.theme.colors.lightBlue2};
    border: 0;
    color: ${props => props.theme.colors.white};
    font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
    padding: calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))
      calc(30px + (45 - 30) * ((100vw - 320px) / (1920 - 320)));
    border-radius: 61px;
    font-weight: 500;
    cursor: pointer;
    display: block;
    text-decoration: none;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.green};
    }

    &:focus,
    &:active {
      outline: none;
    }
  }
`
