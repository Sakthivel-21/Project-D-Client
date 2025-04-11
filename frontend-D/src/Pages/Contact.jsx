import React, { useState } from "react";
import img from '../assets/biriyani.jpeg';
import ButtonComponent from "../Components/ButtonComponent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
    
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen md:min-h-[80vh] w-full bg-white flex flex-col md:flex-row items-center justify-center px-3 py-8">
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="w-[500px] h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={img}
            alt="Company"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right - Form Section */}
<div className="w-full md:w-1/2 flex items-center h-[400px]  justify-center px-4 py-6">
  <div className="w-full max-w-md">
    <h2 className="text-2xl font-bold text-black mb-2">Contact Us</h2>
    <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form below.</p>

    {submitted ? (
      <div className="text-green-600 font-semibold text-lg">Thanks! We'll be in touch soon.</div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Phone</label>
          <input
            type="number"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>
        <ButtonComponent 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Send Message
        </ButtonComponent>
      </form>
    )}
  </div>
</div>

    </div>
  );
};

export default Contact;
