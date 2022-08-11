import React, {useState} from 'react'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'

export default function Modal() {
  // Inintializing the total pledge amount
  var Total=89000;
  // Overlay effect useState
  const [modal, setModal] = useState(false);
  // Pledge component UseState
  const [pledge, setPledge] = useState(false); 
  // Total pledge value State 
  const [backed, setBacked] = useState(Total);
  // State for progress bar for dynamicity
  const [prog, setProg] = useState(0.001*Total);

  // HandleChange for pledging
function handleChange(event){
  Total= parseInt(event.target.value);
}
//pledging Progress Bar 
function ProbBar(){
  setProg(prog)
}

function AddPledge(event){  
 setBacked((prev)=>
  parseInt(prev+ Total)  
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
   
   />}
   {/* <div className="testContainer"> <button className="continue"  onClick={AddPledge}>Continue</button></div>
   <input type="number" min='25' onChange={handleChange}  className='amount' name="pledge-value" /> */}
      <Monitor 
      openPledge={setPledge}
      active={handleClick}
      deactive={closeModal}/>
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
      {modal &&<div className="overlay" onClick={handleClick}></div>}
    </div>
    
  )
}
