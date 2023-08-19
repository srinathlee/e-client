import { useState } from 'react'
import './header.css'
import {FaBars,FaShoppingCart} from 'react-icons/fa'
import {RxCross2} from "react-icons/rx"
import {SiShopify} from 'react-icons/si'
import profile from '../assets/profile1.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'



const Header=()=>{
  const [menu,setMenu]=useState(false)
  const Logout=()=>{
    Cookies.remove("jwtToken")
  }

    return(
      <div className='header'>
        <div className='nav'>
          <div>
            <Link  className='nav-link' to="/">
             <SiShopify className='logo'/>
            </Link>
          </div>

          <ul className='nav-links'>
            <Link className='nav-link' to="/">
            <li className='nav-item'>Home</li>
            </Link>
            <Link  className='nav-link' to="/products">
            <li className='nav-item'>Products</li>
            </Link>
            <Link  className='nav-link' to="/contact">
            <li className='nav-item'>Contact</li>
            </Link>
            <Link  className='nav-link' to="/login">
            <li  onClick={Logout} className='nav-item'>Logout</li>
            </Link>
            <Link  className='nav-link' to="/cart">
            <li className='nav-item'><FaShoppingCart/></li>
            </Link>
            <Link className='nav-link' to="/profile">
            <li className='img'> <img alt="img" className='profile-img' src={profile}/></li>
            </Link>
          </ul>

          <div className='mob-bars-profile'>
          <Link  className=' nav-link' to="/profile">
              <div className='nav-item img'> <img alt="profile-img" className='profile-img' src={profile}/></div>
            </Link>

          <div className='bars' onClick={()=>setMenu(!menu)}>
            { menu?<RxCross2 className='bars'/>:<FaBars  />}
          </div>
          </div>

        </div>

        <div className={menu?"menu open":"menu"}>
            <Link  className='nav-link' to="/">
              <div className='nav-item'>Home</div>
            </Link>
            <Link  className='nav-link' to="/products">
              <div  className='nav-item'>Products</div>
            </Link>
            <Link  className='nav-link' to="/contact">
              <div className='nav-item'>Contact</div>
            </Link>   
            <Link  className='nav-link' to="/cart">
              <div className='nav-item'><FaShoppingCart/></div>
            </Link>    
            <Link  className='nav-link' to="/login">
              <div onClick={Logout} className='nav-item'>Logout</div>
            </Link>     
        
        </div>

      </div>
    )
}
export default Header