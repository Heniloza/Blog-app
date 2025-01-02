import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {user,setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [posts,setPosts] = useState([]);
  const [updated,setUpdated] = useState(false);

  const fetchProfiles = async ()=>{
    try {
      const res = await axios.get(URL+"/api/user/"+user._id,{withCredentials:true});
      // console.log(res.data);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUserUpdate = async () =>{
    setUpdated
    try {
      const res = await axios.put(URL+"/api/user/"+user._id,{username,email,password},{withCredentials:true});
      setUpdated(true);
      fetchUserPosts();
    } catch (error) {
      console.log(error);
      setUpdated(false);
    }
  }
  const handleUserDelete = async()=>{
    try {
      await axios.delete(URL+"/api/user/"+user._id,{withCredentials:true});
      console.log("Done");
      setUser(null)
      navigate("/")
    } catch (error) {
      console.log(error);
      
    }
  }

  const fetchUserPosts = async()=>{
    try {
      const res = await axios.get(URL+"/api/posts/user/"+user?._id,{withCredentials:true});
      setPosts(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchProfiles()
  },[user])

  useEffect(()=>{
    fetchUserPosts()
  },[user])

  return (
      <div>
        <Navbar />
        <div className="px-8 md:px-[200px] mt-8 flex flex-col md:flex-row md:items-start md:overflow-auto md:h-screen">
          <div className="flex flex-col md:w-[70%] w-full ">
            <h1 className="text-xl font-bold mb-4">Your Posts</h1>
            {posts?.map((p)=>(
              <ProfilePosts key={p._id} post={p}/>
            ))}
          </div>

          <div className="md:sticky  md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-bold mb-4">Profile</h1>
              <input
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Your Username"
                className="outline-none px-4 py-2 text-gray-500"
              />
              <input
               onChange={(e)=>setEmail(e.target.value)}
               value={email}
                type="email"
                placeholder="Your Email"
                className="outline-none px-4 py-2 text-gray-500"
              />
              <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Your Password"
                className="outline-none px-4 py-2 text-gray-500"
              />
              <div className="flex items-center space-x-4 mt-4">
                <button onClick={handleUserUpdate} className="text-white font-semibold bg-black px-4 py-2 hover:text-black rounded-lg hover:bg-gray-500">
                  Update
                </button>
                <button onClick={handleUserDelete} className="text-white font-semibold bg-black px-4 py-2 hover:text-black rounded-lg hover:bg-gray-500">
                  Delete
                </button>
              </div>
              {updated && <h3 className="text-green-400 text-center text-sm mt-4">Profile updated Successfully</h3>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Profile;
