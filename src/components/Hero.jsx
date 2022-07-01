import React from 'react';
import sneaker from "../components/sneaker.jpg";


const Hero = () => {
  return(
    <div className="flex flex-col justify-between items-center relative container md:flex-row mx-auto space-y-0 md:space-y-4 ">
      <div className="mx-4 my-8 md:w-1/2 ">
      <img className='md:ml-6 shadow-lg rounded-xl' src={sneaker} alt="sneakers.jpg" size={10}/>
      </div>
      <div className="sm:ml-10">
        <div className="ml-10 space-y-4">
          <div className="text-sm text-orange-400 leading-6 font-bold space-y-1">
            <h3>SNEAKERS COMPANY</h3>
          </div>
          <p className="font-bold text-5xl">Fall Limited Edition Sneakers</p>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
        </div>
      </div>
      <div>

      </div>
    </div>
  ) 
}

export default Hero;