import { changeHidden, changeHistory } from '@/actions'
import History from '@/components/Calculator/History/HistoryClass'
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        history: state.history.history,
        hidden: state.history.hidden,
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const { hidden } = stateProps
    const { dispatch } = dispatchProps

    return {
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