import React,{useEffect, useState} from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import axios from 'axios'
import {Link} from 'react-router-dom'


function HomeCaregory() {


  axios.defaults.withCredentials= true;

  const [data , setData] = useState([])
  const [showMore, setShowMore] = useState(false);

  useEffect (() => {
      axios.get("http://localhost:8000/dindigul/categories/")
      .then(response => {
         setData(response.data)

      })
      .catch ((err) => {
        console.log(err)
      })
  })

  
  const visibleData = showMore ? data : data.slice(0, 16);

  return (
   <>
   <h1 className='text-center p-8 font-bold text-2xl text-blue-400 '>Categories</h1>

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
     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 ml-8 mr-8 justify-items-center">
          {visibleData.map((item, index) => (
            <Link to={`/dindigul/categories/${item.id}/places/`}>
              <div
              key={index}
              className="w-full bg-white p-2 shadow-lg border  items-center rounded text-center text-gray-800 font-medium 
              transform transition-transform duration-300 hover:scale-110"
            >
              <img src={item.image} alt='' className='w-32 h-32 items-center '></img>
              {item.name}
            </div></Link>
          ))}
         
        </div>

        <div className='grid justify-items-center mt-8'>
          <Link to='/categories'><ButtonComponent>More Categories</ButtonComponent></Link>
        </div>

        
       
        {/*{!showMore && (
          <div className="flex justify-center mt-6">
            {/*<button
              onClick={() => setShowMore(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              More Categories
            </button>
            <ButtonComponent onClick={() => setShowMore(true)} className='mt-8'>More Categories</ButtonComponent>
          </div>
        )}*/}
 


   </>
  )
}

export default HomeCaregory