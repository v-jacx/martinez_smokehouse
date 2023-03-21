import React from 'react'

export const EventCard = () => {
  return (
    <div class='relative mt-5'>
        <div class='absolute bg-white w-9 h-9 py-1 text-center border-[2px] border-yellow-600 mt-4 ml-[-.6rem] md:w-11 md:h-11 md:mt-7'>
        
        <p class='text-yellow-600 text-[0.6rem] md:text-xs uppercase'>23 Aug</p>
        </div>

        <img
        class='w-[7rem] h-[7rem] md:w-[12rem] md:h-[12rem]'
        src='https://www.kleinworthco.com/wp-content/uploads/2022/05/Smoked-Tri-Tip-Roast-1200.jpg'
        />

        <p class='absolute  mt-[-2rem] w-[7rem] text-sm text-yellow-600 bg-white py-2 text-center md:text-lg md:w-[12rem] md:py-4 md:mt-[-3.5rem]'>Tasty Tri-tip!</p>
</div>
  )
}
