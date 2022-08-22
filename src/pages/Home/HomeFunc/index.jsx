import React from 'react'
import Keypad from '@/components/Calculator/Keypad/KeypadFunc'
import Display from '@/components/Calculator/Display/DisplayFunc'
import History from '@/components/Calculator/History/HistoryFunc'
import { DisplayKeypadWrapper, HomeContainer } from '../styles'


const HomeFunc = () => {
    return (
        <HomeContainer>
            <DisplayKeypadWrapper>
                <Display />
                <Keypad />
            </DisplayKeypadWrapper>
            <History />
        </HomeContainer>

    )
}

export default HomeFunc