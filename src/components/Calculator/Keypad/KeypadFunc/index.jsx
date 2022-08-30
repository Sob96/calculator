import React from 'react'
import { useDispatch } from 'react-redux'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import { symbols, digits, otherSymbols } from '@/constants/symbols'
import { calc, getNum, doOtherOper } from '@/actions'


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

export default Keypad