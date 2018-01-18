import React from 'react'
import ReactDOM from 'react-dom'
import Site from './Site'
import { BrowserRouter as Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './style.scss'


ReactDOM.render(
  <Router>
    <Site />
  </Router>,
  document.getElementById('root')
)