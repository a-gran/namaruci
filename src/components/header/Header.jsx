import React from 'react'
import './header.scss'
import Logo from './logo/Logo.jsx'
import Cart from './cart/Cart.jsx'

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Cart />
        </div>

    )
}

export default Header
