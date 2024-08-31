import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/sample_logo.png'
import cart_icon from '../Assets/cart_logo.png'
import menu_icon from '../Assets/menu_logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {

    const [menu, setMenu] = useState("home");
  return (
    <>
        <div class="navbar"> 
            <div className='nav-logo'>
                <img src={logo} alt="Business Logo" />
                <p>Saki Business</p>
            </div>
            <div className='menu-logo'>
                <img src={menu_icon} alt="Menu Logo" />
                <p>Menu</p>
                <button onClick={() => {
                    const menu_btn_id = document.getElementById('mobile-version-nav-bar-menu-container-id')
                    menu_btn_id.classList.toggle('active')
                }}></button>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Home</Link>  {menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("services")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/services'>Services </Link>{menu==="services"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/about'>About </Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/contact'>Contact </Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="Cart-Icon" />
            </div>
        </div>
        <div id = "mobile-version-nav-bar-menu-container-id" className="mobile-version-nav-bar-menu-container">
            <ul className='mobile-nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Home</Link>  {menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("services")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/services'>Services </Link>{menu==="services"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/about'>About </Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/contact'>Contact </Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
            <div className="mobile-nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="Cart-Icon" />
            </div>
        </div>
    </>
  )
}
