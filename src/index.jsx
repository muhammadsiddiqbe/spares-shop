import { BrowserRouter as Router } from "react-router-dom"
import { Provider as Authentication } from "./Components/Context/authentication";

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Authentication>
        <App />
      </Authentication>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)