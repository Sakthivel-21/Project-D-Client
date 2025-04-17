import React from "react";

const Footer = () => {
  const createSlug = (text) => text.toLowerCase().replace(/\s/g, "-");

  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold">Dindigul City</h1>
          <p className="text-sm text-blue-200">Your Ultimate Guide</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm lg:ml-64">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              {[
                "Digital Marketing",
                "Website & Mobile APP",
                "Web-Hosting",
                "Card Printing",
                "Designing"
              ].map((service, i) => (
                <li key={i}>
                  <a href={`/${createSlug(service)}`} className="hover:underline text-blue-100">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-8">
            <h3 className="font-semibold mb-2 ">Quick Menu</h3>
            <ul className="space-y-1">
              {["Shops", "Services", "Education", "Hospitals", "Hotels"].map((item, i) => (
                <li key={i}>
                  <a href="/categories" className="hover:underline text-blue-100">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-blue-100">📍 Dindigul, Tamil Nadu</p>
            <p className="text-blue-100">📞 +91 987 654 3210</p>
            <p className="text-blue-100">✉️ info@dindigulcity.com</p>
            <div className="flex space-x-3 mt-3">
              {["f", "t", "i", "w"].map((icon, i) => (
                <span
                  key={i}
                  className="bg-white text-blue-700 w-7 h-7 flex items-center justify-center rounded-full text-sm hover:bg-yellow-300 transition"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 border-t border-blue-500 pt-4 text-xs text-blue-200">
          <p>&copy; {new Date().getFullYear()} Dindigul City. All rights reserved.</p>
          <p>Made with ❤️ for Dindigul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
