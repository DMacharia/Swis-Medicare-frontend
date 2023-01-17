import React from "react"
import { AiFillPhone } from 'react-icons/ai'
import { BsEnvelope } from "react-icons/bs"

const Head = () => {
  return (
    <>
      <section style={{alignItems: 'center'}} className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <AiFillPhone />
            <label> +254 113 794 219</label>
            <BsEnvelope />
            <label>swiss-medicare@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQs</label>
            <label>Get Help</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
