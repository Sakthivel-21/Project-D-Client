import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import hero from "../assets/dindigul.webp";
import axios from "axios";
import ButtonComponent from "../Components/ButtonComponent";
import { Link } from "react-router-dom";
//import "../styles/swiper-custom.css"; // for button styling

const Hero = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/dindigul/offers/");
        const data = res.data;
        const duplicated = [...data, ...data]; // optional
        setOffers(duplicated);
      } catch (error) {
        console.error("Failed to fetch offers", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="flex h-[650px] w-full">
      {/* Left Side */}
      <div className="lg:w-1/2 hidden lg:block relative">
        <img src={hero} alt="Left" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-3xl pt-64 font-bold mb-4">Welcome to Dindigul City !</h1>
          <p className="text-sm text-center">
          The ultimate directory of workplaces and services in Dindigul district! Whether you're looking for colleges, industries, skilled professionals, repair services, or local businesses, we provide a comprehensive database to help you find the right place with ease.

          </p>
          <ButtonComponent className='mt-4'>Explore</ButtonComponent>
        </div>
      </div>

      {/* Right Side (Swiper with buttons inside images) */}
      <div className="lg:w-1/2 w-full h-[650px] relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          className="h-full"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <img
                  src={offer.image}
                  alt={`Offer ${index}`}
                  className="w-full h-full object-cover"
                />
                {/* Click More Button */}
                <Link to={`/dindigul/places/${offer.place}/`}><button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition">
                  Click More
                </button>   </Link>   </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
