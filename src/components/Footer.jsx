import React from 'react'

function Footer() {
    return ( <div className="footer">
    <hr color='black' size='1'></hr>
      <div className="footer__conteiner">
        <div className="footer__text">Copyright © 2022, clothing-store. Powered by yneli</div>
        <div className="footer__icons">
          <img src="./img/visa.png" alt="" />
          <img src="./img/master.png" alt="" />

        </div>

      </div>
    </div> );
}

export default Footer;