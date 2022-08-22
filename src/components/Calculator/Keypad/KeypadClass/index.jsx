import symbols from '@/constants/symbols'
import React from 'react'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import PropTypes from 'prop-types'

const Keypad = ({ startCalculation, number, history }) => {


    return (
        <KeysWrapper>
            <KeysUl>
                {symbols.map((symbol, index) => {
                    return <KeysLi key={index} onClick={() => startCalculation(symbol)}>{symbol}</KeysLi>
                })}
            </KeysUl>
        </KeysWrapper>
    )
}

Keypad.propTypes = {
    startCalculation: PropTypes.func.isRequired,
    number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    history: PropTypes.array.isRequired,
}

export default Keypad