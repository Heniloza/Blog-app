import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("");
    setCats(updatedCats);
  };
  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i);
    setCats(updatedCats);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      username: user.username,
      userId: user._id,
      categories: cats,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("img", fileName);
      data.append("file", file);
      //post.photo = fileName;

      //Image upload
      try {
        const imageUpload = await axios.post(URL + "/api/upload",data);
        // console.log(imageUpload.data);
        post.photo = imageUpload.data.url;
      } catch (error) {
        // console.log(error);
      }
    }
    //post upload
    try {
      const res = await axios.post(URL+"/api/posts/create", post, {
        withCredentials: true,
      });
      navigate("/posts/post/"+res.data._id);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <Navbar />
          <div className="px-6 md:px-[200px] mt-4">
            <h1 className="font-bold md:text-2xl text-xl mt-8">
              Create a Post
            </h1>
            <form
              action=""
              className="w-full flex flex-col space-y-4 md:space-y-8 mt-4"
            >
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Post Title"
                className="px-4 py-2 outline-none"
              />
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                placeholder="Upload Image"
                className="px-4"
              />
              <div className="flex flex-col">
                <div className="flex items-center space-x-4 md:space-x-8">
                  <input
                    value={cat}
                    onChange={(e) => {
                      setCat(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Post Category"
                    className="px-4 py-2 outline-none"
                  />
                  <div
                    onClick={addCategory}
                    className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
                  >
                    Add
                  </div>
                </div>
                {/* categories */}
                <div className="flex px-4 mt-3">
                  {cats?.map((cat, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                    >
                      <p>{cat}</p>
                      <p
                        onClick={() => deleteCategory(index)}
                        className="text-white bg-black rounded-full cursor-pointer p-1 text-sm "
                      >
                        <ImCross />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                rows={15}
                cols={30}
                placeholder="Enter Post Description"
                className="px-4 py-2 outline-dashed border-1"
              ></textarea>
              <button
                onClick={handleCreate}
                className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold"
              >
                Create
              </button>
            </form>
            <Footer />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default CreatePost;
