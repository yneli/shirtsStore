function Drawer() {
    return ( 

      <div className="overlay">
        <div className="drawer">
          <div className="cart__drawer">
            <div className="h2">Cart</div>
          </div>
          <div className="items">
          <div className="items__drawer">
            <div className="items__image">
              <img  height={70} src="./img/tshirt1.png" alt="" />
            </div>
            <div className="items__text">
              <p>streat-shirt</p>
              <b>1.533,99 RUB</b>
            </div>
            <div className="items__button">
              <img src="./img/btn-remove.svg" alt="" />
            </div>
          </div>
         
          </div>
          
          <div className="cartTotalBlock">
            <ul className="total__text">
              <li className="total__price">
                <span className="total__span">Total:</span>
                
                <b>1.533.99 rub</b>
              </li>
            </ul>
            <button className="greenButtom">CHECKOUT
            </button>
          </div>
        </div>
      </div>
     );
    
}

export default Drawer;