import React from 'react';
import CreateTweets from './CreateTweets';
import Posts from './Posts';

const Twittes = () =>{
    return(
        <div className="posts">
            <div className="posts_home">
               Home
            </div>
          <CreateTweets />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
    )
}

export default Twittes;