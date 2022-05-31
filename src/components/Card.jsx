import React from 'react';




function Card({name, price, imageUrl}) {
  

  
   
    return (  
    <div className="shirt__1 shirt">
    <a href=""><img src={imageUrl} alt="" />
    <p>{price}</p></a>
  </div> 
  );
}

export default Card;