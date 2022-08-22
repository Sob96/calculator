import React from 'react'
import { HistoryLi, HistoryUl, HistoryWrapper } from '../styles'


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

export default History