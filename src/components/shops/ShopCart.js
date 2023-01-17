import React, { useState } from "react"
import { AiFillStar } from 'react-icons/ai'
import './shop.css'

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)


  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='card' style={{}} key={index}>
            <div className='product'>
              <div className='img'>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='price'>
                  <h4>Ksh. {shopItems.price}.00 </h4>
                  <p className="button" onClick={() => addToCart(shopItems)}>
                    Add to M-Basket
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart