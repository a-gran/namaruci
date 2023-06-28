import React from 'react'
import css from './Header.module.scss'
import Logo from './logo/Logo.jsx'
import Cart from './cart/Cart.jsx'

const Header = () => {
	return (
		<div className={`${css.container} ${css.header}`}>
			<Logo />
			<Cart />
		</div>

	)
}

export default Header
