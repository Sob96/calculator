import React from 'react'
import PropTypes from 'prop-types'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import { symbols, digits, otherSymbols } from '@/constants/symbols'

const Keypad = ({ calculate, getNumber, doOtherOperations }) => {

    return (
        <KeysWrapper>
            <KeysUl>
                {digits.map((digit, id) => {
                    return <KeysLi key={id} onClick={getNumber(digit)}>{digit}</KeysLi>
                })}
                {symbols.map((symbol, id) => {
                    return <KeysLi key={id} onClick={calculate(symbol)}>{symbol}</KeysLi>
                })}
                {otherSymbols.map((symbol, id) => {
                    return <KeysLi key={id} onClick={doOtherOperations(symbol)}>{symbol}</KeysLi>
                })}
            </KeysUl>
        </KeysWrapper>
    )
}

Keypad.propTypes = {
    calculate: PropTypes.func.isRequired,
    getNumber: PropTypes.func.isRequired,
    doOtherOperations: PropTypes.func.isRequired,
}

export default Keypad