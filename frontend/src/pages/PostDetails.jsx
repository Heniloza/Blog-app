import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl ">
            10 uses of artificial intelligence in Day to day life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4 ">
          <p>@heniloza</p>
          <div className="flex space-x-2">
            <p>13/12/2024</p>
            <p>11:05</p>
          </div>
        </div>
      </div>
      <img
        src="https://www.fita.in/wp-content/uploads/2019/10/THE-IMPORTANCE-OF-ARTIFICIAL-INTELLIGENCE-IN-EVERY-DAY-LIFE.jpg"
        alt=""
        className="w-[70vw] h-[60vh] mx-auto mt-8"
      />
      <p className="mt-8 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
        officiis, dignissimos labore iusto quaerat qui reprehenderit at suscipit
        fuga fugit quidem? Cum tempora dolor nam placeat sequi quas facere iure?
        Qui alias officiis unde! Aspernatur laboriosam itaque eius reiciendis
        animi corrupti et inventore debitis maxime. Provident, nulla quos
        adipisci corporis eum voluptate quas. Modi, dolorum adipisci
        consequuntur dicta earum accusamus! Eveniet voluptate delectus sit
        aliquid eum ipsam fugiat sapiente necessitatibus, esse molestiae dicta
        veritatis. Inventore vitae, voluptatem libero excepturi molestiae nihil
        unde perferendis repellendus quaerat quia id molestias nam odit! Amet
        repellendus a iusto nemo odit. Amet dicta illum qui voluptate architecto
        facere quisquam perferendis, consequuntur, animi id delectus. Rem
        voluptates iure qui facere. Quis et ipsam libero. Nesciunt, officia?
        Necessitatibus, perferendis fuga exercitationem recusandae vel ipsam
        eligendi laborum alias. Nesciunt est quibusdam natus aspernatur, saepe
        cum! Voluptas ea voluptatem alias provident tempore asperiores
        voluptatum? Doloribus impedit sit commodi enim.
      </p>
      <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>categories:</p>
        <div className="flex justify-center items-center space-x-2 ">
          <div className="bg-gray-300 rounded-lg px-3 py-1 ">Tech </div>
          <div className="bg-gray-300 rounded-lg px-3 py-1 ">Ai </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="mt-6 mb-4 font-semibold ">Comments:</h3>
        {/* comments */}
        <div className=" px-2 py-2 bg-green-200 rounded-lg ">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-600 ">@henilshrimali</h3>
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-500">16/12/2024</p>
              <p className="text-gray-500">19:23</p>
              <div className="flex items-center justify-center space-x-2">
                <p>
                  <BiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            </div>
          </div>
          <p className="px-4 mt-2 ">Nice information</p>
        </div>
        {/* comments */}
        <div className=" px-2 py-2 bg-green-200 rounded-lg mt-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-600 ">@lalitsharma</h3>
            <div className="flex justify-center items-center space-x-4 ">
              <p className="text-gray-500">16/12/2024</p>
              <p className="text-gray-500">19:32</p>
              <div className="flex items-center justify-center space-x-2">
                <p>
                  <BiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            </div>
          </div>
          <p className="px-4 mt-2 ">Nice information</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
