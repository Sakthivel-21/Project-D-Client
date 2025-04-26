import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import ButtonComponent from '../Components/ButtonComponent';
import axios from 'axios';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
      if (token) {
        fetchUserProfile();
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const response = await axios.get('http://localhost:8000/accounts/profile/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      
      if (response.data) {
        setUserProfile(response.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUserProfile(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserProfile(null);
    window.location.href = '/';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const ProfileButton = () => {
    if (isLoading) {
      return <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-md"></div>;
    }

    if (!isAuthenticated) {
      return (
        <Link to="/login">
          <ButtonComponent className="bg-blue-300 hover:bg-blue-400">
            Login
          </ButtonComponent>
        </Link>
      );
    }

    return (
      <div className="relative">
        <button
          onClick={() => setShowProfileMenu(!showProfileMenu)}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
            {userProfile?.username?.[0]?.toUpperCase() || <User size={20} />}
          </div>
          <span className="hidden md:block">{userProfile?.username}</span>
          <ChevronDown size={16} />
        </button>

        {showProfileMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Profile</span>
              </div>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    );
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
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md w-full">
        <div className="flex justify-between items-center h-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo - Updated for mobile */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Dindigul City
            </h1>
          </Link>

          {/* Desktop Nav - Improved spacing */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <ul className="flex space-x-3 lg:space-x-6">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="text-gray-700 hover:text-blue-500 transition-colors text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ProfileButton />
          </div>

          {/* Mobile Menu Toggle - Better touch target */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar - Improved animation and layout */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={toggleSidebar}
          />
          <div className="fixed right-0 top-0 bottom-0 w-[250px] bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <ul className="space-y-3 flex-1">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      onClick={toggleSidebar}
                      className="block py-2 px-4 rounded-lg hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pb-4">
                <ProfileButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
