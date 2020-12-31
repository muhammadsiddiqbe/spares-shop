import { Fragment } from 'react'
import { Switch } from "react-router-dom"

import Public from "./Components/Router/Public"
import Private from "./Components/Router/Private"


import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer";

import ShopsPage from "./Components/Pages/Shops/shops"
import HomePage from "./Components/Pages/Home/Home"
import PromotionsPage from "./Components/Pages/Promotions/promotions"
import ShippingPage from './Components/Pages/Shipping/shipping'
import LoginPage from './Components/Pages/Login/login'


function App () {


	return (
		<Fragment>
			<div className='container'>
				<Header/>

			</div>

			


			<Switch>
				<Public path="/" component={ HomePage } exact />
				<Public path='/login' component={ LoginPage } />

				<Private path='/shops' component={ ShopsPage } exact/>
				<Private path='/promotions' component={ PromotionsPage } exact/>
				<Private path='/shipping' component={ ShippingPage } exact/>
				<Private path='/dashboard' component={ Dashboard } />
			</Switch>

			<Footer />
			
		</Fragment>
	)
}


export default App

function Dashboard() {
	return (
		<h1>Dashboard</h1>
	)
}


