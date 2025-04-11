import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import phone from '../assets/phones.jpg'
import facebook from '../assets/facebook.png'
import email from '../assets/mail.jpg'
import instas from '../assets/instas.jpg'
import internet from '../assets/internet.png'
import twitter from '../assets/twitter.png'

const CategoriesDetails = () => {

  axios.defaults.withCredentials = true;

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  //const [loading, setLoading] = useState(true);

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/dindigul/places/${id}/`)
      .then(response => {
        setData(response.data)

      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  const embedMapUrl = `https://www.bing.com/maps/embed?h=400&w=1500&cp=${data.latitude}~${data.longitude}&lvl=17&typ=d&sty=r&src=SHELL`;


  if (!data) {
    return <div className="text-center mt-10 text-xl font-medium">Loading places...</div>;
  }

  return (
<>
<div className="w-full my-10 p-6 bg-white rounded-2xl  border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div>
          <img
            src={data.featured_image}
            alt={data.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h2>
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

          <div className="mt-4 space-y-3 text-sm text-gray-600">

  {/* Phone */}
  <div>
  <p className="flex items-center gap-2">
   
      <a href={`tel:${data.phone}`} target="_blank" rel="noopener noreferrer">
        <img src={phone} alt="Phone" className="w-6 h-6 hover:scale-110 transition-transform inline" />

      </a>
     <p>{data.phone || "Not available"}</p>
  </p>
  </div>

  {/* Email */}
  <p className="flex items-center gap-2">
    {data.email ? (
      <a href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer">
        <img src={email} alt="Email" className="w-6 h-6 hover:scale-110 transition-transform inline" />
      </a>
    ) : (
      <img src={email} alt="Email" className="w-6 h-6 opacity-50 inline" />
    )}
    {data.email || "Not available"}
  </p>

  {/* Website */}
  <p className="flex items-center gap-2">
    {data.website ? (
      <a href={data.website} target="_blank" rel="noopener noreferrer">
        <img src={internet} alt="Website" className="w-6 h-6 hover:scale-110 transition-transform inline" />
      </a>
    ) : (
      <img src={internet} alt="Website" className="w-6 h-6 opacity-50 inline" />
    )}
    {data.website || "Not available"}
  </p>

  {/* Facebook */}
  <div className='w-full'>
  <p className="sm:flex items-center gap-2">
   
      <a href={`tel:${data.facebook}`} target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Phone" className="w-6 h-6 hover:scale-110 transition-transform inline" />

      </a>
     <p>{data.facebook || "Not available"}</p>
  </p>
  </div>

  {/* Instagram */}
  <p className="flex items-center gap-2">
    {data.instagram ? (
      <a href={data.instagram} target="_blank" rel="noopener noreferrer">
        <img src={instas} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform inline" />
      </a>
    ) : (
      <img src={instas} alt="Instagram" className="w-6 h-6 opacity-50 inline" />
    )}
    {data.instagram || "Not available"}
  </p>

  {/* Twitter */}
  <p className="flex items-center gap-2">
    {data.twitter ? (
      <a href={data.twitter} target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform inline" />
      </a>
    ) : (
      <img src={twitter} alt="Twitter" className="w-6 h-6 opacity-50 inline" />
    )}
    {data.twitter || "Not available"}
  </p>
</div>


          
        </div>
      </div>
      

      {/* Bing Map Section */}
      <div className='w-full  mt-8 ml-2 mr-2'>
     
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
     </>

  );
};

export default CategoriesDetails;
