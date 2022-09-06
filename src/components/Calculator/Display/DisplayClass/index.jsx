import PropTypes from 'prop-types'
import React from 'react'


import { DisplayWrapper } from '../styles'


const Display = ({ display }) => {
    return (
        <DisplayWrapper>
            <div>{display}</div>

        </DisplayWrapper>
    )
}

export default Display

Display.propTypes = {
    display: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}