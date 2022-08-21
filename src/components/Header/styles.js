import { Container } from '@/globalStyles'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    font-size: 18px;
    font-weight: 100;
    background-color: #434343;
    padding: 1.5% 0;
    color: #FFFFFF;

    h3 {
        font-weight: 100;
        font-size: 20px;
    }

    .headerLinks {
        font-size: 20px;
        margin: 0 8px;
        color: #FFFFFF;
    }
    .inactive {
            text-decoration: none;
        }
`


export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`