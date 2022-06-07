import React from 'react'
import  { Cart }  from './buttons'
import Drawer from './Drawer.jsx'
import Card from './Card'





function Header({items}) {


  console.log(items)



    const [cartOpened, setCartOpened] = React.useState(false);
    const [CartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    


    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
    };


    const onAddToCart = (obj) => {
      setCartItems((prev) => [...prev, obj]);
    };

    const onRemove = (id) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    
    
    
    return ( 
      <div>
      <header className="header">

      <div className="container">

    {cartOpened && <Drawer onRem={onRemove}  shirts={CartItems} onClose={() => setCartOpened(false)}/>}

     <div className="header__container">
    <div className="header__items">
      <div className="search_block">
      <form className="search">
        <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" type="submit" aria-label="Поиск"><path fill="currentColor" d="M11 5a6 6 0 1 0 0 12c1.619 0 3.169-.639 4.24-1.656a1.101 1.101 0 0 1 1.537.019l4.93 4.93a1 1 0 0 1-1.414 1.414l-4.346-4.346A8.298 8.298 0 0 1 11 19a8 8 0 1 1 7.875-6.587 1 1 0 0 1-1.968-.351A6 6 0 0 0 11 5Z"></path></svg>
      </button>
      <input onChange={onChangeSearchInput}    className="search_input" type="text" placeholder="Search"/>
       </form>
      </div>
      <Cart onClickCart={() => setCartOpened(true)}></Cart>
    </div>
    </div>
    <hr color='black' size='1'></hr>
    </div>
  </header> 
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
      <div className="content">
      <div className="container">
    <div className="content__container">         
      <div className="t-shirts__content">
        <div  className="shirts__item">
         {items.filter((item) =>  item.name.includes(searchValue)).map(obj => <Card onPlus={(obj) => onAddToCart(obj)}  key={obj.id} {...obj}/>)}  
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
  </div>
  </div>
  
  </div>
  );
}

export default Header;