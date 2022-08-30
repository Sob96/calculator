import { connect } from 'react-redux'
import { changeHistory, setDisplay, setNumber, setOperator, setResult } from '@/actions'
import Keypad from '@/components/Calculator/Keypad/KeypadClass'
import { AddCommand, AddDotCommand, AddMinusCommand, calculator, CleanLastSymbolCommand, DivideCommand, EuclideanDivisionCommand, IndexOfCommand, MultiplyCommand, result, RoundCommand, SolveCommand, SubtractCommand } from '@/helpers'

const mapStateToProps = state => {
    return {
        number: state.calculation.number,
        result: state.calculation.result,
        display: state.calculation.display,
        operator: state.calculation.operator,
        history: state.history.history,
    }
}


const mergeProps = (stateProps, dispatchProps) => {
    const { number, result, display, operator, history } = stateProps
    const { dispatch } = dispatchProps

    return {
        number: number,
        result: result,
        display: display,
        operator: operator,
        history: history,
        calculate: value => () => {
            if (!result && number) {
                dispatch(setNumber(''))
                dispatch(setResult(number))
            }
            if (result && number) {
                let finalResult = Number(result)
                switch (operator) {
                    case '+':
                        finalResult = calculator.executeCommand(new AddCommand(Number(result), Number(number)))
                        break
                    case '-':
                        finalResult = calculator.executeCommand(new SubtractCommand(Number(result), Number(number)))
                        break
                    case '/':
                        finalResult = calculator.executeCommand(new DivideCommand(Number(result), Number(number)))
                        break
                    case '*':
                        finalResult = calculator.executeCommand(new MultiplyCommand(Number(result), Number(number)))
                        break
                    case '%':
                        finalResult = calculator.executeCommand(new EuclideanDivisionCommand(Number(result), Number(number)))
                        break
                    case '=':
                        calculator.executeCommand(new SolveCommand(this.calculate('')()))
                        break
                }
                const index = calculator.executeCommand(new IndexOfCommand(finalResult))
                if (index > 0) finalResult = calculator.executeCommand(new RoundCommand(String(finalResult), index))
                if (operator) dispatch(changeHistory(history.concat([`${result} ${operator} ${number} = ${finalResult}`])))

                dispatch(setNumber(''))
                dispatch(setResult(finalResult))

                dispatch(setDisplay(finalResult))
            }
            dispatch(setOperator(value))
        },
        getNumber: value => () => {
            if (operator !== '') {
                dispatch(setNumber(number + value))
                dispatch(setDisplay(number + value))

            } else {
                dispatch(setDisplay(''))
                dispatch(setResult(''))
                dispatch(setNumber(value))
                dispatch(setDisplay(value))
                dispatch(setOperator('+'))
            }

        },
        doOtherOperations: value => () => {
            switch (value) {
                case 'CE':
                    dispatch(setDisplay(calculator.executeCommand(new CleanLastSymbolCommand(String(display)))))
                    String(display) === String(number) ? dispatch(setNumber(calculator.executeCommand(new CleanLastSymbolCommand(String(number)))))
                        : dispatch(setResult(calculator.executeCommand(new CleanLastSymbolCommand(String(result)))))
                    break
                case 'C':
                    dispatch(setResult(calculator.executeCommand(new SolveCommand(''))))
                    dispatch(setNumber(calculator.executeCommand(new SolveCommand(''))))
                    dispatch(setDisplay(calculator.executeCommand(new SolveCommand(0))))
                    dispatch(setOperator(calculator.executeCommand(new SolveCommand(''))))
                    break
                case '.':
                    if (operator === '') {
                        if (calculator.executeCommand(new IndexOfCommand(result)) < 0) {
                            dispatch(setResult(calculator.executeCommand(new SolveCommand(''))))
                            dispatch(setOperator(calculator.executeCommand(new SolveCommand('+'))))
                            dispatch(setNumber(calculator.executeCommand(new AddDotCommand(number))))
                            dispatch(setDisplay(calculator.executeCommand(new AddDotCommand(number))))

                        }
                    } else {
                        if (calculator.executeCommand(new IndexOfCommand(number)) < 0) {
                            dispatch(setNumber(calculator.executeCommand(new AddDotCommand(number))))
                            dispatch(setDisplay(calculator.executeCommand(new AddDotCommand(number))))
                        }

                    }
                    break
                case '+/-':
                    if (operator === '') {
                        if (Number(result) >= 0) {
                            dispatch(setResult(calculator.executeCommand(new AddMinusCommand(result))))
                            dispatch(setDisplay(calculator.executeCommand(new AddMinusCommand(result))))
                        } else {
                            dispatch(setResult(calculator.undo(new AddMinusCommand(result))))
                            dispatch(setDisplay(calculator.undo(new AddMinusCommand(result))))

                        }
                    } else {
                        if (Number(number) >= 0) {
                            dispatch(setNumber(calculator.executeCommand(new AddMinusCommand(number))))
                            dispatch(setDisplay(calculator.executeCommand(new AddMinusCommand(number))))
                        } else {
                            dispatch(setNumber(calculator.undo(new AddMinusCommand(number))))
                            dispatch(setDisplay(calculator.undo(new AddMinusCommand(number))))
                        }
                    }
                    break
            }
        },
    }

}

const KeypadContainer = connect(
    mapStateToProps,
    null,
    mergeProps,
)(Keypad)

export default KeypadContainer