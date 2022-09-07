import PropTypes from 'prop-types'
import React from 'react'

import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import { generateId } from '@/helpers'

const Keypad = ({ calculate, getNumber, doOtherOperations }) => {

    const symbols = [{ value: 'C', func: doOtherOperations }, { value: '7', func: getNumber },
    { value: '8', func: getNumber }, { value: '9', func: getNumber },
    { value: '*', func: calculate }, { value: '-', func: calculate },
    { value: '4', func: getNumber }, { value: '5', func: getNumber },
    { value: '6', func: getNumber }, { value: '/', func: calculate },
    { value: '+', func: calculate }, { value: '1', func: getNumber },
    { value: '2', func: getNumber }, { value: '3', func: getNumber },
    { value: '=', func: calculate }, { value: '.', func: doOtherOperations },
    { value: '+/-', func: doOtherOperations }, { value: '0', func: getNumber },
    { value: '%', func: calculate }, { value: 'CE', func: doOtherOperations }]

    return (
        <KeysWrapper>
            <KeysUl>
                {symbols.map(symbol => {
                    return <KeysLi key={generateId()} onClick={symbol.func(symbol.value)}>{symbol.value}</KeysLi>
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