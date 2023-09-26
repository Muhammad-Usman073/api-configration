import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { LuContact } from 'react-icons/lu'
import { AiOutlineHeart } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
const Navbar = () => {
  const buttonStyles = ' h-7 w-7 cursor-pointer text-black hover:text-red-500 hover:scale-150 transition duration-75 ease-out '
  return (
    <div className=' bg-white shadow-md ' >
      <div className='flex p-2 justify-around ' >
        <div>
          <h1 className='cursor-pointer text-[35px] font-bold text-black hover:text-red-500 hover:scale-150 transition duration-75 ease-out' >Logo</h1>
        </div>
        <div className='flex items-center space-x-3 ' >
          <AiOutlineHome className={buttonStyles} />
          <LuContact className={buttonStyles} />
          <AiOutlineHeart className={buttonStyles} />
        </div>
        <div className=' flex items-center ' >
          <RxAvatar className={buttonStyles} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
