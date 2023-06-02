import './style.scss'
import './small-devices.scss'

import React from 'react'

const Header: React.FC = () => {
   return (
      <header id="header" className="container py-3">
         <div className="links">
            <a href="#" className="light-text active">
               Home
            </a>
            <a className="light-text" href="#">
               Guides
            </a>
            <a className="light-text" href="#">
               Flights
            </a>
            <a className="light-text" href="#">
               About
            </a>
         </div>
         <div className="action">
            <button className="btn-primary">Contact Us</button>
         </div>
      </header>
   )
}

export default Header
