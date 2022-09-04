import React from 'react'
import './Tracker.css'
export default function Tracker({ backed, Progress }) {
  return (
    <div className=' tracker-wrapper'>
      <div className="tracks">
        <div className="backed border">
          <h1 className="heading">${backed}</h1>
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

      {/* In-line style for the progress bar */}
      <div className="progress-container"
        style={{
          backgroundColor: "#e4eaec",
          width: "95%",
          height: "16px",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: " 15px"
        }}>
        <div className="progress-bar"
          style={{
            backgroundColor: "#3cb4ac",
            width: `${Progress}%`,
            height: "100%",
            borderRadius: "10px"
          }}
        ></div>
      </div>
    </div>
  )
}
