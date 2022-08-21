import React from 'react'
import { DisplayWrapper } from './styles'


const Display = ({ number, result }) => {
    return (
        <DisplayWrapper>
            <p>({result || 0})</p>
            <div>{number || 0}</div>

        </DisplayWrapper>
    )
}

export default Display