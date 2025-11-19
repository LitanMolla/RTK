import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  const carTdata = useSelector(state => state.addToCart.value)
  return (
    <nav className='sticky top-0 py-3 bg-gray-100 shadow-sm'>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link className='text-xl'>Logo</Link>
          <ul className='flex gap-5'>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>Shop</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
          </ul>
          <button className='text-2xl cursor-pointer relative'><FaCartPlus /><span className='text-xs absolute -top-3 -right-3 bg-green-600 text-white min-h-6 min-w-6 flex justify-center items-center rounded-full p-1'>{carTdata.length}</span></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar