import React from 'react'
import { useSelector } from 'react-redux'

import { DisplayWrapper } from '../styles'


const Display = () => {
    const display = useSelector(state => state.calculation.display)

    return (
        <DisplayWrapper>
            <div>{display}</div>

        </DisplayWrapper>
    )
}

export default Display