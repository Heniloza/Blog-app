import React,{useContext, useEffect, useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import Menu from './Menu'
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [prompt,setPrompt] = useState();
  const navigate = useNavigate();
  const path = useLocation().pathname

  const handleSearch = ()=>{
      prompt? navigate("?search="+prompt):navigate("/")
  };

  const showMenu = ()=>{
    setMenu(!menu);
  }
  const {user} = useContext(UserContext);
  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4 '>
        <h1 className='text-lg font-extrabold md:text-xl mr-5 md:mr-5'><Link to="/">Blog Adda</Link></h1>
       {path==="/" && <div className='flex items-center justify-center space-x-8'>
            <p onClick={handleSearch} className='cursor-pointer'><BsSearch /></p>
            <input onChange={(e)=> setPrompt(e.target.value)} type="text" placeholder='Search a post' className='outline-none ox-3 py-2'/>
        </div>}
        <div className='hidden md:flex items-center justify-center space-x-4 md:space-x-8'>
            {user? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">login</Link></h3>}
            {user? <div onClick={showMenu}>
              <p className='cursor-pointer relative'><FaBars /></p>
              {menu && <Menu />}
              </div>
              :<h3><Link to="/register">Register</Link></h3>}
        </div>
        <div onClick={showMenu} className='md:hidden text-lg '>
          <p className='cursor-pointer relative'><FaBars /></p>
          {menu && <Menu />}
        </div>
    </div>
  )
}

export default Navbar