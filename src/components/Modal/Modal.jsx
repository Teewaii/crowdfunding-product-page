import React, { useState } from 'react'
import arrow from '../../images/arrows.png'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'
import Submit from '../SubmitMessage/Submit'

export default function Modal() {
  // Inintializing the total pledge amount
  var Total = 89914;
  // Overlay effect useState
  const [modal, setModal] = useState(false);
  // Pledge component UseState
  const [pledge, setPledge] = useState(false);
  // Total pledge value State 
  const [backed, setBacked] = useState(Total);
  // State for progress bar for dynamicity
  const [prog, setProg] = useState(0.001 * Total);

  const [submitMsg, setSubmitMsg] = useState(false);




  // HandleChange for pledging
  function handleChange(event) {
    Total = parseInt(event.target.value);
  }
  //pledging Progress Bar 
  function ProbBar() {
    setProg(prog)
  }

  function AddPledge(event) {
    setBacked((prev) =>
      parseInt(prev + Total)
    )

  }
  // Disable overlay and Pledge Component
  function handleClick() {
    setModal(!modal)
    setPledge(false)
  }

  // Close modal by clicking the X-icon
  function closeModal() {
    setModal(false)
    // setCloseIcon(true)
  }

  return (

    <div className="modal-wrapper ">

      <Nav
        active={handleClick}
        deactive={closeModal}
      />

      {pledge && <Pledge
        closePledge={setPledge}
        openPledge={setPledge}
        deactive={closeModal}
        Increase={AddPledge}
        Change={handleChange}
        submit={setSubmitMsg}

      />}
      {submitMsg && <Submit
        deactive={closeModal}
        submit={setSubmitMsg} />}
      <Monitor
        openPledge={setPledge}
        active={handleClick}
        deactive={closeModal} />
      <Tracker
        backed={backed}
        Progress={prog}
      />
      <About
        openPledge={setPledge}
        active={handleClick}
        deactive={closeModal}
      />

      {/* Overlay activation */}
      {modal && <div className="overlay" onClick={handleClick}></div>}
      {/* <div className="toTop"><img src={arrow} alt="" /></div> */}
    </div>


  )
}
