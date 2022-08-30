import React from 'react'
import PropTypes from 'prop-types'
import { DisplayWrapper } from '../styles'


const Display = ({ number, result, display, operator }) => {
    return (
        <DisplayWrapper>
            {/* <div>display={display} number={number} result={result} operator={operator}</div> */}

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