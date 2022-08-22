import symbols from '@/constants/symbols'
import React from 'react'
import { KeysLi, KeysUl, KeysWrapper } from '../styles'


const Keypad = ({ startCalculation, number, history }) => {


    return (
        <KeysWrapper>
            <KeysUl>
                {symbols.map((symbol, index) => {
                    return <KeysLi key={index} onClick={() => startCalculation(symbol)}>{symbol}</KeysLi>
                })}
            </KeysUl>
        </KeysWrapper>
    )
}

export default Keypad