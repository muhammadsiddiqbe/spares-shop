import { Fragment } from 'react'
import { Switch } from "react-router-dom"

import Public from "./Components/Router/Public";
import Private from "./Components/Router/Private"


import Header from "./Components/Header/header";
import ShopsPage from "./Components/Pages/Shops/shops"
import HomePage from "./Components/Pages/Home/Home"
import PromotionsPage from "./Components/Pages/Promotions/promotions"
import ShippingPage from './Components/Pages/Shipping/shipping';


function App () {


	return (
		<Fragment>
			<div className='container'>
				<Header/>

			</div>


			<Switch>
				<Public path="/" component={ HomePage } exact />
				<Public path='/shops' component={ ShopsPage } exact/>
				<Public path='/promotions' component={ PromotionsPage } exact/>
				<Public path='/shipping' component={ ShippingPage } exact/>

				<Private path='/dashboard' component={ Dashboard } />
			</Switch>
		</Fragment>
	)
}

export default App

function Dashboard() {
	return (
		<h1>Dashboard</h1>
	)
}


