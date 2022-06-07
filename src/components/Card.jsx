import React from 'react';




function Card({name, price, imageUrl, onPlus}) {

  
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({name, imageUrl, price});
    setIsAdded(!isAdded)
  }

  
   
    return (  
    <div onClick={onClickPlus}  className="shirt__1 shirt">
    <img height={180} width={180} src={imageUrl} alt="" />
    <p >{name}{price}</p>
    
  </div> 
  );
}

export default Card;