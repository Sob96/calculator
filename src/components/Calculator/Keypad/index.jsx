import symbols from '@/constants/symbols'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeysLi, KeysUl, KeysWrapper } from './styles'
import { result } from '@/helpers'
import { changeHistory, addSymbol, setResult } from '@/actions'


const Keypad = () => {
    const dispatch = useDispatch()
    const number = useSelector(state => state.number.number)
    const history = useSelector(state => state.history.history)

    const startCalculation = value => {
        switch (value) {
            case 'CE':
                dispatch(setResult(String(number).slice(0, -1)))
                break
            case 'C':
                dispatch(setResult(''))
                break
            case '=': {
                const final = result(number)
                const index = String(final).indexOf('.')
                const rounded = index > 0 ? String(final).slice(0, index + 4) : final
                dispatch(changeHistory(history.concat(`${number} = ${rounded}`)))
                dispatch(setResult(rounded))
                break
            }
            case '.':
                dispatch(addSymbol('.'))
                break
            case '(':
                dispatch(addSymbol('('))
                break
            case ')':
                dispatch(addSymbol(')'))
                break
            case '+/-':
                Number(number) >= 0 ? dispatch(addSymbol('-')) : dispatch(addSymbol('+'))
                break
            default:
                dispatch(addSymbol(value))
        }
    }


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

export default Keypad