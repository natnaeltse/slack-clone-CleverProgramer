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
			<form onSubmit={(e) => sendMessage(e)}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #${channelName?.toLowerCase()}`}
					type='text'
				/>
			</form>
		</div>
	)
}

export default ChatInput
