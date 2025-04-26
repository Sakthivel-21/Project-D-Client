import React, { useEffect, useState } from 'react';
import ButtonComponent from '../Components/ButtonComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LoadingSkeleton } from '../Components/LoadingSkeleton';

function Categories() {
  axios.defaults.withCredentials = true;

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); // original unfiltered data
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/dindigul/categories/')
      .then((response) => {
        setData(response.data);
        setAllData(response.data); // save original data
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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
      <h1 className="text-center pt-12 font-bold text-2xl text-blue-400">Categories</h1>

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
        {isLoading ? (
          <LoadingSkeleton type="card" count={16} />
        ) : (
          data.map((item, index) => (
            <Link key={item.id} to={`/dindigul/categories/${item.id}/places/`}>
              <div
                className="w-full bg-white p-2 shadow-lg border items-center rounded text-center text-gray-800 font-medium 
                transform transition-transform duration-300 hover:scale-110"
              >
                <img src={item.image} alt="" className="w-32 h-32 object-cover mx-auto mb-2" />
                {item.name}
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default Categories;