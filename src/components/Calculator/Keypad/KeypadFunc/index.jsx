import React from 'react'
import { useDispatch } from 'react-redux'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import { symbols, digits, otherSymbols } from '@/constants/symbols'
import { calc, getNum, doOtherOper } from '@/actions'
import { generateId } from '@/helpers'


const Keypad = () => {
    const dispatch = useDispatch()

    const calculate = value => () => {
        dispatch(calc(value))

    }

    const getNumber = value => () => {
        dispatch(getNum(value))

    }



    const doOtherOperations = value => () => {
        dispatch(doOtherOper(value))
    }


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

export default Keypad