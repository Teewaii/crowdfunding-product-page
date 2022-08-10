import React, {useState} from 'react'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [pledge, setPledge] = useState(true);
  // const [closeIcon, setCloseIcon] = useState(false);

const [backed, setBacked] = useState(89000);
const [amount, setAmount] = useState('20');

function handleChange(event){
setAmount(event.target.value)
}


function AddPledge(event){
  setBacked(prev=>{
    console.log(prev+event.target.value)
    
  })
}

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
   newPledge={AddPledge}
   
   />}
      <Monitor 
      openPledge={setPledge}
      active={handleClick}
      deactive={closeModal}/>
      <Tracker backed={backed} />
      <About
      openPledge={setPledge}
      active={handleClick}
      deactive={closeModal}
      />
      {modal &&<div className="overlay" onClick={handleClick}></div>}
    </div>
    
  )
}
