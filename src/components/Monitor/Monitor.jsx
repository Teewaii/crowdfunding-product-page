import React from 'react'
import './Monitor.css'
import '../btn/btn.css'
import icon from '../../images/logo-mastercraft.svg'
import bookmarkIcon from '../../images/icon-bookmark.svg'
export default function Monitor() {
    return (
        <div className="monitor-wrapper">
            <div className="monitor-icon">
                <img src={icon} alt="" />
            </div>
            <h1 className="heading"> Mastercraft Bamboo Monitor Riser</h1>
            <p className="body">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className="bookmark">
                <button className="btn">Back this project</button>
                <div className="bookmark-icon">
                    <img src={bookmarkIcon} alt="" />
                    <div className="bookmark-text hideOnMobile">
                        <h1>Bookmark</h1>
                    </div>
                </div>

            </div>
        </div>

    )
}
