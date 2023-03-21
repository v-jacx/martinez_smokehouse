import React from 'react'
import { EventCard } from '../components/EventCard'

export const Calander = () => {
  return (
    <div>
            <img
            class='w-full md:h-[30rem] xl:h-[35rem]'
            src='https://www.thedailymeal.com/img/gallery/every-regional-barbecue-style-explained/brisket-ribs-chicken.webp'
            />

        <div id="events" class='flex w-[30rem] mx-7 my-11 gap-11 flex-wrap 
                    md:w-[45rem] md:mx-auto'>
        
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>

        </div>
    </div>
  )
}
