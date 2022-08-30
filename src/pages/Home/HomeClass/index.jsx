import React from 'react'
import { DisplayKeypadWrapper, HomeContainer } from '../styles'
import DisplayContainer from '@/containers/DisplayContainer'
import HistoryContainer from '@/containers/HistoryContainer'
import KeypadContainer from '@/containers/KeypadContainer'

const HomeClass = () => {
    return (
        <HomeContainer>
            <DisplayKeypadWrapper>
                <DisplayContainer />
                <KeypadContainer />
            </DisplayKeypadWrapper>
            <HistoryContainer />
        </HomeContainer>

    )
}
export default HomeClass