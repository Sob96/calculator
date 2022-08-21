import React from 'react'
import Keypad from '@/components/Calculator/Keypad'
import Display from '@/components/Calculator/Display'
import History from '@/components/Calculator/History'
import { DisplayKeypadWrapper, HomeFunkContainer } from './styles'


const HomeFunc = () => {


    return (
        <HomeFunkContainer>
            <DisplayKeypadWrapper>
                <Display />
                <Keypad />
            </DisplayKeypadWrapper>
            <History />

        </HomeFunkContainer>

    )
}

export default HomeFunc