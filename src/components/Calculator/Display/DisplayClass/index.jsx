import React from 'react'
import { DisplayWrapper } from '../styles'
import PropTypes from 'prop-types'


const Display = ({ number, result, display, operator }) => {
    return (
        <DisplayWrapper>
            <div>display={display} number={number} result={result} operator={operator}</div>

        </DisplayWrapper>
    )
}

Display.propTypes = {
    display: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}

export default Display