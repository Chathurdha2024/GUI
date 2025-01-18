import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu");/*Creating a state variable*/
    
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")}className={menu=="home"?"active":""}>home</Link>{/*if our menu is home this li tag will provide a one classname that is "active".If our menu is not home, it will provide one empty string*/} 
        <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu=="menu"?"active":""}>menu</a>{/*when the state is "menu", this second li tag will get the active classname(any of other three will not get the active classname)*/}
        <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact us")}className={menu=="contact us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
