import styled from 'styled-components'

export const KeysWrapper = styled.section`
    display: flex;
    flex-flow: column wrap;
`

export const KeysUl = styled.ul`
display: grid;
grid-template-columns: repeat(5, 100px);
grid-template-rows: repeat(4, 100px);
align-items: center;
justify-content: center;
    /* display: flex;
    flex-flow: row wrap;
    justify-content: center; */

`

export const KeysLi = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 6px;
    margin: 0 15px 15px 0;
    font-size: 30px;
    text-align: center;
    border: 1px solid #707070;
    cursor: pointer;
    background-color: #F2F2F2;
    border-radius: 30%;

`