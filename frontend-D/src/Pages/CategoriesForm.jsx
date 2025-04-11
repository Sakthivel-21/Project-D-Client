import React, { useState } from 'react';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';

const CategoriesForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    tags: '',
    featured_image: null,
    bing_maps_url: '',
    latitude: '',
    longitude: '',
    website: '',
    phone: '',
    email: '',
    facebook: '',
    instagram: '',
    twitter: '',
    social_media: {},
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await fetch('http://localhost:8000/api/places/', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        alert('Place saved successfully!');
      } else {
        alert('Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      alert('Error while saving data!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Add New Place</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Address', name: 'address', type: 'textarea' },
          { label: 'Description', name: 'description', type: 'textarea' },
          { label: 'Tags', name: 'tags', type: 'text' },
          { label: 'Featured Image', name: 'featured_image', type: 'file' },
          { label: 'Bing Maps URL', name: 'bing_maps_url', type: 'url' },
          { label: 'Latitude', name: 'latitude', type: 'number', step: 'any' },
          { label: 'Longitude', name: 'longitude', type: 'number', step: 'any' },
          { label: 'Website', name: 'website', type: 'url' },
          { label: 'Phone', name: 'phone', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Facebook', name: 'facebook', type: 'url' },
          { label: 'Instagram', name: 'instagram', type: 'url' },
          { label: 'Twitter', name: 'twitter', type: 'url' },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                onChange={handleChange}
                value={formData[field.name]}
                className="mt-1 block w-full border rounded-md p-2"
                rows={3}
              />
            ) : (
              <InputComponent
              type={field.type}
              name={field.name}
              onChange={handleChange}
              value={field.type !== 'file' ? formData[field.name] : undefined}
              step={field.step}
              className="mt-1 block w-full border rounded-md p-2"></InputComponent>
            )}
          </div>
        ))}

       <ButtonComponent
        type="submit"
       
    > Save Category</ButtonComponent>
      </form>
    </div>
  );
};

export default CategoriesForm;
