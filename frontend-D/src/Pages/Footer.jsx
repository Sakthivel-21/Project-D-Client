import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-8 mt-10">
      
      <div className="container mx-auto px-6">
        {/* Our Mission Section */}
       <h1 className="text-center text-2xl font-bold text-black pb-6">Dindigul City</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Other Services Section */}
          <div className="sm:ml-32">
            <h3 className="text-lg font-semibold text-black  underline decoration-black">Other Services</h3>
            <ul className="mt-2 space-y-2">
              {[
                "Digital Marketing", "Website & Mobile APP", "Web-Hosting and Domain purchase services",
                "Visiting card, Banner, Boucher Printing Services", "Designing services"
                
                
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
            <h3 className="text-lg font-semibold text-black  underline decoration-black">Menu</h3>
            <ul className="mt-2 space-y-2">
              {[
                "Shops", "Services",  "Education", "Hospitals",
                "Hotels"
              ].map((item, index) => (
                <li key={index}>
                  <Link to={'/categories'} className="hover:text-black text-gray-700 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Products Section */}
          <div className="ml-50">
            <h3 className="text-lg font-semibold text-black  underline decoration-black">Other Products</h3>
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
          &copy; {new Date().getFullYear()} Dindigul City. All rights reserved.
        </div>
     </div>
    </footer>
  );
};

export default Footer;
