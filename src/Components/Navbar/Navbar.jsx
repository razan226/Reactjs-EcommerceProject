import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
   
    const [menu, setMenu] = useState("Shop");
     const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shope</Link> {menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Men")}}><Link style={{textDecoration: 'none'}} to='/Men'>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Women")}}><Link style={{textDecoration: 'none'}} to='/Women'>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to='/Kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button><Link style={{textDecoration: 'none'}} to='/LoginSginup'>Login</Link></button>
            <Link to={`/Cart`}>
            <img src={cart_icon} alt="" />
            </Link>   
            <div className='nav-cart-count'>{getTotalCartItems()}</div>

        </div>
        </div>
  )
}
