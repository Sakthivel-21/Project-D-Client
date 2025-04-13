import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/dindigul.webp";
import img2 from "../assets/hotels.jpeg";
import img3 from "../assets/summary.jpg";
import img4 from "../assets/intro-bg.jpg";

import ButtonComponent from "../Components/ButtonComponent";
import { Link } from "react-router-dom";


const images = [img1, img2, img3, img4];

const Hero = () => {
  return (
    <div className="flex flex-col  w-full h-[550px] lg:h-[650px] bg-gray-100  mb-12">
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg overflow-hidden shadow-lg w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[550px]  lg:h-[650px]" />
              <div className="absolute inset-0   bg-black bg-opacity-30  ">
                <div className="ml-4 mr-6 mt-[270px] w-full lg:w-[650px] justify-items-center py-8">
                <h1 className="text-white text-2xl font-bold pt-4 ">Welcome to Dindigul City ! </h1>
                <p className="text-gray-100 text-sm  sm:w-[600px] pt-4   pr-4">
                The ultimate directory of workplaces and services in Dindigul district! Whether you're looking for colleges, industries, skilled professionals, repair services, or local businesses, we provide a comprehensive database to help you find the right place with ease.


                </p>
                <ButtonComponent className='mt-4 bg-blue-500 hover:bg-blue-600   text-white'><Link to='/categories'>Explore </Link></ButtonComponent>
           </div>
                   </div>
            </SwiperSlide>
          ))}
        </Swiper>
      
      </div>
    </div>
  );
};

export default Hero;
