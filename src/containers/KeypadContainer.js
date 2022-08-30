import { connect } from 'react-redux'
import { calc, doOtherOper, getNum } from '@/actions'
import Keypad from '@/components/Calculator/Keypad/KeypadClass'

const mapDispatchToProps = dispatch => {
    return {
        calculate: value => () => {
            dispatch(calc(value))
        },
        getNumber: value => () => {
            dispatch(getNum(value))

        },
        doOtherOperations: value => () => {
            dispatch(doOtherOper(value))
        },
    }
}

const KeypadContainer = connect(
    null,
    mapDispatchToProps,
)(Keypad)

export default KeypadContainer