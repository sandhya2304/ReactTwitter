import React from 'react'
import { FaSistrix } from 'react-icons/fa'

const Trends = () => {
    return (
        <div className="trends">
            <div className="trends_search">
              <input type="text" className="trend_control" placeholder="search twitter"  />
              <div className="trend_icon">
                <FaSistrix className="search" />
              </div>
              
            </div>
        </div>
    )
}

export default Trends;
