import React from 'react'
import { Hero } from '../components/Hero';
import { Calander } from './Calander';

export const Home = () => {
  return (
    <div>
            
      <section class='snap-start'>
        <Hero/>
      </section>

      <section class='snap-mandatory'>
        <Calander/>
      </section>
    </div>
  )
}
