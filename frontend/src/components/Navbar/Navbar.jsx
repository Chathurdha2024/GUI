import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("menu");/*Creating a state variable*/

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")}className={menu=="home"?"active":""}>home</li>{/*if our menu is home this li tag will provide a one classname that is "active".If our menu is not home, it will provide one empty string*/} 
        <li onClick={()=>setMenu("menu")}className={menu=="menu"?"active":""}>menu</li>{/*when the state is "menu", this second li tag will get the active classname(any of other three will not get the active classname)*/}
        <li onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact us")}className={menu=="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
