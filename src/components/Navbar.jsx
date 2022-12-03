import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () =>{
    setNav(!nav);
  }
  return (
    <div className='flex items-center justify-between h-20 font-bold rounded-2xl shadow-md px-10'>
        <Link to="/">
          <Link to='/account' className='p-4'>Home</Link>
          <Link to='/account' className='p-4'>Consult</Link>
          <Link to='/account' className='p-4'>Add</Link>
        </Link>
        <div className='hidden md:block'>
          <ThemeToggle/>
        </div>
        <div>
          <div>
            <form >
                <input 
                    className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
                    type='text' 
                    placeholder='Search a coin'
                />
            </form>
          </div>
        </div>
        {/**  Menu Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
        </div>
        {/** Mobile Menu */}
        <div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
          : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
          }>
          <ul className='w-full p-4'>
            <li className='border-b py-6'>
              <Link to='/'>Home</Link>
            </li>
            <li className='border-b py-6'>
              <Link to='/'>Account</Link>
            </li>
            <li className='py-6'>
              <ThemeToggle/>
            </li>
          </ul>
          <div className='flex flex-col w-full p-4'>
            <Link to='/signin'>
              <button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar