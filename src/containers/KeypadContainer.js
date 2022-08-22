import { addSymbol, changeHistory, setResult } from '@/actions'
import Keypad from '@/components/Calculator/Keypad/KeypadClass'
import { result } from '@/helpers'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        history: state.history.history,
        number: state.number.number,
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const { number, history } = stateProps
    const { dispatch } = dispatchProps

    return {
        startCalculation: value => {
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
        },
    }

}

const KeypadContainer = connect(
    mapStateToProps,
    null,
    mergeProps,
)(Keypad)

export default KeypadContainer