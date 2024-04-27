import { createGlobalStyle } from 'styled-components'

export const colors = {
  green: '#00984D',
  white: '#fff',
  lightGreen: '#E0F2E7',
  yellow: '#FFFCE3',
  black: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }


  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }


`
