import React,{useState} from 'react'
// import Modal from 'react-modal'
import './About.css'
import '../btn/btn.css'
import Pledge from '../Pledges/Pledge'
// import '../Card/Card.css'

export default function About() {
    // const [modalIsOpen, setIsOpen] = useState(false)

    // function openModal (){
    //     setIsOpen(true);
    // }
    // function closeModal (){
    //     setIsOpen(false);
    // }


    return (
        <div className="about-wrapper pad">
            <h1 className="heading">About this project</h1>
            <p className='body'> The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <div className="bamboo-stand card">
                <div className="head">
                    <h1 className="heading">Bamboo Stand</h1>
                    <h1 className="pledge">Pledge $25 or more</h1>
                </div>
                <p className="body">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.</p>
                <div className="bottom">
                    <div className="slots">
                        <h1 className="num">101</h1>
                        <p>left</p>
                    </div>
                    <button className="reward">Select Reward</button>
                </div>
            </div>

            <div className="Black-Edition-Stand card ">
                <div className="head">
                    <h1 className="heading">Black Edition Stand</h1>
                    <h1 className="pledge">Pledge $75 or more</h1>
                </div>
                <p className="body">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.</p>
                <div className="bottom">
                    <div className="slots">
                        <h1 className="num">64</h1>
                        <p>left</p>
                    </div>
                    <button className="reward">Select Reward</button>
                </div>
            </div>

            <div className=" Mahogany-Special card ">
                <div className="head">
                    <h1 className="heading"> Mahogany Special Edition</h1>
                    <h1 className="pledge">Pledge $200 or more</h1>
                </div>
                <p className="body">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.</p>
                <div className="bottom">
                    <div className="slots">
                        <h1 className="num">0</h1>
                        <p>left</p>
                    </div>
                    <button className="reward">Out of Stock</button>
                </div>
            </div>
            {/* <Modal isOpen={openModal}>
               <Pledge/> 
            </Modal> */}
        </div>
    )
}
