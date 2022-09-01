import React from 'react'
import PropTypes from 'prop-types'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import { symbols, digits, otherSymbols } from '@/constants/symbols'
import { generateId } from '@/helpers'

const Keypad = ({ calculate, getNumber, doOtherOperations }) => {

    return (
        <KeysWrapper>
            <KeysUl>
                {digits.map((digit, index) => {
                    return <KeysLi key={generateId(index)} onClick={getNumber(digit)}>{digit}</KeysLi>
                })}
                {symbols.map((symbol, index) => {
                    return <KeysLi key={generateId(index)} onClick={calculate(symbol)}>{symbol}</KeysLi>
                })}
                {otherSymbols.map((symbol, index) => {
                    return <KeysLi key={generateId(index)} onClick={doOtherOperations(symbol)}>{symbol}</KeysLi>
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