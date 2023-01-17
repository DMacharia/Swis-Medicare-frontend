import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import { BsCartCheckFill } from "react-icons/bs"
import Cart from "../../components/newArrivals/Cart"

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    // search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {/* <img src={logo} alt='' /> */}
            <h1><Link style={{color: '#0f3460', fontStyle: 'italic', paddingLeft: '-2rem'}} to='/'>Swiss-Medicare</Link></h1>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search...' />
          </div>
          
          <div className='icon f_flex width' style={{backgroud: '#0f3460'}}>
            <div className='cart' style={{backgroud: '#0f3460'}}>
              <Link to='/cart' >
                My Medics Basket
                <span>{CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search