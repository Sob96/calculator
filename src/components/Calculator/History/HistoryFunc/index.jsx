import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HistoryLi, HistoryUl, HistoryWrapper } from '../styles'
import { changeHidden, changeHistory } from '@/actions'


const History = () => {
    const dispatch = useDispatch()
    const history = useSelector(state => state.calculation.history)
    const hidden = useSelector(state => state.calculation.hidden)


    const clearHistory = () => dispatch(changeHistory([]))

    const show = () => dispatch(changeHidden(!hidden))
    return (
        <HistoryWrapper>
            {history.length > 0 ? <button onClick={clearHistory}>Clear All History</button> : null}
            <h5>History</h5>
            <HistoryUl>
                {history.map((data, id) => {
                    return <HistoryLi className={+id > 4 && !hidden ? 'hidden' : ''} key={id}>{data}</HistoryLi>
                })}

            </HistoryUl>
            {history.length > 4 ? <button onClick={show}>{!hidden ? 'Show all' : 'Hide all'}</button> : null}
        </HistoryWrapper>
    )
}

export default History