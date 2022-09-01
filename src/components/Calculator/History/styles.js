import styled from 'styled-components'

export const HistoryWrapper = styled.aside`
    text-align: center;
    width: 20%;
    border-left: 1.5px solid ${props => props.theme.colors.headerAndLines};
    margin-bottom: 1px;
    h5 {
        padding-top: 10px;
        font-weight: 500;
        font-size: 20px;
        margin-bottom: ${props => props.theme.indents.mb};
        color: ${props => props.theme.colors.textColor}
   }

   button {
        text-align: center;
        display: inline-block;
        padding: 10px 0;
        width: 60%;
        border: 1.5px solid ${props => props.theme.colors.headerAndLines};
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
    }

`

export const HistoryUl = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
   .hidden {
    display: none;
   }
`

export const HistoryLi = styled.li`

    list-style-type: none;
    display: inline-block;
    padding: 10px;
    font-size: 20px;
    color: ${props => props.theme.colors.textColor}
`