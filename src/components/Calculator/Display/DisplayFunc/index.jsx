import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayWrapper } from '../styles'


const Display = ({ number, result, operator, display }) => {
    // const number = useSelector(state => state.number.number)
    return (
        <DisplayWrapper>
            <div>display={display || 0} number={number || 0} result={result || 0} operator={operator}</div>

        </DisplayWrapper>
    )
}

export default Display