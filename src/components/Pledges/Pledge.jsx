import React, { useState } from 'react'
import '../btn/btn.css'
import './Pledge.css'
import '../btn/amount.css'
import closeModalIcon from '../../images/icon-close-modal.svg'
export default function Pledge({ closeModal, deactive, closePledge, Change, submit }) {

    // const [check, setCheck] = useState('')

    // Add new pledge button
    function Add() {
        // Increase();
        // closePledge(false);
        // deactive()
        closePledge(false);
        submit(true);
        window.scrollTo(0, 0);
    }

    function closP() {
        closePledge(false);
        deactive()
    }

    return (
        <div className="pledges-wrapper pad" >
            <div className="Modalhead ">
                <h1 className="heading">Back this project</h1>
                <img src={closeModalIcon} alt="Close Modal icon" className="closeModal" />
            </div>
            <p className='body'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            {/* No-reward Container */}
            <label className="No-reward pledge-card " onClick={Add}>
                <div className="head">
                    <label className='NoReward'>
                        <input type="radio" name="pledge" id='No-reward' value='No Reward' />
                        Pledge with no reward
                    </label>

                </div>
                <p className="body">Choose to support us without a reward if you simply believe in our project. As a backer,
                    you will be signed up to receive product updates via email.</p>

            </label>

            {/* Bamboo Container */}

            <label for="Bamboo" className="bamboo-stand pledge-card" >
                <div className="head">
                    <label className='default'>
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
                            <span>$</span>
                            <input type="number" min='25' onChange={Change} className='amount' name="pledge-value" placeholder='25' />
                        </form>
                        <button className="continue" onClick={Add} >Continue</button>
                    </div>
                </div>
            </label>


            {/* Black Edition */}
            <label className="Black-Edition-Stand pledge-card" >
                <div className="head">

                    <label className='default'>
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
                            <span>$</span>
                            <input type="number" min='75' className='amount' name="pledge-value" placeholder='75' />
                        </form>
                        <button className="continue" onClick={Add}>Continue</button>
                    </div>
                </div>
            </label>


            {/* Mahogany Container */}
            <label className=" Mahogany-Special pledge-card out-of-stock">
                <div className="head">

                    <label className='default'>
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
                            <span>$</span>
                            <input type="number" min='200' className='amount' />
                        </form>
                        <button className="continue">Continue</button>
                    </div>
                </div>
            </label>

        </div>
    )
}
