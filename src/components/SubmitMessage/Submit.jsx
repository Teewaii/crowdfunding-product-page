import React from 'react'
import '../SubmitMessage/Submit.css'
import '../btn/btn.css'
import success from '../../images/icon-check.svg'
export default function Submit({ deactive, submit }) {
    function Closemsg() {
        submit(false)
        deactive()
        window.scrollTo(0, 0);
    }
    return (
        <div className='submit-wrapper'>
            <div className="succ"><img src={success} alt="check-icon" className="success" /></div>
            <h1 className="heading">Thanks for your support!</h1>
            <p className="body">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>
            <button className="got-it continue" onClick={Closemsg}>Got it!</button>
        </div>
    )
}
