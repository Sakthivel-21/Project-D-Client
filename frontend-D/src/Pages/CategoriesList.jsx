import React, { useState, useEffect } from 'react'
import img1 from '../assets/star2.jpg'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ButtonComponent from '../Components/ButtonComponent';

function CategoriesList() {

     axios.defaults.withCredentials = true;

     const { id } = useParams()

     const [data, setData] = useState([])
     const [showMore, setShowMore] = useState(false);

     useEffect(() => {
          axios.get(`http://localhost:8000/dindigul/categories/${id}/places/`)
               .then(response => {
                    setData(response.data)

               })
               .catch((err) => {
                    console.log(err)
               })
     })


     return (
          <>
               {/*<div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 justify-items-center gap-4 ml-4 mr-4'>

                    {data.map((item, index) => (


                         <>

                              <Link to={`/dindigul/places/${item.id}/`}><div className=' shadow border  mt-8 lg:flex' key={index}>

                                   <div className='ful flex justify-items-center'>
                                        <img src={img1} alt='' className='w-64 h-64'  ></img>
                                   </div>

                                   <div className='full flex'>
                                        <h1>{item.address}</h1>
                                   </div>
                              </div></Link>


                         </>
                    ))}
               </div>*/}

<div className="w-full mt-6">
      <h2 className="text-2xl font-semibold mb-8 text-center  underline decoration-blue-400">Places List</h2>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 ml-4 mr-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="sm:flex bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Image */}
            <div className="sm:w-1/3 min-w-[520px]">
              <img
                src={item.featured_image}
                alt=''
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="sm:p-5 w-2/3 sm:ml-4 w-full p-2">
              <h3 className="text-xl font-semibold text-black-800 mb-2">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mb-1">Description</p>
              <p className="text-base mb-3">{item.description}</p>

              <p className="text-sm text-gray-500 mb-1">Opening Time</p>
              <p className="text-base mb-3">9.00 am - 6.00 pm</p>

              <p className="text-sm text-gray-500 mb-1">Reviews</p>
             <img src={img1} alt='' className='w-32 h-6 mt-2 mb-4'></img>

              <Link to={`/dindigul/places/${item.id}/`}><ButtonComponent className='bg-transparent'>Read More ...</ButtonComponent></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
          </>
     )
}

export default CategoriesList