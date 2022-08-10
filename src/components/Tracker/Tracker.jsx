import React from 'react'
import './Tracker.css'
export default function Tracker({backed}) {
  return (
    <div className=' tracker-wrapper'>
      <div className="tracks">
        <div className="backed border">
          <h1 className="heading">${backed}</h1>
          <p className="body">of $100,000 backed</p>
        </div>
        <div className="backers border">
          <h1 className="heading">5,000</h1>
          <p className="body">total backers</p>
        </div>
        <div className="time-left border">
          <h1 className="heading">56</h1>
          <p className="body">days left</p>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  )
}
