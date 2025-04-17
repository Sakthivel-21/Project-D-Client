{/*import React,{useEffect, useState} from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Categories() {


  axios.defaults.withCredentials= true;

  const [data , setData] = useState([])
  const [query, setQuery] = useState('');
  //const [showMore, setShowMore] = useState(false);

  useEffect (() => {
      axios.get("http://localhost:8000/dindigul/categories/")
      .then(response => {
         setData(response.data)

      })
      .catch ((err) => {
        console.log(err)
      })
  })

  const handleSearch = () => {
    const filtered = name.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setData(filtered);
  };
  
  //const visibleData = showMore ? data : data.slice(0, 16);

  return (
   <>
   <h1 className='text-center p-8 font-bold text-2xl underline decoration-blue-400 '>Categories</h1>

   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
        </div>
        </div>
     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 ml-8 mr-8 justify-items-center">
          {data.map((item, index) => (
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

       {/*} <div className='grid justify-items-center mt-8'>
          <Link to='/categories'><ButtonComponent>More Categories</ButtonComponent></Link>
        </div>

        
       
        {!showMore && (
          <div className="flex justify-center mt-6">
            {/*<button
              onClick={() => setShowMore(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              More Categories
            </button>
            <ButtonComponent onClick={() => setShowMore(true)} className='mt-8'>More Categories</ButtonComponent>
          </div>
        )
 


   </>
  )
}

export default Categories*/}

import React, { useEffect, useState } from 'react';
import ButtonComponent from '../Components/ButtonComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Categories() {
  axios.defaults.withCredentials = true;

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); // original unfiltered data
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/dindigul/categories/')
      .then((response) => {
        setData(response.data);
        setAllData(response.data); // save original data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // important: empty dependency array to run only once

  useEffect(() => {
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filtered);
  }, [query, allData]);

  return (
    <>
      <h1 className="text-center pt-12 font-bold text-2xl  text-blue-400 ">Categories</h1>

      <div className="flex flex-col items-center justify-center min-h-fit  p-4">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 ml-8 mr-8 justify-items-center mt-6">
        {data.map((item, index) => (
          <Link key={item.id} to={`/dindigul/categories/${item.id}/places/`}>
            <div
              className="w-full bg-white p-2 shadow-lg border items-center rounded text-center text-gray-800 font-medium 
              transform transition-transform duration-300 hover:scale-110"
            >
              <img src={item.image} alt="" className="w-32 h-32 object-cover mx-auto mb-2" />
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;