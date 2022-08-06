import React from 'react'

export default function Pledge() {
    return (
        <div className="pledges-wrapper pad">
            <h1 className="heading">Back this project</h1>
            <p className='body'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <div className="No-reward card">
                <div className="head">
                    <form>
                        <label htmlFor='No-reward' className='NoReward'>
                            <input type="radio" name="no-reward" value="Pledge with no reward" />
                            Pledge with no reward
                        </label>
                    </form>

                    <h1 className="heading"> Pledge with no reward</h1>
                </div>
                <p className="body">Choose to support us without a reward if you simply believe in our project. As a backer,
                    you will be signed up to receive product updates via email.</p>
                <div className="bottom">
                    <div className="slots">
                        <h1 className="num">101</h1>
                        <p>left</p>
                    </div>
                </div>
            </div>

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
                </div>
            </div>
        </div>
    )
}
