import React from 'react'
import Card from './Card'


function Content({items}) {
  

  
    return ( <div className="content">
    <div className="content__container">         
      <div className="t-shirts__content">
        <div className="shirts__item">
         {items.map(obj => <Card key={obj.id} {...obj}/>)}  
        </div>
      </div>
      
    </div>
    <div className="text__container">
    <div className="shirts__text">
        <p>An exclusive group focused on those who dream about the touge.
The group focuses on those who have racing in their blood and good taste for JDM inspired apparel.
TougeDreamer offers exclusive monthly giveaways to all mail partcipants and customers</p>
        </div>
  </div>
  </div> );
}

export default Content;