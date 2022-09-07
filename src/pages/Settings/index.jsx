import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SettingsContainer, SettingsHeadline } from './styles'
import { changeTheme, cleanAll } from '@/actions'

const Settings = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)

    const cleanAllFunc = () => {
        dispatch(cleanAll())
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
                <button onClick={cleanAllFunc}>Clean All</button>

            </SettingsContainer>
        </section>
    )
}

export default Settings