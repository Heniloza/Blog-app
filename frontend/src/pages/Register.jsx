import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from 'axios';
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  
  const handleRegister = async ()=>{
    try {
      const res = await axios.post(URL+"/api/auth/register",{username,email,password})
      // console.log(res.data);
      setUsername(res.data.username)
      setUsername(res.data.email)
      setUsername(res.data.password)
      setError(false)
      navigate("/login")
    } catch (error) {
      setError(true)
      console.log(error);
      
    }
  }
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 ">
        <h1 className="text-lg font-extrabold md:text-xl">
          <Link to="/">Blog Adda</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center space-y-4 w-[80%] md:w-[25%] ">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-none"
            placeholder="Enter your username"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-4 py-2 border-2 border-black outline-none"
            placeholder="Enter your Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-none"
            placeholder="Enter your Password"
            required
          />
          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-4">
            <p>Already have an account?</p>
            <p>
              <Link
                to="/login"
                className="font-bold text-gray-500 hover:text-black"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
