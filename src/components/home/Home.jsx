import React from 'react'
import { Hero } from './Hero'
import { About } from '../pages/About'
import { Beforeabout } from '../pages/Beforeabout';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';

export const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Contact />
        
    </>
  );
};

