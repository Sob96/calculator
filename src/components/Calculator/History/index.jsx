import React from 'react'
import { useSelector } from 'react-redux'
import { HistoryLi, HistoryUl, HistoryWrapper } from './styles'


const History = () => {
    const history = useSelector(state => state.history.history)
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