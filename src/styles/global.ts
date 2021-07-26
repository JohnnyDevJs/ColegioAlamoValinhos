import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-smooth: antialiased;
  scroll-behavior: smooth;
}

*, ::after, ::before {
    box-sizing: border-box;
}

body {
  background: ${props => props.theme.colors.white};
  font-family: 'Gotham Rounded';
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

input, textarea {
  font-family: 'Gotham Rounded';
}

@font-face {
  font-family: 'Gotham Rounded';
  src: url('../../GothamRounded-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
    font-family: 'Gotham Rounded';
    src: url('../../GothamRounded-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gotham Rounded';
    src: url('../../GothamRounded-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gotham Rounded';
    src: url('../../GothamRounded-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}`
