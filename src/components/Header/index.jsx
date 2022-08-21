import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeaderContainer, HeaderWrapper } from './styles'

const Header = () => {
    const location = useLocation()
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <h1>Calculator App</h1>
                <div>
                    <Link className={location.pathname === '/' ? "headerLinks" : "headerLinks inactive"} to="/">Main</Link>
                    <Link className={location.pathname === '/settings' ? "headerLinks" : "headerLinks inactive"} to="/settings">Settings</Link>
                </div>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header