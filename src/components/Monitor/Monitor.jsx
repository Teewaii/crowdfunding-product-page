import React, { useState } from 'react'
import { ImBookmark } from 'react-icons/im';
import './Monitor.css';
import '../btn/btn.css';
import icon from '../../images/logo-mastercraft.svg'
import bookmarkIcon from '../../images/icon-bookmark.svg'
export default function Monitor({ active, deactive, openPledge }) {
    function openP() {
        active();
        openPledge(true)
        window.scrollTo(0, 0);
    }

    const [bookmark, setBookmark] = useState(true);

    function handleChange() {
        setBookmark(prev =>
            !prev
        )
    }

    return (
        <div className="monitor-wrapper">
            <div className="monitor-icon">
                <img src={icon} alt="" />
            </div>
            <h1 className="heading"> Mastercraft Bamboo Monitor Riser</h1>
            <p className="body">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className="bookmark">
                <button className="btn-back" onClick={openP}>Back this project</button>
                <div className="bookmark-icon">
                    {bookmark ? <div className="bok">
                        <ImBookmark className='mark-icon round' onClick={handleChange} />
                    </div> : null}
                    <img src={bookmarkIcon} alt="" onClick={handleChange} />
                    <div className="bookmark-text hideOnMobile">
                        {bookmark ? <h1 className='mark'>Bookmark</h1> : <h1>Bookmark</h1>}
                    </div>
                </div>

            </div>
        </div>

    )
}
