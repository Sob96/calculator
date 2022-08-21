import { digits, otherSymbols, symbols } from '@/constants/keys'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeysLi, KeysUl, KeysWrapper } from './styles'
import { result } from '@/helpers'
import { changeHistory, addSymbol, setResult } from '@/actions'


const Keypad = () => {
    const dispatch = useDispatch()
    const number = useSelector(state => state.number.number)
    const history = useSelector(state => state.history.history)

    const getNumber = value => dispatch(addSymbol(value))

    const correctNumbers = value => {
        switch (value) {
            case 'CE':
                dispatch(setResult(String(number).slice(0, -1)))
                break
            case 'C':
                dispatch(setResult(''))
                // dispatch(changeHistory([]))
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
                console.log('wrong button')
        }
    }


    return (
        <KeysWrapper>
            <KeysUl>
                {digits.map((digit, index) => {
                    return <KeysLi key={index} onClick={() => getNumber(digit)}>{digit}</KeysLi>
                })}
                {symbols.map((symbol, index) => {
                    return <KeysLi key={index} onClick={() => getNumber(symbol)}>{symbol}</KeysLi>
                })}
                {otherSymbols.map((symbol, index) => {
                    return <KeysLi key={index} onClick={() => correctNumbers(symbol)}>{symbol}</KeysLi>
                })}
            </KeysUl>
        </KeysWrapper>
    )
}

export default Keypad