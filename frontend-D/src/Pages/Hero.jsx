import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonComponent from "../Components/ButtonComponent";

const Hero = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/dindigul/offers/");
        const data = res.data;
        const duplicated = [...data, ...data]; // Optional: creates more slides
        setOffers(duplicated);
      } catch (error) {
        console.error("Failed to fetch offers", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="w-full  h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={offer.image}
                alt={`Offer ${index}`}
                className="w-full h-full object-cover"
              />
              {/*<Link to={`/dindigul/places/${offer.place}/`}>
                <button className="absolute bottom-24 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
                  Click More
                </button>
              </Link>*/}
              <Link><ButtonComponent className="mb-6 absolute bottom-24 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 text-sm sm:text-base text-white rounded-xl transition">Click more</ButtonComponent></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
