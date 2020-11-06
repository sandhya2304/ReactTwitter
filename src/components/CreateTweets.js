import React from 'react'
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from 'react-icons/fa'

const CreateTweets = () => {
    return (
        <div className="create">
             <div className="create_first">
                 <div className="create_img">
                     <img src="/images/sandy.jpg" alt="profile img" /> 
                 </div>
                 <div className="create_input">
                     <input type="text" className="create-control" placeholder="Whats happening?" />
                 </div>
             </div>
             <div className="create_second">
                <div className="create_icons">
                 <FaRegImage className="ic" />
                 <FaRegListAlt className="ic"/>
                 <FaRegSmile className="ic" />
                 <FaCalendarCheck className="ic"/>
                 </div> 
                 <div className="create_btn">
                    <a href="">Tweet</a>
                 </div>
             </div>
        </div>
    )
}

export default CreateTweets;
