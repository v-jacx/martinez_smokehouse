import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div class='flex justify-between mx-6'>
        <Link to='/'>
          <img 
          src='./logo-transparent-png.png'
          class='w-[12.5rem]'/>
         </Link>

          <img
          class='md:hidden -order-1 
                  w-9 h-9 mt-5'
          src='https://img.icons8.com/ios-glyphs/512/menu-rounded.png'
          onClick={()=>setMenuToggle(!menuToggle)}
          />


        <ul class={`md:h-fit md:w-fit md:flex md:space-x-11 md:self-center md:bg-transparent md:relative md:mt-0 md:font-medium md:text-lg md:text-black
        absolute backdrop-blur bg-black/10 mt-[4.4rem] ml-[-1.5rem] h-full w-[13rem] rounded-b-md font-mono text-xl text-center text-white py-2 z-50
        ${menuToggle ? '':"hidden"}`}
        >
            <Link to='/'>
              <li class='py-4 hover:bg-black/20 md:hover:px-5 rounded-md' onClick={()=>setMenuToggle(false)}>Home</li>
            </Link>

            <Link to='/directions'>
              <li class='py-4 hover:bg-black/20 md:hover:px-5 rounded-md'  onClick={()=>setMenuToggle(false)}>Directions</li>
            </Link>

            <a href='/#events'>
              <li class='py-4 hover:bg-black/20 md:hover:px-5 rounded-md'  onClick={()=>setMenuToggle(false)}>Event Calander</li>
            </a>
            <li class='py-4 hover:bg-black/20 md:hover:px-5 rounded-md'  onClick={()=>setMenuToggle(false)}>About</li>
        </ul>

        <div class='relative self-center w-8 h-10'>
            <img 
            src='https://cdn-icons-png.flaticon.com/512/3034/3034002.png'
            class='absolute w-8 h-10'/>
            <div class='ml-3 mt-2.5'>0</div>
         </div>
    </div>
  )
}
