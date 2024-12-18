import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const CreatePost = () => {
  return (
    <>
      <Navbar />
      <div className='px-6 md:px-[200px] mt-4'>
        <h1 className='font-bold md:text-2xl text-xl mt-8'>Create a Post</h1>
        <form action="" className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input type="text" placeholder='Enter Post Title' className='px-4 py-2 outline-none'/>
          <input type="file" placeholder='Upload Image' className='px-4'/>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
              <input type="text" placeholder='Enter Post Category' className='px-4 py-2 outline-none'/>
              <div className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
            </div>
            <div className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-lg'></div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CreatePost