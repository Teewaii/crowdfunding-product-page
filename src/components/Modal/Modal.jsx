import React from 'react'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'

export default function Modal() {
  return (
    
    <div className="modal-wrapper">




      <Nav />
      <Pledge />
      <Monitor />
      <Tracker />
      <About />
    </div>
  )
}
