import React from 'react'

const TrendsKeyword = () => {

   const[state,setState] = React.useState([
       {
           id: 1,
           country:'Trends in India',
           keyword:'Rottweiler',
           totalKeyword:'3000'
        },
        {
            id: 2,
            country:'Trends in America',
            keyword:'Husky',
            totalKeyword:'23100'
         },
         {
            id: 3,
            country:'Trends in Japan',
            keyword:'BullDog',
            totalKeyword:'15000'
         },
   ]);

    return (
        <div className="keywords">
             <div className="key">
            <div className="keyword__heading">
                <h4>Trends For You </h4>
            </div>      
            {
                state.map((keyword) =>(
                    <div key={keyword.id}>

            <div className="country">
                <h4>{keyword.country} </h4>
            </div> 
            <div className="keyword_name">
                <strong>{keyword.keyword}</strong>
            </div>     
            <div className="keyword_tweets">
                <strong>{keyword.totalKeyword}</strong>
            </div>  
                    
                    </div>
                ))
            }
           
            </div>           
        </div>
    )
}

export default TrendsKeyword;
