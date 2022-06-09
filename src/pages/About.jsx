import { Footer, Main } from "../components";

import Header from '../components/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function About() {
    return ( 
        <div className="wrapper">
            <Header></Header>
            
            <div className="main">
         <div className="container">
       <div className="main__container">
         <div className="main__menu">
         
         <div className="main__logo">
           <h1>Clothing store</h1>
         </div>
         <hr className='hr__menu'></hr>
         <Link to="/">
           <div  className="home">Home</div></Link>
           
           <hr  className='hr__menu'></hr>
           <div className="shop">Shop</div>
           <hr  className='hr__menu'></hr>
           <div className="about"><b>About</b></div>
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

        </div>
     );
}

export default About;