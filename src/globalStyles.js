import styled, { createGlobalStyle } from 'styled-components'
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
    background-color: ${props => props.theme.body};
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
`
export const Container = styled.div`
  width: 98%;
  max-width: 1440px;
  margin: 0 auto;
`
