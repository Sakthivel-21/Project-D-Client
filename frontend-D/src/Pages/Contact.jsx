import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contactImage from "../assets/summary.jpg";
import ButtonComponent from "../Components/ButtonComponent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9u9df5r",      // replace with your EmailJS service ID
        "template_1p1yo7g",     // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "EFaU7KpjVQKnt_0Kn"       // replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for your message! We'll get back to you soon.");
          setFormData({ name: "", email: "",  message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center text-blue-400 mb-12 ">
        Get in Touch
      </h1>

      <div className="flex flex-col md:flex-row bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side - Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              We’d love to hear from you!
            </h2>
            <p className="text-lg mb-6">
              Feel free to reach out using the form, or contact us directly.
            </p>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">📍</span> 123 Main Street, Dindigul
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span> +91 987 654 3210
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span> info@dindigulcity.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Send Us a Message
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

            {/*<div>
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
                placeholder="Enter your phone number"
              />
            </div>*/}

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

            <ButtonComponent type="submit">Send Message</ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
