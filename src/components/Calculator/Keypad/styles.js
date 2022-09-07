import styled from 'styled-components'

export const KeysWrapper = styled.section`
    display: flex;
    flex-flow: column wrap;
`

export const KeysUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 4% 8%;
    justify-content: center;
`

export const KeysLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 90%;
    padding: 25px 0;
    font-size: 40px;
    border: 1px solid ${props => props.theme.colors.headerAndLines};
    cursor: pointer;
    background-color: ${props => props.theme.colors.buttons};
    color: ${props => props.theme.colors.textColor};
    border-radius: 20%;
`