import React from 'react'
import { about } from '../data/dummydata'
import { Heading }from '../common/Heading'
import { Beforeabout } from './Beforeabout'
import { Attorneys } from './Attorneys'


export const About = () => {
  return (
    <>
    <Heading className ='font-bold text-4xl' title=""/>
    <Beforeabout />   
        <section className='bg-headingColor w-full text-silver top-2'>
            <div className='max-w-[85%] mx-auto'>
                <div  className=' m-auto grid grid-cols-1 gap-4 '>
                    {about.map((item, desc) => (
                        <div className='bg-primaryBackground p-4 rounded-lg mb-2 mt-2' data-aos='flip-left' key={desc}>
                            <i className='text-primaryColor'>{item.icon}</i>
                            <h3 className='font-semibold p-4 text-primaryColor'>{item.title}</h3>
                            <p className=' md:text-lg text-sm'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

           
        </section>
        <Attorneys /> 
    </>
    

  )
}

