import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <section>
            <h3>Calculator App</h3>
            <Link to="/">Main</Link>
            <Link to="/settings">Settings</Link>
        </section>
    )
}

export default Header