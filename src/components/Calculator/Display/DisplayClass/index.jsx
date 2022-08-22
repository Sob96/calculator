import React from 'react'
import { DisplayWrapper } from '../styles'


const Display = ({ number }) => {
    return (
        <DisplayWrapper>
            <div>{number || 0}</div>

        </DisplayWrapper>
    )
}

export default Display