import React, {useState} from 'react'
import {navLinks} from '../constants'
import {
  close,
  logo,
  menu,
} from '../assets'


const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img 
        src={logo} 
        alt="logo" 
        className='w-[124px] h-[32px]'
      />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((n, i) => (
          <li
            key={n.id}
            className={`
              font-poppins 
              font-normal cursor-pointer
              text-[16px]
              text-white
              ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
            `}
          >
            <a href={`#${n.id}`}>
              {n.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar