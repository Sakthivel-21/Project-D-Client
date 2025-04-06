import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
//import img3 from "../assets/images(3).jpeg";
import img4 from "../assets/hotels.jpeg";

import ButtonComponent from "../Components/ButtonComponent";
import { Link } from "react-router-dom";


const images = [img1, img2, img4, img4];

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] bg-gray-100  mt-6">
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg overflow-hidden shadow-lg w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full   h-[500px]" />
              <div className="absolute inset-0  items-center justify-center bg-black bg-opacity-20 text-center ">
                <h1 className="text-white text-2xl font-bold mt-16">Welcome to Dindigul City ! </h1>
                <p className="text-white text-lg font-bold sm:w-[600px] sm:ml-[465px] mt-12 pl-4 pr-4">
                The ultimate directory of workplaces and services in Dindigul district! Whether you're looking for colleges, industries, skilled professionals, repair services, or local businesses, we provide a comprehensive database to help you find the right place with ease.


                </p>
                <ButtonComponent className=' bg-blue-500 hover:bg-blue-600 mt-12 text-white'><Link to='/categories'>Explore everything about Dindigul</Link></ButtonComponent>
           
                   </div>
            </SwiperSlide>
          ))}
        </Swiper>
      
      </div>
    </div>
  );
};

export default Hero;
