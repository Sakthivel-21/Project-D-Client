import React,{useState} from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import ac from '../assets/ac.jpg'
import bus from '../assets/bus.jpg'
import hospital from '../assets/hospital.jpg'
import hotel from '../assets/hotel.jpg'
import hotels from '../assets/hotels.jpeg'


function HomeCaregory() {

  const data = Array.from({ length: 30 }, (_, i) => `Data ${i + 1}`);

  const [showMore, setShowMore] = useState(false);

  // Determine how many items to show
  const visibleData = showMore ? data : data.slice(0, 10);

  return (
   <>
   <h1 className='text-center p-8 font-bold text-2xl underline decoration-blue-400 '>Categories</h1>

        {/*<div className="grid grid-cols-2 lg:grid-cols-5 gap-24 ml-8 mr-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white  shadow rounded  text-center p-2  text-gray-800 font-medium"
            >
              <img src={ac} alt='' className='w-32 h-32 lg:ml-8'></img>
              {item}
            </div>
          ))}
        </div>*/}
     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-24 ml-8 mr-8">
          {visibleData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-2 shadow rounded text-center text-gray-800 font-medium"
            >
              <img src={ac} alt='' className='w-32 h-32 lg:ml-8'></img>
              {item}
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="flex justify-center mt-6">
            {/*<button
              onClick={() => setShowMore(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              More Categories
            </button>*/}
            <ButtonComponent onClick={() => setShowMore(true)}>More Categories</ButtonComponent>
          </div>
        )}
 


   </>
  )
}

export default HomeCaregory