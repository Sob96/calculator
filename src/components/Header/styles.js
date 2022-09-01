import styled from 'styled-components'
import { Container } from '@/globalStyles'

export const HeaderWrapper = styled.header`
    font-weight: 100;
    background-color: ${props => props.theme.colors.headerAndLines};
    padding: ${props => props.theme.indents.p};
    color: ${props => props.theme.colors.headerText};
    margin-bottom: ${props => props.theme.indents.mb};

    h1 {
        font-weight: 100;
        font-size: 20px;
        opacity: 0.6;
    }

    .headerLinks {
        font-size: 20px;
        margin: 0 8px;
        color: ${props => props.theme.colors.headerText};
    }
    .inactive {
            text-decoration: none;
            opacity: 0.6;
        }
`


export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`