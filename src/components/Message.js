import './CSS/Message.css'
import React from 'react'

function Message({ title, body, user, userImage, time }) {
	return (
		<div className='message'>
			<img src={userImage} alt='' />
			<div className='message__info'>
				<h4>
					{user} <span>{new Date(time?.toDate()).toDateString()}</span>
				</h4>
				<p>{title}</p>
				<p>{body}</p>
			</div>
		</div>
	)
}

export default Message
