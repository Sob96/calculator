import styled from 'styled-components'
import { Container } from '@/globalStyles'

export const HeaderWrapper = styled.header`
    font-weight: 100;
    background-color: #434343;
    padding: 1.5% 0;
    color: #FFFFFF;
    margin-bottom: 10px;

    h1 {
        font-weight: 100;
        font-size: 20px;
        opacity: 0.6;
    }

    .headerLinks {
        font-size: 20px;
        margin: 0 8px;
        color: #FFFFFF;
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