import React from 'react';
import banner from "../assets/banner.jpeg";

const Main = () => {
  return (
    <div>
        <div className='absolute h-screen'>
            <img
             src={banner}
             alt="main_photo" 
             className='h-full  w-screen object-cover'
             />
        </div>
        <div className='flex justify-center items-center h-screen'>
            <div className='relative'>
                <p>The IT Career of Your Dreams Starts Here!</p>
                <p>Alpha Tech!</p>
                <button>Our Services</button>
            </div>
        </div>
    </div>
  );
};

export default Main;