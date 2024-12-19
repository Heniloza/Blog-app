import React from 'react'

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-16 space-x-2 ml-24 ">
      {/* {left} */}
      <div className="w-[25%] h-[170px] flex justify-center items-center sm:w-[40%] sm:h-[170px]">
        <img
          src="https://www.fita.in/wp-content/uploads/2019/10/THE-IMPORTANCE-OF-ARTIFICIAL-INTELLIGENCE-IN-EVERY-DAY-LIFE.jpg"
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[55%]  ml-16 px-6">
        <h1 className="text-xl font-bold mb-1 md:text-2xl">
          10 uses of artificial intelligence in Day to day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4 ">
            <p>@heniloza</p>
            <div className="flex space-x-2">
                <p>13/12/2024</p>
                <p>11:05</p>
            </div>
        </div>
        <p className="text-sm md:text-lg">
            In this days we are surrounded getElementById artificial intellingence Like voice assistant , chatGpt,gemini etc. we are using Ai for small-small tasks.Here are 10 uses of AI in our daily life to make your life easy and work fastely in this ai driven life
        </p>
      </div>
    </div>
  )
}

export default ProfilePosts