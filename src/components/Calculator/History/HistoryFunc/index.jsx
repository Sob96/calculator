import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HistoryLi, HistoryUl, HistoryWrapper } from '../styles'
import { changeHidden, changeHistory } from '@/actions'
import { generateId } from '@/helpers'

const History = () => {
    const dispatch = useDispatch()
    const history = useSelector(state => state.calculation.history)
    const hidden = useSelector(state => state.calculation.hidden)


    const cleanHistory = () => dispatch(changeHistory([]))

    const show = () => dispatch(changeHidden(!hidden))
    return (
        <HistoryWrapper>
            {history.length > 0 ? <button onClick={cleanHistory}>Clean All History</button> : null}
            <h5>History</h5>
            <HistoryUl>
                {history.map((data, index) => {
                    return <HistoryLi className={index > 4 && !hidden ? 'hidden' : ''} key={generateId()}>{data}</HistoryLi>
                })}
            </HistoryUl>
            {history.length > 5 ? <button onClick={show}>{!hidden ? 'Show all' : 'Hide all'}</button> : null}
        </HistoryWrapper>
    )
}

export default History