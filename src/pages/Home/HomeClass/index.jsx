import DisplayContainer from '@/containers/DisplayContainer'
import HistoryContainer from '@/containers/HistoryContainer'
import KeypadContainer from '@/containers/KeypadContainer'
import React from 'react'
import { DisplayKeypadWrapper, HomeContainer } from '../styles'

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