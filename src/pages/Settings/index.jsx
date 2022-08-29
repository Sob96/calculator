import { changeHistory, setDisplay, setNumber, setOperator, setResult, changeTheme } from '@/actions'
import { calculator, SolveCommand } from '@/helpers'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SettingsContainer, SettingsHeadline } from './styles'


const Settings = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)

    const clearAll = () => {
        dispatch(changeHistory([]))
        dispatch(setResult(calculator.executeCommand(new SolveCommand(''))))
        dispatch(setNumber(calculator.executeCommand(new SolveCommand(''))))
        dispatch(setDisplay(calculator.executeCommand(new SolveCommand(0))))
        dispatch(setOperator(calculator.executeCommand(new SolveCommand(''))))
    }

    const switchTheme = e => dispatch(changeTheme(e.target.value))

    return (
        <section>
            <SettingsContainer>
                <SettingsHeadline>Settings</SettingsHeadline>
                <label htmlFor="theme">Switch Theme</label>
                <select onChange={switchTheme} value={theme}
                    id="theme">
                    <option>Light theme</option>
                    <option>Dark theme</option>
                </select>
                <button onClick={clearAll}>Clear All</button>

            </SettingsContainer>
        </section>
    )
}

export default Settings