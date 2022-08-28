import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayWrapper } from '../styles'


const Display = () => {
    const number = useSelector(state => state.calculation.number)
    const result = useSelector(state => state.calculation.result)
    const display = useSelector(state => state.calculation.display)
    const operator = useSelector(state => state.calculation.operator)
    return (
        <DisplayWrapper>
            <div>display={display} number={number || 0} result={result || 0} operator={operator}</div>

        </DisplayWrapper>
    )
}

export default Display