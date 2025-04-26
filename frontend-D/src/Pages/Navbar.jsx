import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ButtonComponent from '../Components/ButtonComponent';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Offers', link: '/offers' },
    { name: 'Categories', link: '/categories' },
    { name: 'About', link: '/aboutpage' },
    { name: 'Contact us', link: '/contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md w-full">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            Dindigul City
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/*<Link
              to="/login"
              className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition"
            >
              Login
            </Link>*/}
             <Link  to="/login" ><ButtonComponent className='bg-blue-300 hover:bg-blue-400'>Login</ButtonComponent></Link>
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-blue-500 p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar Panel */}
          <div className="ml-auto w-64 h-full bg-white shadow-lg transform transition-transform duration-300">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-700 hover:text-red-500"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="space-y-4">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      onClick={toggleSidebar}
                      className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {/*<Link
                  to="/login"
                  onClick={toggleSidebar}
                  className="block bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-center"
                >
                  Login
                </Link>*/}
                <Link  to="/login" ><ButtonComponent onClick={toggleSidebar}>Login</ButtonComponent></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
