import styled, { createGlobalStyle } from 'styled-components'

// import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
    font-size: 30px;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    /* display: flex; */
    /* background: linear-gradient(to bottom, #c06c84da, #6c5b7bda); */
  }
`

export const Container = styled.div`
  width: 98%;
  max-width: 1440px;
  margin: 0 auto;
`
