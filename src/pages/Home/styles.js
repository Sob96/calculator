import { Container } from '@/globalStyles'
import styled from 'styled-components'

export const DisplayKeypadWrapper = styled.main`
  width: 80%;
  margin-right: 1%;
  background-color: ${props => props.theme.body};
`

export const HomeContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.body};
`