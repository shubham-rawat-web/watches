import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-between bg-red-200 py-5'>

    <div className='logo'>  
        <span className=' font-bold text-x1 mx-8'> i  task</span>
    </div>

    <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer'> Home</li>
        <li className='cursor-pointer'> your task</li>
    </ul>


   </nav>
  )
}

export default Navbar
