import './CSS/Chat.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import Message from './Message'

function Chat() {
	const { roomId } = useParams()
	const [channelDetail, setChannelDetail] = useState(null)
	const [messages, setMessages] = useState(null)

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
				.onSnapshot((snapshot) => {
					setMessages(snapshot.docs.map((doc) => doc.data()))
				})
		}
	}, [roomId])
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
				{messages?.map(({ title, body, user, userImage, time }) => (
					<Message
						title={title}
						body={body}
						user={user}
						userImage={userImage}
						time={time}
					/>
				))}
			</div>
		</div>
	)
}

export default Chat
