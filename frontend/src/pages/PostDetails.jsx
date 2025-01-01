import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { URL, IMAGE } from "../url";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import Loader from "../components/Loader";
const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchPots = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      // console.log(res.data);
      setPost(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  const handleDeletePost = async () =>{
    try {
      await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      navigate("/")
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchPots();
  }, [postId]);

  return (
    <>
      <Navbar />
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-black md:text-3xl ">
                {post.title}
              </h1>
              {user?._id === post?.userId && (
                <div className="flex items-center justify-center space-x-2">
                  <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)}>
                    <BiEdit />
                  </p>
                  <p className="cursor-pointer" onClick={handleDeletePost}>
                    <MdDelete />
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-4 ">
              <p>@{post.username}</p>
              <div className="flex space-x-2">
                <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
                <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
              </div>
            </div>
          </div>
          <img
            src={IMAGE + post.photo}
            alt=""
            className="w-[70vw] h-[60vh] mx-auto mt-8"
          />
          <p className="mt-8 md:px-44 px-8">{post.description}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold md:px-44 px-8">
            <p>categories:</p>
            <div className="flex justify-center items-center space-x-2 ">
              {post.categories?.map((category, index) => (
                <>
                  <div
                    key={index}
                    className="bg-gray-300 rounded-lg px-3 py-1 "
                  >
                    {category}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:px-44 px-8">
            <h3 className="mt-6 mb-4 font-semibold ">Comments:</h3>
            {/* comments */}
            <Comment />
            <Comment />
            <Comment />
            <div>
              {/* write a comment */}
              <div className="w-full flex flex-col mt-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
                />
                <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PostDetails;
