import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayWrapper } from '../styles'


const Display = () => {
    const display = useSelector(state => state.calculation.display)
    const number = useSelector(state => state.calculation.number)
    const result = useSelector(state => state.calculation.result)
    const operator = useSelector(state => state.calculation.operator)
    return (
        <DisplayWrapper>
            <div>display={display} number={number} result={result} operator={operator}</div>

        </DisplayWrapper>
    )
}

export default Display