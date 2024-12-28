import React from "react";

const HomePage = ({post}) => {
  return (
    <div className="w-full flex mt-16 space-x-2 ml-24">
      {/* {left} */}
      <div className="w-[25%] h-[170px] flex justify-center items-center sm:w-[40%] sm:h-[170px]">
      <img
          src={post.photo} 
          alt={post.title || "Image"}
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[55%]  ml-16 px-6">
        <h1 className="text-xl font-bold mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4 ">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
                <p>13/12/2024</p>
                <p>11:05</p>
            </div>
        </div>
        <p className="text-sm md:text-lg">
            {post.description}
        </p>
      </div>
    </div>
  );
};
export default HomePage;
