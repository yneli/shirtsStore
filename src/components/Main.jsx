import React from 'react'


function Main() {
    return ( 
        <div className="main">
         <div className="container">
       <div className="main__container">
         <div className="main__menu">
         
         <div className="main__logo">
           <h1>Clothing store</h1>
         </div>
         <hr className='hr__menu'></hr>
           <a href=""><div onClick={()=> alert('click')} className="home">Home</div>
           </a>
           <hr  className='hr__menu'></hr>
           <div className="shop">Shop</div>
           <hr  className='hr__menu'></hr>
           <div className="about">About</div>
           <hr className='hr__menu' ></hr>
           <div className="socials">
           <div className="social__items">
             <a href="https://vk.com/im"><img src="./img/vk.png" alt="" /></a>
             <a className="SocialItem" href=""><img src="./img/fc.png" alt="" /></a>
             <a  className="SocialItem" href=""><img src="./img/inst.png" alt="" /></a>
           </div>
         </div>
         </div>
         
         <div className="main__img">
         <img width='700' height='343' src="../img/dudes.png" alt="" />
       </div>
       </div>
       </div>
       </div>
     );
}

export default Main;