import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-8 mt-10">
      <div className="container mx-auto px-6">
        {/* Our Mission Section */}
        <div className="text-center mb-6 items-center">
          <h2 className="text-xl font-semibold text-black text-underline">Our Mission</h2>
          <p className="text-sm text-gray-700 mt-2 sm:w-[700px] sm:ml-[350px]">
          Our mission is to connect people with the right workplaces and services in Dindigul district by offering an organized, easy-to-access directory of businesses, institutions, and skilled professionals
              </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Other Services Section */}
          <div className="sm:ml-32">
            <h3 className="text-lg font-semibold text-black">Other Services</h3>
            <ul className="mt-2 space-y-2">
              {[
                "Digital Marketing", "Website & Mobile APP", "Web-Hosting and Domain purchase services",
                "Visiting card, Banner, Boucher Printing Services", "Designing services",
                "Video Ad editing and Dubbing services", "GST Filing services", "Firm Registration Services",
                "FSSAI, Trademark, Patent related Services"
              ].map((service, index) => (
                <li key={index}>
                  <Link to={`/${service.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-blue-400 text-gray-700 transition">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            {/* Menu & Services */}
     
          {/* Menu Section */}
          <div className="sm:ml-52">
            <h3 className="text-lg font-semibold text-black">Menu</h3>
            <ul className="mt-2 space-y-2">
              {[
                "Shops", "Services", "Transport", "Education", "Hospitals",
                "Hotels", "Offers", "Market price", "Jobs ", "Fun", " News"
              ].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-blue-400 text-gray-700 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Products Section */}
          <div className="ml-50">
            <h3 className="text-lg font-semibold text-black">Other Products</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/namma-karur-shopping" className="hover:text-blue-400 text-gray-700 transition">
                  Dindigul Shopping
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="text-center mt-8">
          <h3 className="text-lg font-semibold text-black">Stay Connected</h3>
          <p className="text-sm text-gray-700 mt-2">
            Follow us for updates and more information.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-black text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
