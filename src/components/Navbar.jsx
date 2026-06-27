import React from 'react'
import {logo} from '../assets'

function Navbar() {
  return (
    <nav className='w-full navbar py-6 flex justify-between items-center'>
        <img src={logo} alt="logo" />
    </nav>
  )
}

export default Navbar