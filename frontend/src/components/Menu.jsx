import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {Link} from 'react-router-dom'
import axios from "axios";
import { URL } from "../url";

const Menu = () => {
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  
  const handleLogout = async ()=>{
    try {
      const res = await axios.get(URL+"/api/auth/logout",{withCredentials:true});
      
      setUser(null)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 md:right-32 p-4 rounded-md space-y-4">
      {/* if no users */}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/login">Login</Link></h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/register">Register</Link></h3>
      )}

      {/* if users logged in */}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Profile</h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Write</h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">My Blogs</h3>
      )}
      {user && (
        <h3 onClick={handleLogout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>
      )}
    </div>
  );
};

export default Menu;
