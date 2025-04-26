import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonComponent from "../Components/ButtonComponent";
import { LoadingSkeleton } from '../Components/LoadingSkeleton';

const Hero = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:8000/dindigul/offers/");
        const data = res.data;
        const duplicated = [...data, ...data];
        setOffers(duplicated);
      } catch (error) {
        console.error("Failed to fetch offers", error);
        setError("Failed to load hero section");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] bg-gray-100 animate-pulse">
        <LoadingSkeleton type="detail" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>{error}</p>
          <ButtonComponent onClick={() => window.location.reload()}>
            Retry
          </ButtonComponent>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              <img
                src={offer.image}
                alt={`Offer ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link 
                  to={`/dindigul/places/${offer.place}/`}
                  className="absolute bottom-24 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2"
                >
                  <ButtonComponent className="text-white">
                    View Details
                  </ButtonComponent>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
