
import React from 'react';
import { attorneys } from '../data/dummydata';

export const Attorneys = () => {
  return (
    <>
      <section className="bg-cover bg-center h-[40vh] md:h-[50vh] relative">
        <div
          className="absolute inset-0 bg-center bg-fixed h-full"
          style={{ backgroundImage: 'url(/images/attorneys-bg.png)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-[70%] mx-auto gap-4">
            {attorneys.map((val1, index1) => (
              <div className=" p-4 rounded-lg shadow-md" data-aos="zoom-out-right" key={index1}>
                <div className="border-solid-primaryColor rounded-full">
                  <img src={val1.image} alt="" className="w-full h-auto rounded-full" />
                </div>
                
                <h3 className="text-primaryColor text-lg md:text-xl font-semibold mt-4" data-aos="">
                  {val1.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base" data-aos="">{val1.post}</p>
                <div className="mt-4">
                  <a href={val1.url1} target="_blank" rel="noopener noreferrer">
                    <i className="text-primaryColor text-base md:text-lg mr-4" data-aos="">{val1.icon1}</i>
                  </a>
                  <a href={val1.url2} target="_blank" rel="noopener noreferrer">
                    <i className="text-primaryColor text-base md:text-lg mr-4" data-aos="">{val1.icon2}</i>
                  </a>
                  <a href={val1.url3} target="_blank" rel="noopener noreferrer">
                    <i className="text-primaryColor text-base md:text-lg" data-aos="">{val1.icon3}</i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};




