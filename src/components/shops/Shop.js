import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./shop.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>

          <div className='contentWidth' style={{
            width: '100%',
          }}>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Explore Our Chemist</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
              </div>
            </div>
            <div className='product-content main-cont'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
