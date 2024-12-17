import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
    const user = false;
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4 '>
        <h1 className='text-lg font-extrabold md:text-xl'><Link to="/">Blog Adda</Link></h1>
        <div className='flex items-center justify-center space-x-8'>
            <p><BsSearch /></p>
            <input type="text" placeholder='Search a post' className='outline-none ox-3 py-2'/>
        </div>
        <div className='flex items-center justify-center space-x-4 md:space-x-8'>
            {user? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">login</Link></h3>}
            {user? <h3><Link to="/profile">Profile</Link></h3> :<h3><Link to="/register">Register</Link></h3>}
        </div>
    </div>
  )
}

export default Navbar