import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderWrapper } from '../styles'
import { HOME_PAGE_CLASS_ROUTE, HOME_PAGE_FUNC_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderContainer>
                    <h1>Calculator App</h1>
                    <div>
                        <Link className="headerLinks" to={HOME_PAGE_FUNC_ROUTE}>MainFunc</Link>
                        <Link className="headerLinks" to={HOME_PAGE_CLASS_ROUTE}>MainClass</Link>
                        <Link className="headerLinks inactive" to={SETTINGS_PAGE_ROUTE}>Settings</Link>
                    </div>
                </HeaderContainer>
            </HeaderWrapper>
        )
    }
}

export default Header