import React, { useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from "axios";
import { URL } from "../url";

const Home = () => {

  const [posts,setPosts] = useState([]);


  const fetchPots = async ()=>{
    try {
      const res = await axios.get(URL+"/api/posts/")
      // console.log(res.data);
      setPosts(res.data)
      console.log(res.data.photo);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchPots()
    // console.log("Fetched posts:",posts);
    
  },[])
  return (
    <>
    <Navbar />
      <div className="md:px-[70px]">
      {posts.map((post)=>{
        console.log(post);
       return  <HomePage key={post._id} post={post}/>
      })}
      </div>
    <Footer />
    </>
  );
};

export default Home;
