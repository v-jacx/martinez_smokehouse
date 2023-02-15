import React from 'react'

export const Home = () => {
  return (
    <div>
        <div class='relative'>
          <div class='absolute mt-[4rem] font-mono font-bold
                      md:ml-[33%] md:w-[25rem] md:h-[20rem] md:mt-[10%] xl:ml-[37%] xl:mt-[12%]'>
            <h2 class='text-white text-5xl text-center uppercase'>
              from our pit to your home
            </h2>
            <h3 class='text-white text-2xl text-center uppercase'>
              order online
            </h3>
            <div class='flex gap-5 justify-center mt-2'>
              <button class='bg-yellow-600 hover:bg-yellow-600/80 px-5 py-2 rounded-sm text-white uppercase'>Order Now</button>
              <button class='bg-yellow-600 hover:bg-yellow-600/80 px-5 py-2 rounded-sm text-white uppercase'>Merch</button>
            </div>
          </div>
          <img
          class='w-screen md:h-96 xl:h-[40rem]'
          src='https://heygrillhey.com/static/984ba17335df3d0b418feb2aab1a103e/GrilledTriTip-10.jpg'
          />
        </div>
        <div class='my-11'>
        <img
          class='m-auto w-[50%] md:w-[30%]'
          src='./logo-transparent-png.png'
          />
          <p class='text-center mx-11 md:mx-[15rem] xl:mx-[20rem] text-sm font-serif'>
            Serving smiles since 2018.  Martinez Smokehouse was founded by Saul Martinez in his small backyard grill. Come and enjoy some delicious tri-tip always smoked with the same passion and love as the previous.  
          </p>
        </div>
    </div>
  )
}
