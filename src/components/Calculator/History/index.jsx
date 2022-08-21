import React from 'react'
import { HistoryLi, HistoryUl, HistoryWrapper } from './styles'


const History = ({ history }) => {
    return (
        <HistoryWrapper>
            <HistoryUl>
                {history.map((data, index) => {
                    return <HistoryLi key={index}>{data}</HistoryLi>
                })}

            </HistoryUl>

        </HistoryWrapper>
    )
}

export default History