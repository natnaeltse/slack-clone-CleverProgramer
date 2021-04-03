import './CSS/Header.css'
import React from 'react'

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://images.unsplash.com/photo-1616877249878-25e73f6b433f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
					alt=''
				/>
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
