import './CSS/Sidebar.css'
import React, { useState, useEffect } from 'react'
import SidebarOption from './SidebarOption'
import db from '../firebase'

function Sidebar() {
	const [channels, setChannels] = useState([])

	useEffect(() => {
		db.collection('room').onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						name: doc.data().name,
					}
				})
			)
		})
	}, [])

	const channelsListDisplay = () => {
		return channels.map((channel) => {
			return (
				<SidebarOption title={channel.name} id={channel.id} key={channel.id} />
			)
		})
	}

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
				icon={<i className='fas fa-comment-alt'></i>}
				title='Threads'
			/>
			<SidebarOption
				icon={<i className='fas fa-quote-right'></i>}
				title='Mention & Rection'
			/>
			<SidebarOption
				icon={<i className='fas fa-folder-open'></i>}
				title='Saved Items'
			/>
			<SidebarOption
				icon={<i className='fas fa-award'></i>}
				title='Channel Browser'
			/>
			<SidebarOption
				icon={<i className='fas fa-user-friends'></i>}
				title='People & User groups'
			/>
			<SidebarOption
				icon={<i className='fab fa-buromobelexperte'></i>}
				title='Apps'
			/>
			<SidebarOption
				icon={<i className='fas fa-copy'></i>}
				title='File Browser'
			/>
			<SidebarOption
				icon={<i className='fas fa-caret-up'></i>}
				title='Show less'
			/>
			<hr />
			<SidebarOption
				icon={<i className='fas fa-sort-down'></i>}
				title='Channels'
			/>
			<hr />

			{channelsListDisplay()}
			{/* <SidebarOption title='YouTube' /> */}
			{/* <SidebarOption title='YouTube' />
			<SidebarOption title='YouTube' /> */}
		</div>
	)
}

export default Sidebar
