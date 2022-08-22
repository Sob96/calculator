import React from 'react'
import { DisplayWrapper } from '../styles'
import PropTypes from 'prop-types'


const Display = ({ number }) => {
    return (
        <DisplayWrapper>
            <div>{number || 0}</div>

        </DisplayWrapper>
    )
}

Display.propTypes = {
    number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
}

export default Display