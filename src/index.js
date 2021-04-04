import React from 'react'
import ReactDOM from 'react-dom'
import { StateProvider } from './context'

import App from './components/App'
import reducer, { initialState } from './context/reducer'

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>,
	document.querySelector('#root')
)
