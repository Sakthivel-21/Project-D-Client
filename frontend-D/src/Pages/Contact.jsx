import React, { useState, useEffect } from "react";
import contactImage from "../assets/summary.jpg";
import ButtonComponent from "../Components/ButtonComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const { name, email, phone, message } = formData;
    
    // The WhatsApp recipient number - ensure it's in international format with no spaces or special characters
    // Strip any non-numeric characters just in case
    const recipientNumber = "91636956774".replace(/\D/g, '');
    
    // Format the message text for WhatsApp
    const whatsappText = encodeURIComponent(
      `📩 Contact Form Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n📝 Message: ${message}`
    );
    
    // Try both potential WhatsApp API formats for better compatibility
    const whatsappURL = `https://wa.me/${recipientNumber}?text=${whatsappText}`;
    const alternateURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${whatsappText}`;
    
    // Try opening WhatsApp
    const windowRef = window.open(whatsappURL, "_blank");
    
    // Show instructions modal if WhatsApp doesn't open or for mobile devices
    setTimeout(() => {
      setShowInstructions(true);
      setIsSubmitting(false);
    }, 1500);
    
    // Reset the form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h1 className="text-2xl font-bold text-center text-blue-400 mb-12">
        Contact Us via WhatsApp
      </h1>

      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Left Side - Image Section */}
        <div className="w-full md:w-1/2 relative h-[320px] md:h-auto">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 text-white">
            <h2 className="text-2xl font-bold mb-4 pt-4 ">
              We're just a message away!
            </h2>
            <p className="text-lg mb-6">
              Fill out this form to contact us directly via WhatsApp.
            </p>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">📍</span> 123 Main Street, Dindigul
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span> +91 8531817917
              </p>
              <p className="flex items-center pb-4">
                <span className="mr-2">✉️</span> info@dindigulcity.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Send Us a WhatsApp Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter 10-digit phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Type your message here.."
                required
              ></textarea>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="whatsapp-consent"
                type="checkbox"
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="whatsapp-consent" className="ml-2 text-sm text-gray-700">
                I understand that clicking "Send" will open WhatsApp with my information
              </label>
            </div>

            <ButtonComponent 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </ButtonComponent>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              Note: You may need to save our number (+91 8531817917) to your contacts for WhatsApp to work properly.
            </p>
          </form>
        </div>
      </div>
      
      {/* Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Instructions to Send WhatsApp Message</h3>
            <ol className="list-decimal pl-5 space-y-2 mb-6">
              <li>Save our WhatsApp number <strong>+91 8531817917</strong> to your contacts</li>
              <li>Open WhatsApp on your phone</li>
              <li>Search for the newly saved contact</li>
              <li>Copy this message:</li>
              <div className="bg-gray-100 p-3 rounded-md my-2 text-sm">
                📩 Contact Form Submission:

                👤 Name: {formData.name}
                📧 Email: {formData.email}
                📞 Phone: {formData.phone}
                📝 Message: {formData.message}
              </div>
              <li>Paste the message and send</li>
            </ol>
            <div className="flex justify-end">
              <button 
                onClick={() => setShowInstructions(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;