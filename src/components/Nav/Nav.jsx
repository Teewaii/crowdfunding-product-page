import React, { useState } from 'react'
import './Nav.css'
import hamb from "../../images/icon-hamburger.svg"
import closeMenu from "../../images/icon-close-menu.svg"

export default function Nav({ active, deactive }) {

  const [toggle, setToggle] = useState(false)
  const [closeIcon, setCloseIcon] = useState(false)

  function closeModal() {
    return true
  }
  function toggleMenu() {
    active()
    setToggle(prevToggle => !prevToggle)
    setCloseIcon(prevClose => !prevClose)

  }
  function closMenu() {
    setToggle(prevToggle => !prevToggle)
    setCloseIcon(prevClose => !prevClose)
    deactive()
  }



  return (
    <div className='Nav-bar pad'>
      <div className="logo-container"><h1 className="logo">crowdfund</h1></div>
      <div className="navigation">
        <ul className={toggle ? "list-items" : "list-items  hide"} >
          <li><a href="#">About</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
        <div className="mobile-menu">
          <img src={hamb} alt="hamburger" className={toggle ? "hamburger hide" : "hamburger"} onClick={toggleMenu} />
          <img src={closeMenu} alt="close-menu" className={closeIcon ? "close-menu" : "close-menu  hide"} onClick={closMenu} />
        </div>
      </div>
    </div >
  )
}
