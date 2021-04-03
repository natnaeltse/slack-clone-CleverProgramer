import './CSS/Sidebar.css'
import React from 'react'
import SidebarOption from './SidebarOption'

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<div className='sidebar__info'>
					<h4>
						<pre>
							Hands-on React <i className='fas fa-chevron-down'></i>
						</pre>
					</h4>
					<div className='online'></div>
					<p>Naty</p>
					<img
						src='https://images.unsplash.com/photo-1616877249878-25e73f6b433f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
						alt=''
					/>
				</div>

				<div className='sidebar__notepad'>
					<i className='far fa-edit'></i>
				</div>
			</div>

			<SidebarOption
				icon={<i className='fas fa-sort-down'></i>}
				title='Channels'
			/>
			<SidebarOption title='YouTube' />
			<SidebarOption title='YouTube' />
			<SidebarOption title='YouTube' />
			<SidebarOption title='YouTube' />
		</div>
	)
}

export default Sidebar
