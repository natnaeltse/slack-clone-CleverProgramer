import './CSS/ChatInput.css'
import React, { useState } from 'react'
import db from '../firebase'
import firebase from 'firebase'
import { useStateValue } from '../context'

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState('')
	const [{ user }] = useStateValue()
	const sendMessage = (e) => {
		e.preventDefault()

		if (channelId) {
			db.collection('room').doc(channelId).collection('messages').add({
				message: input,
				user: user.displayName,
				userImage: user.photoURL,
				// By doing the belowe we set the time to be consistent for every user
				// It will be the time on the firestore server
				time: firebase.firestore.Timestamp.now(),
			})
		}
		setInput('')
	}

	return (
		<div className='chatInput'>
			<div>
				<form onSubmit={(e) => sendMessage(e)}>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder={`Send a message to #${channelName?.toLowerCase()}`}
						type='text'
					/>
				</form>
				<div className='chatInput__style'>
					<div className='chatInput__styleFormatter'>
						<i className='fas fa-bolt'></i>
						<i className='fas fa-bold'></i>
						<i className='fas fa-italic'></i>
						<i className='fas fa-strikethrough'></i>
						<i className='fas fa-code'></i>
						<i className='fas fa-link'></i>
						<i className='fas fa-list-ol'></i>
						<i className='fas fa-list-ul'></i>
					</div>
					<div className='chatInput__more'>
						<i className='fas fa-font'></i>
						<i className='fas fa-at'></i>
						<i className='far fa-smile'></i>
						<i className='fas fa-paperclip'></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatInput
