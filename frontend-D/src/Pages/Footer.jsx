import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const createSlug = (text) => text.toLowerCase().replace(/\s/g, "-");

  return (
    <footer className="bg-blue-400 text-white py-8">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Dindigul City</h1>
          <p className="text-sm text-blue-100">Your Ultimate Guide</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm lg:ml-64">
          {/* Services */}
          <div >
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-blue-100">
              {[
                "Digital Marketing",
                "Website & Mobile APP",
                "Web-Hosting",
                "Card Printing",
                "Designing",
              ].map((service, i) => (
                <li key={i}>
                  <a  className="hover:underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Menu</h3>
            <ul className="space-y-2 text-blue-100">
              {["Shops", "Services", "Education", "Hospitals", "Hotels"].map((item, i) => (
                <li key={i}>
                  <a href="/categories" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white" size={14} />
                <span>Dindigul, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white" size={14} />
                <span>+91 987 654 3210</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" size={14} />
                <span>info@dindigulcity.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <span
                  key={i}
                  className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-300 transition"
                >
                  <Icon size={16} className="text-blue-700" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-10 border-t border-blue-300 pt-4 text-xs text-blue-100">
          <p>&copy; {new Date().getFullYear()} Dindigul City. All rights reserved.</p>
          <p>Made with ❤️ for Dindigul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
