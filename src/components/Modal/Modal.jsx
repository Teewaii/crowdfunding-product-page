import React, {useState} from 'react'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'

export default function Modal() {
  const [modal, setModal] = useState(false)

  function handleClick() {
    setModal(!modal)
  }
  function closeModal() {
    setModal(false)
  }
  return (
    
    <div className="modal-wrapper ">




      <Nav />
      {/* {modal && <Pledge closeModal={setModal}/>} */}
      <Monitor />
      <Tracker />
      <About />
      {/* {modal &&<div className="overlay" onClick={handleClick}></div>} */}
      {modal &&<div className="overlay" onClick={handleClick}></div>}
    </div>
    
  )
}
