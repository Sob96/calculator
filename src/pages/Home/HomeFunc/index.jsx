import React, { useState } from 'react'
import Keypad from '@/components/Calculator/Keypad/KeypadFunc'
import Display from '@/components/Calculator/Display/DisplayFunc'
import History from '@/components/Calculator/History/HistoryFunc'
import { DisplayKeypadWrapper, HomeContainer } from '../styles'


const HomeFunc = () => {
    const [number, setNumber] = useState('')
    const [result, setResult] = useState('')
    const [operator, setOperator] = useState('')
    const [display, setDisplay] = useState('')
    const [history, setHistory] = useState([])
    return (
        <HomeContainer>
            <DisplayKeypadWrapper>
                <Display display={display} operator={operator}
                    number={number} result={result} />
                <Keypad number={number} result={result}
                    setNumber={setNumber} setResult={setResult}
                    operator={operator} setOperator={setOperator}
                    display={display} setDisplay={setDisplay}
                    history={history} setHistory={setHistory} />
            </DisplayKeypadWrapper>
            <History history={history} />
        </HomeContainer>

    )
}

export default HomeFunc