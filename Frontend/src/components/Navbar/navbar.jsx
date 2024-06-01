import React,{useContext, useState,useRef} from 'react'
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link} from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext';
import nav_dropdown from "../assets/nav_dropdown.png";
//import Dropdown from '../Dropdown/Dropdown';
//import Catageroy from '../../pages/catageroy';
///import all_product from '../assets/all_product.js';
//import item from '../items/item.jsx';
//import category from './category.jsx';
//import Category from '../../pages/Category';

const Navbar = () => {
    
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef= useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.toggle.classList.toggle('open');
    }
    
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>StyleMart</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:"rgb(24, 232, 247)"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}<span></span></li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:"rgb(24, 232, 247)"}} to="/mens">Mens</Link>{menu==="mens"?<hr/>:<></>}<span></span></li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:"rgb(24, 232, 247)"}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}<span></span></li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:"rgb(24, 232, 247)"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}<span></span></li> 
        </ul>
        
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/mens')}}>logout</button>
          :<Link to='/login'><button>Login</button></Link>
          }
             <Link to='/cart'><img src = {cart_icon} alt=""/></Link> 
            <div className='nav-cart-count'>{getTotalCartItems()} </div>
        </div>
        <br/>
        
      </div>
       
   
  )
}

export default Navbar
