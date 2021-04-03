import './CSS/App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
	return (
		<Router>
			<Header />
			<div className='app__body'>
				<Switch>
					<Route path='/' exact>
						<Sidebar />
					</Route>

					<Router path='/room' exact></Router>

					<Router path='/room/:roomId' exact></Router>
				</Switch>
			</div>
		</Router>
	)
}

export default App
