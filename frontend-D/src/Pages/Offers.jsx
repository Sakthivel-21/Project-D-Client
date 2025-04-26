import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ButtonComponent from "../Components/ButtonComponent";
import { Link } from "react-router-dom";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/dindigul/offers/");
        const data = res.data;

        const duplicated = [...data, ...data]; // Optional duplication
        setOffers(duplicated);
      } catch (error) {
        console.error("Failed to fetch offers", error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="bg-white py-10 pt-6 px-4">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-12">
          Best Offers
        </h2>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[ Navigation, Autoplay]}
          className="w-full"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full h-[450px]">
                <div className="relative lg:w-3/4 w-full h-full rounded-xl overflow-hidden shadow-lg">
                  {/* Offer Image */}
                  <img
                    src={offer.image}
                    alt="offer"
                    className="w-full h-full object-cover"
                  />

                  {/* Optional Overlay Info - uncomment if needed */}
                  {/*
                  <div className="absolute top-6 left-6 text-white drop-shadow-lg">
                    <h3 className="text-2xl font-bold">{offer.name}</h3>
                    <p className="text-sm">{offer.category?.name}</p>
                    <p className="text-xs mt-1 italic">
                      {offer.start_date} - {offer.end_date}
                    </p>
                  </div>
                  */}

                  {/* Button Positioned at Bottom Center */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Link to =  {`/dindigul/places/${offer.place}/`}><ButtonComponent>Click more</ButtonComponent></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offers;
