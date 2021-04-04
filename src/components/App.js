import './CSS/App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login'

function App() {
	const [user, setUser] = useState('Naty')
	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className='app__body'>
						<Sidebar />
						<Switch>
							<Route path='/' exact></Route>

							<Route path='/room' exact></Route>

							<Route path='/room/:roomId' exact>
								<Chat />
							</Route>
						</Switch>
					</div>
				</>
			)}
		</Router>
	)
}

export default App
