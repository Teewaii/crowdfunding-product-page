import React from 'react'
import './Nav.css'
import hamb from "../../images/icon-hamburger.svg"

export default function Nav() {
  return (
    <div className='Nav-bar pad'>
      <div className="logo-container"><h1 className="logo">crowdfund</h1></div>
      <div className="navigation">
        <ul className="list-items">
          <li><a href="#">About</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
        <div className="mobile-menu">
          <img src={hamb} alt="hamburger" className="hamburger" />
        </div>
      </div>
    </div>
  )
}
