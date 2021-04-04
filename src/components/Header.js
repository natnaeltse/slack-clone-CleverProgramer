import './CSS/Header.css'
import React from 'react'
import { useStateValue } from '../context'

function Header() {
	const [{ user }] = useStateValue()

	return (
		<div className='header'>
			<div className='header__left'>
				<img src={user?.photoURL} alt={user?.displayName} />
				<i className='far fa-clock'></i>
			</div>
			<div className='header__search'>
				<i className='fas fa-search'></i>
				<input type='text' placeholder='Search Hands-on React' />
			</div>
			<div className='header__right'>
				<i className='far fa-question-circle'></i>
			</div>
		</div>
	)
}

export default Header
