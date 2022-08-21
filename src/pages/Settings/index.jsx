import { changeHistory } from '@/actions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { SettingsContainer, SettingsHeadline } from './styles'


const Settings = () => {
    const dispatch = useDispatch()

    const clearHistory = () => dispatch(changeHistory([]))

    return (
        <section>
            <SettingsContainer>
                <SettingsHeadline>Settings</SettingsHeadline>
                <label htmlFor="theme">Switch Theme</label>
                <select id="theme">
                    <option>Light theme</option>
                    <option>Dark theme</option>
                </select>
                <button onClick={clearHistory}>Clear All History</button>

            </SettingsContainer>
        </section>
    )
}

export default Settings