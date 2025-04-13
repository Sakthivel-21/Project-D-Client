import React from 'react';
import about from '../assets/banner-bg.png';

function AboutPage() {
  return (

    <>
    <div className="w-full justify-center  bg-gradient-to-br from-blue-50 via-white to-blue-100 mt-12">
     
     
    <h2 className="text-2xl font-bold text-black underline text-center decoration-blue-400 pt-6">About Dindigul</h2>
       
    <div className="w-full flex justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 mt-4">
     
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-4">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <img 
            src={about}
            alt="Dindigul Rock Fort"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 w-full pl-4 lg:pl-8">
         
          <p className="text-gray-700 text-lg mb-4">
            Dindigul is a city rich in culture, history, and natural beauty. Known for the iconic Rock Fort, delicious biryani, and thriving textile and lock industries, Dindigul is a hub of tradition and enterprise.
          </p>
          <p className="text-gray-600 text-md">
            Our website aims to serve as a comprehensive guide for locals and visitors alike — from finding reliable services to discovering hidden gems in the district. We are committed to connecting communities and showcasing what Dindigul has to offer.
          </p>
        </div>

      </div>
    </div>
    </div>
    </>
  );
}

export default AboutPage;