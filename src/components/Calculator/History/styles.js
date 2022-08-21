import styled from 'styled-components'

export const HistoryWrapper = styled.aside`
    text-align: center;
    width: 20%;
    border-left: 1.5px solid #707070;
    margin-bottom: 1px;

    h5 {
        padding-top: 10px;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
   }

`

export const HistoryUl = styled.ul`
    display: flex;
    flex-direction: column;
`

export const HistoryLi = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 10px;
    font-size: 20px;
`