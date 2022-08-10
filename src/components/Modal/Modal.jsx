import React, {useState} from 'react'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [pledge, setPledge] = useState(false);
  // const [closeIcon, setCloseIcon] = useState(false);

  function handleClick() {
    setModal(!modal)
    setPledge(false)
    // setCloseIcon(false)
  }
  function closeModal() {
    setModal(false)
    // setCloseIcon(true)
  }
  return (
    
    <div className="modal-wrapper ">




      <Nav 
      active={handleClick}
      deactive={closeModal}
      // closemenu={setCloseIcon}
      />
      
   {pledge && <Pledge 
   closePledge={setPledge}
   openPledge={setPledge}
   deactive={closeModal}
   />}
      <Monitor 
      openPledge={setPledge}
      active={handleClick}
      deactive={closeModal}/>
      <Tracker />
      <About
      openPledge={setPledge}
      active={handleClick}
      deactive={closeModal}
      />
      {modal &&<div className="overlay" onClick={handleClick}></div>}
    </div>
    
  )
}
