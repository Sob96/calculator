import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayWrapper } from './styles'


const Display = () => {
    const number = useSelector(state => state.number.number)
    return (
        <DisplayWrapper>
            <div>{number || 0}</div>

        </DisplayWrapper>
    )
}

export default Display