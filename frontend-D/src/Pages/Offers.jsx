import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import about from '../assets/banner-bg.png';

const OffersPage = () => {
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
    <div className=" bg-white py-10 pt-6 px-4">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center text-black underline decoration-blue-400 mb-10 underline decoration-blue-400">
          Best Offers
        </h2>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full"
        >
          {offers.map((offer, index) =>
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={offer.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                  {offer.category.name}
                  </h3>
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                  {offer.name}
                  </h3>
                  <p className="text-white text-md md:text-lg mb-2 drop-shadow-md">
                    {offer.start_date}
                  </p>
                  <p className="text-sm text-white/80 italic">
                    {offer.end_date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default OffersPage;
