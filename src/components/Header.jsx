import React from "react";
import Drawer from '../components/Drawer.jsx'
import axios from 'axios'
import  { Cart }  from '../components/buttons'



function Header() {

    const [cartOpened, setCartOpened] = React.useState(false);
    const [CartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    


    React.useEffect(() => {


      axios.get("https://62961a4e810c00c1cb6f3657.mockapi.io/cart").then((res) =>{
        setCartItems(res.data);
      })


    }, []);
    



    const onRemove = (id) => {
        axios.delete(`https://62961a4e810c00c1cb6f3657.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      };

      const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
      };
  



    return ( 
        <header className="header">

{cartOpened && <Drawer onRem={onRemove}  shirts={CartItems} onClose={() => setCartOpened(false)}/>}
        <div className="container">
  
      
  
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
     );
}

export default Header;