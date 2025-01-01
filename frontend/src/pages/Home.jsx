import React, { useContext, useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../url";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const {user} = useContext(UserContext)

  const fetchPots = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchPots();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="md:px-[70px] min-h-[70vh] px-8">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <>
              <Link to={user?`/posts/post/${post._id}`:"/login"}>
                <HomePage key={post._id} post={post} />
              </Link>
            </>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No Posts founded</h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
