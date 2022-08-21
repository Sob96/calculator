import { digits, otherSymbols, symbols } from '@/constants/keys'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeysLi, KeysUl, KeysWrapper } from './styles'

const Keypad = ({ history, setHistory, number, setNumber, result, setResult }) => {
    // const dispatch = useDispatch()
    // const number = useSelector(state => state.number)
    // const result = useSelector(state => state.result)
    // const operator = useSelector(state => state.operator)




    const [operator, setOperator] = useState('')

    const getNumber = value => {
        switch (operator) {
            case '+':
                setResult(result => result + Number(value))
                setNumber(value)
                setHistory(history.concat(`${result} ${operator} ${value} = ${Number(result) + Number(value)}`))
                break
            case '-':
                setResult(result - Number(value))
                setNumber(value)
                setHistory(history.concat(`${result} ${operator} ${value} = ${Number(result) - Number(value)}`))
                break
            case '/':
                setResult(result / Number(value))
                setNumber(value)
                setHistory(history.concat(`${result} ${operator} ${value} = ${Number(result) / Number(value)}`))
                break
            case '*':
                setResult(result * Number(value))
                setNumber(value)
                setHistory(history.concat(`${result} ${operator} ${value} = ${Number(result) * Number(value)}`))
                break
            case '%':
                setResult(result % Number(value))
                setNumber(value)
                setHistory(history.concat(`${result} ${operator} ${value} = ${Number(result) % Number(value)}`))
                break
            default:
                setNumber(number + value)
        }
    }

    const calculate = value => {
        if (!operator) setResult(Number(number))
        setOperator(value)
        console.log(history)
    }

    const correctNumbers = value => {
        switch (value) {
            case 'CE':
                setNumber(number.slice(0, -1))
                break
            case 'C':
                setResult('')
                setNumber('')
                setOperator('')
                setHistory([])
                break
            case '=': {
                const index = String(result).indexOf('.')
                index > 0 ? setNumber(String(result).slice(0, index + 4)) : setNumber(result)
                break
            }
            case '.':
                setNumber(number + '.')
                /* та же проблема со вторым символом 222 */
                break
            case '(':
                setNumber('(' + number)
                break
            case ')':
                setNumber(number + ')')
                break
            case '+/-':
                Number(number) >= 0 ? setNumber('-' + number) : setNumber('+' + number)
                /* если разберусь с выражением, тут тоже можно подшаманить */

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
                    return <KeysLi key={index} onClick={() => calculate(symbol)}>{symbol}</KeysLi>
                })}
                {otherSymbols.map((symbol, index) => {
                    return <KeysLi key={index} onClick={() => correctNumbers(symbol)}>{symbol}</KeysLi>
                })}
            </KeysUl>
            {/* number={number || 0} operator={operator} result={result || 0} */}
        </KeysWrapper>
    )
}

export default Keypad