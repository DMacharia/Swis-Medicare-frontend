import React from "react"
import { FaGift } from 'react-icons/fa'
import { FcElectronics, FcGoodDecision } from 'react-icons/fc'
import { AiFillCar, AiOutlineHome } from 'react-icons/ai'
import { BsFillMusicPlayerFill } from 'react-icons/bs'
import { BiHealth } from 'react-icons/bi'
import { GiPuppet } from 'react-icons/gi'
import { MdToys } from 'react-icons/md'

const Categories = () => {
  const data = [
    {
      cateName: "Medics",
    },
    {
      cateName: "Cleanups",
    },
    {
      cateName: "My Dawa",
    },
    {
      cateName: "Save a Life!",
    },
    {
      cateName: "Dawa Savings",
    },
    {
      cateName: "Medical cover",
    },
    {
      cateName: "NHIF",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} style={{alignItems: 'center'}}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories