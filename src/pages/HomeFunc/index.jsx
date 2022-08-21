import React, { useState } from 'react'
import Keypad from '@/components/Calculator/Keypad'
import Display from '@/components/Calculator/Display'
import History from '@/components/Calculator/History'
import { Container } from '@/globalStyles'
import { DisplayKeypadWrapper } from './styles'


const HomeFunc = () => {
    const [history, setHistory] = useState([])
    const [number, setNumber] = useState('')
    const [result, setResult] = useState('')

    return (
        <Container>
            <DisplayKeypadWrapper>
                <Display number={number}
                    result={result} />
                <Keypad history={history}
                    setHistory={setHistory}
                    number={number}
                    setNumber={setNumber}
                    result={result}
                    setResult={setResult} />
            </DisplayKeypadWrapper>
            <History history={history} />

        </Container>

    )
}

export default HomeFunc