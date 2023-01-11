import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='wrapper'>
        <div className='nav'>
                <li>
                    <Link to='/patientsprofile'>
                        Personal Data
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        Medical History
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        Personal Data
                    </Link>
                </li>
        </div>
    </div>
  )
}

export default Home