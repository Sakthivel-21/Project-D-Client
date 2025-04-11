import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Navigation items without icons
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Offers', link: '/offers' },
    { name: 'List Business', link: '/list-business' },
    { name: 'About us', link: '/about' },
    { name: 'Contact us', link: '/contact' },
  ];

  return (
    <>
      {/* Main Navbar - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Dindigul City</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.link} 
                      className="text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                to="/login" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button - Keep Menu/X icons for toggle only */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
        
        <div className={`fixed top-0 right-0 w-64 h-full bg-white transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button 
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-red-500 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className="block p-2 rounded-md hover:bg-gray-100"
                    onClick={toggleSidebar}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link 
                to="/login" 
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                onClick={toggleSidebar}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;