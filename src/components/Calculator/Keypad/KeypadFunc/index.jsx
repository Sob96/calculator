import { symbols, digits, otherSymbols } from '@/constants/symbols'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'
import { AddCommand, AddDotCommand, AddMinusCommand, calculator, CleanLastSymbolCommand, DivideCommand, EuclideanDivisionCommand, IndexOfCommand, MultiplyCommand, RoundCommand, SolveCommand, SubtractCommand } from '@/helpers'
import { changeHistory, addSymbol, setResult } from '@/actions'


const Keypad = ({ number, result, setNumber, setResult, operator, setOperator, display, setDisplay, history, setHistory }) => {
    // const dispatch = useDispatch()
    // const number = useSelector(state => state.number.number)
    // const history = useSelector(state => state.history.history)

    // const startCalculation = value => {
    //     switch (value) {
    //         case 'CE':
    //             dispatch(setResult(String(number).slice(0, -1)))
    //             break
    //         case 'C':
    //             dispatch(setResult(''))
    //             break
    //         case '=': {
    //             const final = result(number)
    //             const index = String(final).indexOf('.')
    //             const rounded = index > 0 ? String(final).slice(0, index + 4) : final
    //             dispatch(changeHistory(history.concat(`${number} = ${rounded}`)))
    //             dispatch(setResult(rounded))
    //             break
    //         }
    //         case '.':
    //             dispatch(addSymbol('.'))
    //             break
    //         case '(':
    //             dispatch(addSymbol('('))
    //             break
    //         case ')':
    //             dispatch(addSymbol(')'))
    //             break
    //         case '+/-':
    //             Number(number) >= 0 ? dispatch(addSymbol('-')) : dispatch(addSymbol('+'))
    //             break
    //         default:
    //             dispatch(addSymbol(value))
    //     }
    // }



    // const getNumber = value => {


    //         default:
    //             // setResult(Number(result + value))
    //             setNumber(number + value)
    //         // setIsOperatorPressed(true)
    //     }
    // }

    const calculate = value => {
        // setNumber(result)
        // setResult(number)
        // if (!operator) {
        //     setHistoryNote(historyNote + value)
        // } else {

        // }
        if (!result && number) {
            /* return {...state, number: '', result: state.number} */
            setNumber('')
            setResult(number)
        }
        if (result && number) {
            let finalResult = Number(result)
            switch (operator) {
                case '+':
                    // finalResult = Number(result) + Number(number)
                    finalResult = calculator.executeCommand(new AddCommand(Number(result), Number(number)))
                    // setResult(Number(result) + Number(number))
                    // setDisplay(Number(result) + Number(number))
                    // setNumber(value)
                    // setOperator('')
                    break
                case '-':
                    finalResult = calculator.executeCommand(new SubtractCommand(Number(result), Number(number)))
                    // setResult(Number(result) - Number(number))
                    // setDisplay(Number(result) - Number(number))
                    // setNumber(value)
                    // setOperator('')
                    break
                case '/':
                    finalResult = calculator.executeCommand(new DivideCommand(Number(result), Number(number)))
                    // setResult(Number(result) / Number(number))
                    // setDisplay(Number(result) / Number(number))
                    // setNumber(value)
                    // setOperator('')
                    break
                case '*':
                    finalResult = calculator.executeCommand(new MultiplyCommand(Number(result), Number(number)))
                    // setResult(Number(result) * Number(number))
                    // setDisplay(Number(result) * Number(number))
                    // setNumber(value)
                    // setOperator('')
                    break
                case '%':
                    finalResult = calculator.executeCommand(new EuclideanDivisionCommand(Number(result), Number(number)))
                    // setResult(Number(result) % Number(number))
                    // setDisplay(Number(result) % Number(number))
                    // setNumber(value)
                    // setOperator('')
                    break
            }
            // setHistoryNote(`${result}`)
            const index = calculator.executeCommand(new IndexOfCommand(finalResult))
            if (index > 0) finalResult = calculator.executeCommand(new RoundCommand(String(finalResult), index))
            if (operator) setHistory(history.concat([`${result}${operator}${number} = ${finalResult}`]))

            setNumber('')
            setResult(finalResult)

            setDisplay(finalResult)


            // setHistoryNote('')

            // setIsOperatorPressed(false)
        }
        setOperator(value)
    }

    const getNumber = value => {
        if (operator !== '') {
            setNumber(number + value)
            setDisplay(number + value)

        } else {
            setResult('')
            setNumber(value)
            setDisplay(value)
            setOperator('+')
        }

    }



    const correctNumbers = value => {
        switch (value) {
            case 'CE':
                setDisplay(calculator.executeCommand(new CleanLastSymbolCommand(String(display))))
                String(display) === String(number) ? setNumber(calculator.executeCommand(new CleanLastSymbolCommand(String(number)))) : setResult(calculator.executeCommand(new CleanLastSymbolCommand(String(result))))
                break
            case 'C':
                setResult(calculator.executeCommand(new SolveCommand('')))
                setNumber(calculator.executeCommand(new SolveCommand('')))
                setDisplay(calculator.executeCommand(new SolveCommand('')))
                setOperator(calculator.executeCommand(new SolveCommand('')))
                break
            case '=':
                calculator.executeCommand(new SolveCommand(calculate('')))
                // setOperator('+')
                break
            case '.':
                if (operator === '') {
                    if (calculator.executeCommand(new IndexOfCommand(result)) < 0) {
                        setResult(calculator.executeCommand(new SolveCommand('')))
                        setOperator(calculator.executeCommand(new SolveCommand('+')))
                        setNumber(calculator.executeCommand(new AddDotCommand(number)))
                        setDisplay(calculator.executeCommand(new AddDotCommand(number)))

                    }
                } else {
                    if (calculator.executeCommand(new IndexOfCommand(number)) < 0) {
                        setNumber(calculator.executeCommand(new AddDotCommand(number)))
                        setDisplay(calculator.executeCommand(new AddDotCommand(number)))
                    }

                }
                break
            // case '(':
            //     setNumber('(' + number)
            //     setResult('(' + result)
            //     break
            // case ')':
            //     setNumber(number + ')')
            //     setResult(result + ')')
            //     break
            case '+/-':
                if (operator === '') {
                    if (Number(result) >= 0) {
                        setResult(calculator.executeCommand(new AddMinusCommand(result)))
                        setDisplay(calculator.executeCommand(new AddMinusCommand(result)))
                    } else {
                        setResult(calculator.undo(new AddMinusCommand(result)))
                        setDisplay(calculator.undo(new AddMinusCommand(result)))

                    }
                } else {
                    if (Number(number) >= 0) {
                        setNumber(calculator.executeCommand(new AddMinusCommand(number)))
                        setDisplay(calculator.executeCommand(new AddMinusCommand(number)))
                    } else {
                        setNumber(calculator.undo(new AddMinusCommand(number)))
                        setDisplay(calculator.undo(new AddMinusCommand(number)))
                    }
                }
                break
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
        </KeysWrapper>
    )
}

export default Keypad