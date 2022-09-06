import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { HeaderContainer, HeaderWrapper } from '../styles'
import { HOME_PAGE_CLASS_ROUTE, HOME_PAGE_FUNC_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

const Header = () => {
    const location = useLocation()
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <h1>Calculator App</h1>
                <div>
                    <Link className={location.pathname === '/' ? "headerLinks" : "headerLinks inactive"} to={HOME_PAGE_FUNC_ROUTE}>MainFunc</Link>
                    <Link className={location.pathname === '/class' ? "headerLinks" : "headerLinks inactive"} to={HOME_PAGE_CLASS_ROUTE}>MainClass</Link>
                    <Link className={location.pathname === '/settings' ? "headerLinks" : "headerLinks inactive"} to={SETTINGS_PAGE_ROUTE}>Settings</Link>
                </div>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header