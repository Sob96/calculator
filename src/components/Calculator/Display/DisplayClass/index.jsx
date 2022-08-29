import React from 'react'
import { DisplayWrapper } from '../styles'
import PropTypes from 'prop-types'


const Display = ({ display }) => {
    return (
        <DisplayWrapper>
            <div>{display}</div>

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