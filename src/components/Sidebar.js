import React from 'react';
import { FaTwitter ,FaHome } from "react-icons/fa";

const Sidebar = () =>{
   return(
       <div className="sidebar">
           <ul>
               <li><a href=""><FaTwitter/></a></li>
               <li><a href=""><FaHome/>Home</a></li>
           </ul>
       </div>
   )
}


export default Sidebar;