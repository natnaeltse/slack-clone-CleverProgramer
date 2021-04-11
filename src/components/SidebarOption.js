import './CSS/SidebarOption.css'
import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../firebase'

function SidebarOption({ icon, title, id }) {
	const history = useHistory()
	const showChannelMessages = (e, id) => {
		if (id) {
			e.stopPropagation()
			history.push(`/room/${id}`)
		}
	}

	const addChannel = (e) => {
		let notExist = true
		e.stopPropagation()
		let channelName = prompt('Please enter the channel name to be created')
		if (channelName) {
			db.collection('room')
				.get()
				.then((res) => {
					res.docs.map((doc) => {
						if (doc.data().name === channelName.toLowerCase()) {
							notExist = !notExist
						}
						return notExist
					})

					if (notExist) {
						return db
							.collection('room')
							.add({ name: channelName.toLowerCase() })
					} else {
						alert('This channel name already exists')
					}
				})
		}
	}

	return (
		<div className='sidebarOption' key={id}>
			{/* if we pass icon value then it's going to render a heading */}
			{/* when no icon is passed then we are going to render a channel */}
			{icon ? (
				title === 'Channels' ? (
					<p className='sidebarOption__icon channel'>
						{icon}
						{title}
						<i className='fas fa-plus' onClick={(e) => addChannel(e)}></i>
					</p>
				) : title === 'Add Channel' ? (
					<p onClick={(e) => addChannel(e)} className='sidebarOption__icon'>
						{icon}
						{title}
					</p>
				) : (
					<p className='sidebarOption__icon'>
						{icon}
						{title}
					</p>
				)
			) : (
				<p
					onClick={(e) => showChannelMessages(e, id)}
					className='sidebarOption__channel'>
					<i className='fas fa-hashtag'></i>
					{title}
				</p>
			)}
		</div>
	)
}

export default SidebarOption
