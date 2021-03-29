import React from 'react'
import { 
       FaComment, 
       FaHeart, 
       FaLeaf, 
       FaRegChartBar, 
       FaRegCheckCircle, 
       FaRetweet 
    } from 'react-icons/fa'

const Posts = () => {
    return (
        <div className="postss">
             <div className="postss_first">
                 <div className="posts_first_img">
                     <img src="/images/sandy.jpg" alt="profile img" />
                 </div>
                 <div className="posts_first_name">
                     <strong>Sandhuya Sharma</strong> 
                     <FaRegCheckCircle className="verify"/>  
                 </div>
                 <div className="posts_first_username">
                     @sandhya2304 .
                     <span>6 m</span>
                 </div>
             </div>
             
             <div className="posts_details">
                 <div className="postss_details_msg">
                 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                 by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                 Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                 </div>
                 <div className="postss_details_img">
                     <img src="/images/rottie.jpg" alt="dog" />
                 </div>
                 <div className="reactions">
                    <span><FaComment className="re" />45</span> 
                    <span><FaRegChartBar className="re"/>4</span> 
                    <span><FaRetweet className="re"/>16</span>
                    <span><FaHeart  className="re"/>345</span>
                   
                 </div>
             </div>
        </div>
    )
}

export default Posts;
