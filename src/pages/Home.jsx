import React from 'react'

export const Home = () => {
  return (
    <div>
        <div class='relative'>
          <div class='absolute mt-[4rem] font-mono font-bold
                      md:ml-[33%] md:w-[25rem] md:h-[20rem] md:mt-[10%]'>
            <h2 class='text-white text-5xl text-center uppercase'>
              from our pit to your home
            </h2>
            <h3 class='text-white text-2xl text-center uppercase'>
              order online
            </h3>
            <div class='flex gap-5 justify-center mt-2'>
              <button class='bg-yellow-600 p-3 rounded-sm text-white uppercase'>Order Now</button>
              <button class='bg-yellow-600 p-3 rounded-sm text-white uppercase'>Merch</button>
            </div>
          </div>
          <img
          class='w-screen md:h-96 xl:h-full'
          src='https://heygrillhey.com/static/984ba17335df3d0b418feb2aab1a103e/GrilledTriTip-10.jpg'
          />
          <img
          class='m-auto mt-11 w-[50%]'
          src='./logo-transparent-png.png'
          />
        </div>
    </div>
  )
}
