import './CSS/SidebarOption.css'
import React from 'react'

function SidebarOption({ icon, title, id }) {
	return (
		<div className='sidebarOption' id={id}>
			{/* if we pass icon value then it's going to render a heading */}
			{/* when no icon is passed then we are going to render a channel */}
			{icon ? (
				title === 'Channels' ? (
					<div className='sidebarOption__icon'>
						{icon}
						<p>{title}</p>
						<i className='fas fa-plus'></i>
					</div>
				) : (
					<div className='sidebarOption__icon'>
						{icon}
						<p>{title}</p>
					</div>
				)
			) : (
				<h3 className='sidebarOption__channel'>
					<span className='sidebarOption__hash'> # </span>
					{title}
				</h3>
			)}
		</div>
	)
}

export default SidebarOption
