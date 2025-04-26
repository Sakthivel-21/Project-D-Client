import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import phone from '../assets/phones.jpg';
import facebook from '../assets/facebook.png';
import email from '../assets/mail.jpg';
import instas from '../assets/instas.jpg';
import internet from '../assets/internet.png';
import twitter from '../assets/twitter.png';
import { LoadingSkeleton } from '../Components/LoadingSkeleton';

const CategoriesDetails = () => {
  axios.defaults.withCredentials = true;
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/dindigul/places/${id}/`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  const embedMapUrl = `https://www.bing.com/maps/embed?h=400&w=1500&cp=${data.latitude}~${data.longitude}&lvl=17&typ=d&sty=r&src=SHELL`;

  const InfoIcon = ({ icon, label, link }) => (
    <div className="flex flex-col items-center justify-center w-24 transform transition-transform duration-300 hover:scale-110">
      {link ? (
        <>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={icon}
              alt={label}
              className="w-8 h-8 mb-1 hover:scale-110 transition-transform"
            />
          </a>
          <p className="text-xs text-green-600 font-medium">Available</p>
        </>
      ) : (
        <>
          <img src={icon} alt={label} className="w-8 h-8 mb-1 opacity-50" />
          <p className="text-xs text-red-500 font-medium">Not Available</p>
        </>
      )}
      <span className="text-xs mt-1 text-gray-600 text-center">{label}</span>
    </div>
  );

  if (isLoading) {
    return (
      <div className="w-full mt-4 mb-8 bg-white rounded-2xl px-4 py-6">
        <LoadingSkeleton type="detail" />
      </div>
    );
  }

  return (
    <div className="w-full mt-4 mb-8 bg-white rounded-2xl px-4 py-6">
      {/* Main Section */}
      <div className="md:flex gap-6">
        {/* Left: Image - matching height with content side */}
        <div className="flex-1 ">
          <img
            src={data.featured_image}
            alt={data.name}
            className="w-full h-[250px] object-cover rounded-xl"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col lg:mt-0 mt-4 justify-between h-[300px]">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold lg:font-semibold text-gray-800 mb-2">{data.name}</h2>
            <p className="text-gray-600 mb-2 pt-4">{data.address}</p>
            <p className="text-gray-700 text-sm mb-4">{data.description}</p>

            <div className="mb-4 mt-2">
              <h4 className="font-semibold text-gray-700">Tags:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.tags?.split('  ').map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="w-full lg:mt-2 mt-24 flex justify-around items-center flex-wrap gap-4 border-t pt-6 ">
        <InfoIcon icon={phone}  link={data.phone ? `tel:${data.phone}` : null} />
        <InfoIcon icon={email}  link={data.email ? `mailto:${data.email}` : null} />
        <InfoIcon icon={internet}  link={data.website} />
        <InfoIcon icon={facebook} link={data.facebook} />
        <InfoIcon icon={instas}  link={data.instagram} />
        <InfoIcon icon={twitter}  link={data.twitter} />
      </div>
      <hr className='mt-6'/>
      {/* Map Section */}
      <div className="w-full mt-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Location Map:</h3>
        <iframe
          title="Location Map"
          src={embedMapUrl}
          width="100%"
          height="400"
          className="rounded-xl border w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CategoriesDetails;