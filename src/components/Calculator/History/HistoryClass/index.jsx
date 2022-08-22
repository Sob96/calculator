import React from 'react'
import { HistoryLi, HistoryUl, HistoryWrapper } from '../styles'
import PropTypes from 'prop-types'

const History = ({ history }) => {
    return (
        <HistoryWrapper>
            <h5>History</h5>
            <HistoryUl>
                {history.map((data, index) => {
                    return <HistoryLi key={index}>{data}</HistoryLi>
                })}
            </HistoryUl>
        </HistoryWrapper>
    )
}

History.propTypes = {
    history: PropTypes.array,
}

export default History