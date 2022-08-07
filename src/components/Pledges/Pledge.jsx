import React, { useState } from 'react'
import '../btn/btn.css'
import './Pledge.css'
import '../btn/amount.css'
import closeModalIcon from '../../images/icon-close-modal.svg'
export default function Pledge() {
    const [closeModal, setCloseModal] = useState(true)

    function handleClick() {
        setCloseModal(prev => !prev)
    }
    return (
        <div className={closeModal ? "pledges-wrapper pad" : "hide"}>
            <div className="Modalhead ">
                <h1 className="heading">Back this project</h1>
                <img src={closeModalIcon} alt="Close Modal icon" className="closeModal" onClick={handleClick} />
            </div>
            <p className='body'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            {/* No-reward Container */}
            <div className="No-reward pledge-card">
                <div className="head">

                    <label className='NoReward'>
                        <input type="radio" name="pledge" id='No-reward' value='No Reward' />
                        Pledge with no reward
                    </label>
                    <div className="slots">
                        <h1 className="num">101</h1>
                        <p>left</p>
                    </div>

                </div>
                <p className="body">Choose to support us without a reward if you simply believe in our project. As a backer,
                    you will be signed up to receive product updates via email.</p>

            </div>

            {/* Bamboo Container */}

            <div className="bamboo-stand pledge-card">
                <div className="head">
                    <label className='Bamboo'>
                        <input type="radio" name="pledge" id='Bamboo' value='Bamboo Stand' />
                        Bamboo Stand
                    </label>
                    <h1 className="pledge">Pledge $25 or more</h1>
                    <div className="slots">
                        <h1 className="num">101</h1>
                        <p>left</p>
                    </div>

                </div>
                <p className="body">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.</p>
                <div className="bottom">
                    <p className='Enter'>Enter your pledge</p>
                    <div className="pledge-container">
                        <form method="post" action="#">
                            <input type="number" min='25' placeholder='$' className='amount' />
                        </form>
                        <button className="continue">Continue</button>
                    </div>
                </div>
            </div>


            {/* Black Edition */}
            <div className="Black-Edition-Stand pledge-card ">
                <div className="head">

                    <label className='BlackEdition'>
                        <input type="radio" id='Black-edition' name="pledge" value='Black Edition Stand' />
                        Black Edition Stand
                    </label>
                    <h1 className="pledge">Pledge $75 or more</h1>
                    <div className="slots">
                        <h1 className="num">64</h1>
                        <p>left</p>
                    </div>

                </div>
                <p className="body">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.</p>
                <div className="bottom">
                    <p className='Enter'>Enter your pledge</p>
                    <div className="pledge-container">
                        <form method="post" action="#">
                            <input type="number" min='75' placeholder='$' className='amount' />
                        </form>
                        <button className="continue">Continue</button>
                    </div>
                </div>
            </div>


            {/* Mahogany Container */}
            <div className=" Mahogany-Special pledge-card ">
                <div className="head">

                    <label className='MahoganySpecial'>
                        <input type="radio" id='Mahogany-special' name="pledge" value='Mahogany Special' />
                        Mahogany Special Edition
                    </label>
                    <h1 className="pledge">Pledge $200 or more</h1>
                    <div className="slots">
                        <h1 className="num">0</h1>
                        <p>left</p>
                    </div>

                </div>
                <p className="body">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.</p>
                <div className="bottom">
                    <p className='Enter'>Enter your pledge</p>
                    <div className="pledge-container">
                        <form method="post" action="#">
                            <input type="number" min='200' placeholder='$' className='amount' />
                        </form>
                        <button className="continue">Continue</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
