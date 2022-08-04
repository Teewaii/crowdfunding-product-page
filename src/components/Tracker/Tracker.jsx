import React from 'react'
import './Tracker.css'
export default function Tracker() {
  return (
    <div className='card tracker-wrapper'>
      <div className="backed border">
        <h1 className="heading">$89,914</h1>
        <p className="body">of $100,000 backed</p>
      </div>
      <div className="backers border">
        <h1 className="heading">5,007</h1>
        <p className="body">total backers</p>
      </div>
      <div className="time-left border">
        <h1 className="heading">56</h1>
        <p className="body">days left</p>
      </div>
    </div>
  )
}
