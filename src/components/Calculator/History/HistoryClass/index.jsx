import React from 'react'
import PropTypes from 'prop-types'
import { HistoryLi, HistoryUl, HistoryWrapper } from '../styles'
import { generateId } from '@/helpers'

const History = ({ history, hidden, clearHistory, show }) => {
    return (
        <HistoryWrapper>
            {history.length > 0 ? <button onClick={clearHistory}>Clear All History</button> : null}
            <h5>History</h5>
            <HistoryUl>
                {history.map((data, index) => {
                    return <HistoryLi className={index > 4 && !hidden ? 'hidden' : ''} key={generateId(index)}>{data}</HistoryLi>
                })}

            </HistoryUl>
            {history.length > 5 ? <button onClick={show}>{!hidden ? 'Show all' : 'Hide all'}</button> : null}
        </HistoryWrapper>
    )
}

History.propTypes = {
    history: PropTypes.array,
    hidden: PropTypes.bool,
    clearHistory: PropTypes.func,
    show: PropTypes.func,
}

export default History