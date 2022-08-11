import React, {useState} from 'react'
import './Modal.css'
import Nav from '../Nav/Nav'
import Monitor from '../Monitor/Monitor'
import Tracker from '../Tracker/Tracker'
import About from '../About/About'
import Pledge from '../Pledges/Pledge'

export default function Modal() {
  var Total=89000;
  const [modal, setModal] = useState(false);
  const [pledge, setPledge] = useState(false);
  const [prog, setProg] = useState(0.001*Total);
  // const [closeIcon, setCloseIcon] = useState(false);

const [backed, setBacked] = useState(Total);

function handleChange(event){
  Total= parseInt(event.target.value);
}

function ProbBar(){
  setProg(prog)
}

function AddPledge(event){
  
 setBacked((prev)=>
  parseInt(prev+ Total)
  
 )

  
  // setBacked(prev=>prev+Total) 
  
}
// function AddPledge(event){
//   setBacked(prev=>{
//     console.log(prev+event.target.value)    
//   })
// }

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
   Increase={AddPledge}
   Change={handleChange}   
   
   />}
   <div className="testContainer"> <button className="continue"  onClick={AddPledge}>Continue</button></div>
   <input type="number" min='25' onChange={handleChange}  className='amount' name="pledge-value" />
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
      {modal &&<div className="overlay" onClick={handleClick}></div>}
    </div>
    
  )
}
