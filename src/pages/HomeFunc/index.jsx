import React from 'react'
import Keypad from '@/components/Calculator/Keypad'
import Display from '@/components/Calculator/Display'
import History from '@/components/Calculator/History'
import { Container } from '@/globalStyles'
import { DisplayKeypadWrapper } from './styles'


const HomeFunc = () => {


    return (
        <Container>
            <DisplayKeypadWrapper>
                <Display />
                <Keypad />
            </DisplayKeypadWrapper>
            <History />

        </Container>

    )
}

export default HomeFunc