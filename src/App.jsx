import { Fragment } from 'react'
import { Switch, Route } from "react-router-dom"

import HomePage from "./Components/Pages/Home/Home"

import Public from "./Components/Router/Public"
import Private from "./Components/Router/Public"


function App () {


	return (
		<Fragment>
			

			<Switch>

				<Public path="/" Component={ HomePage } exact />

				<Private path="/private" Component={Private} exact />

			</Switch>
		</Fragment>
	)
}

export default App

