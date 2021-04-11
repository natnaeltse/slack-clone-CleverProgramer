import './CSS/Chat.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import Message from './Message'
import ChatInput from './ChatInput'

function Chat() {
	const { roomId } = useParams()
	const [channelDetail, setChannelDetail] = useState(null)
	const [messages, setMessages] = useState(null)

	const messagesByDate = (messages) => {
		let obj = {}

		messages?.map((message) => {
			let keyExists = false
			const dateStr = new Date(message.time?.toDate()).toDateString()
			// const dateStr = date.replaceAll(' ', '')

			// Checking if the key with the string equal to dateStr exists
			// if so keyExists willbe set to true
			Object.keys(obj).map((key) => {
				if (key === dateStr) keyExists = true
				return keyExists
			})

			// Updating obj based on keyExists
			if (keyExists) obj[dateStr] = [...obj[dateStr], message]
			else obj = { ...obj, [dateStr]: [message] }

			return []
		})
		// Converting obj to array based on its key
		const newMessages = Object.entries(obj)
		return newMessages
	}

	useEffect(() => {
		if (roomId) {
			db.collection('room')
				.doc(roomId)
				.onSnapshot((snapshot) => {
					setChannelDetail(snapshot.data())
				})

			db.collection('room')
				.doc(roomId)
				.collection('messages')
				.orderBy('time', 'asc')
				.onSnapshot((snapshot) => {
					setMessages(
						snapshot.docs.map((doc) => {
							return doc.data()
						})
					)
				})
		}
	}, [roomId])

	const newMessages = messagesByDate(messages)

	return (
		<div className='chat'>
			<div className='chat__header'>
				<div className='chat__headerLeft'>
					<h4>
						<strong># {channelDetail?.name}</strong>
						<i className='far fa-star'></i>
					</h4>
				</div>
				<div className='chat__headerRight'>
					<p>
						<i className='fas fa-info-circle'></i> Details
					</p>
				</div>
			</div>

			<div className='chat__messages'>
				{newMessages.map((messagesOfTheDay) => {
					return (
						<div className='chat__ofTheDay' key={messagesOfTheDay[0]}>
							<div className='chat__today'>
								<hr />
								<button>{messagesOfTheDay[0]}</button>
								<hr />
							</div>

							{messagesOfTheDay[1].map(({ message, user, userImage, time }) => (
								<Message
									key={time}
									message={message}
									user={user}
									userImage={userImage}
									time={time}
								/>
							))}
						</div>
					)
				})}
			</div>

			<ChatInput channelName={channelDetail?.name} channelId={roomId} />
		</div>
	)
}

export default Chat
