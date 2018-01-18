import React from 'react'
import NavMenu from './NavMenu'
import { 
  Switch, 
  Route 
} from 'react-router-dom'
import AboutPage from './AboutPage'
import LandingPage from './LandingPage'
import Footer from './Footer'

const Site = () => {
  return (
    <div className='main'>
      <NavMenu />
      <Route exact path='/' component={ LandingPage } />
      <Route path='/about' component={ AboutPage } />
      <Footer />
    </div>
  )
}

export default Site