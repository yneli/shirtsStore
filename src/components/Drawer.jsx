function Drawer({onClose, shirts, onRem}) {

  
  
  
  return ( 

      <div className="overlay">
        <div className="drawer">
          <div className="cart__drawer">
            <h2>Cart</h2>
            <img onClick={onClose}  width={25} height={25} src="/img/cancel.png" alt="Close" ></img>
          </div>
          <div className="items">
          
          {shirts.map((obj) => (
           <div className="items__drawer">
           <div className="items__image">
             <img  height={70} src={obj.imageUrl} alt="" />
           </div>
           <div className="items__text">
             <p>{obj.name}</p>
             <b>{obj.price}</b>
           </div>
           <div onClick={() => onRem(obj.id)} className="items__button">
             <img  src="./img/btn-remove.svg" alt="" />
           </div>
           </div>
          ))}
         




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