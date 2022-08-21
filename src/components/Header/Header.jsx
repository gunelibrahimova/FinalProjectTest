import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="row justify-content-center align-items-center">
               <div className="col-lg-2">
                <img src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/logo.png" alt="" />
               </div>
               <div className="col-lg-5">
                <ul className='list-unstyled d-flex'>
                  <li className='first'>Home</li>
                  <li>About</li>
                  <li>Collection</li>
                  <li>Shop</li>
                  <li>Brand</li>
                  <li>News</li>
                  <li>Brand</li>
                </ul>
               </div>
               <div className="col-lg-3 d-flex">
                <div className="search d-flex">
                  <input type="text" placeholder='Axtarış..'/>
                  <div className="search-button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
               
               </div>
               <div className="col-lg-2">
               <div className="user ">
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-heart"></i>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Header