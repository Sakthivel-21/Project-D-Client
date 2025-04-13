import React, { useState } from "react";
import img from '../assets/biriyani.jpeg';
import ButtonComponent from "../Components/ButtonComponent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    <>
    <h2 className="text-2xl font-bold text-black underline text-center decoration-blue-400 ">Contact Us</h2>
   
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10 mt-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch gap-10">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="h-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
            <img
              src={img}
              alt="Contact Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex items-stretch">
          <div className="backdrop-blur-xl bg-white/60 shadow-lg rounded-3xl p-8 md:p-10 border border-white/30 w-full">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">Get in Touch</h2>
            <p className="text-gray-700 mb-6">Have questions? We'd love to hear from you!</p>

            {submitted ? (
              <div className="text-green-600 font-semibold text-lg">Thanks! We'll be in touch soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-800 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-gray-300 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-800 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-800 mb-1">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className="w-full border border-gray-300 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-800 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <ButtonComponent 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                >
                  Send Message
                </ButtonComponent>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Contact;
