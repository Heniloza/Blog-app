import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 ">
        <h1 className="text-lg font-extrabold md:text-xl">
          <Link to="/">Blog Adda</Link>
        </h1>
        <h3><Link to="/register">Register</Link></h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center space-y-4 w-[80%] md:w-[25%] ">
          <h1 className="text-xl font-bold text-left">
            Log in to your Account
          </h1>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-none"
            placeholder="Enter your Email"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-none"
            placeholder="Enter your Password"
          />
          <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">
            Login
          </button>
          <div className="flex justify-center items-center space-x-4">
            <p>Dont have an Account?</p>
            <p>
              <Link
                to="/register"
                className="font-bold text-gray-500 hover:text-black"
              >
                Resgister
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
