import React from "react"
import Home from "../components/mainPage/Home"
import FlashDeals from "../components/flashdeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newArrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Announcement from "../components/announcement/Announcement"
import Wrapper from "../components/wrapper/Wrapper"
import Patients from "../components/doctor/Patients"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      {/* <NewArrivals /> */}
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      {/* <Announcement /> */}
      {/* <Patients /> */}
      <Wrapper />
    </>
  )
}

export default Pages
