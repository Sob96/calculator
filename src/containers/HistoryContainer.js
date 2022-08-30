import { connect } from 'react-redux'
import { changeHidden, changeHistory } from '@/actions'
import History from '@/components/Calculator/History/HistoryClass'

const mapStateToProps = state => {
    return {
        history: state.calculation.history,
        hidden: state.calculation.hidden,
    }
}


const mergeProps = (stateProps, dispatchProps) => {
    const { history, hidden } = stateProps
    const { dispatch } = dispatchProps

    return {
        history: history,
        hidden: hidden,
        clearHistory: () => {
            dispatch(changeHistory([]))
        },
        show: () => {
            dispatch(changeHidden(!hidden))
        },
    }

}

const HistoryContainer = connect(
    mapStateToProps,
    null,
    mergeProps,
)(History)

export default HistoryContainer