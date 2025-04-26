import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingSkeleton } from '../Components/LoadingSkeleton';
import InputComponent from '../Components/InputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import { User } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }

      const response = await axios.get('http://localhost:8000/accounts/profile/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setProfile(response.data);
      setEditForm(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else {
        setError('Failed to fetch profile');
      }
      setIsLoading(false);
    }
  };

  const handleEdit = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }

      await axios.put('http://localhost:8000/accounts/profile/', editForm, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setProfile(editForm);
      setSuccess('Profile updated successfully');
      setIsEditing(false);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else {
        setError(err.response?.data?.message || 'Failed to update profile');
      }
    }
  };

  if (isLoading) {
    return <LoadingSkeleton type="detail" />;
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
            {profile?.username ? (
              <span className="text-2xl text-white font-semibold">
                {profile.username[0].toUpperCase()}
              </span>
            ) : (
              <User className="w-8 h-8 text-white" />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{profile?.username}</h2>
            <p className="text-gray-600">{profile?.email}</p>
          </div>
        </div>
        <ButtonComponent
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-400 text-white"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </ButtonComponent>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Profile Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputComponent
            label="Username"
            name="username"
            value={isEditing ? editForm.username : profile.username}
            onChange={handleEdit}
            disabled={!isEditing}
          />
          <InputComponent
            label="Email"
            name="email"
            value={isEditing ? editForm.email : profile.email}
            onChange={handleEdit}
            disabled={!isEditing}
            type="email"
          />
          <InputComponent
            label="First Name"
            name="first_name"
            value={isEditing ? editForm.first_name : profile.first_name}
            onChange={handleEdit}
            disabled={!isEditing}
          />
          <InputComponent
            label="Last Name"
            name="last_name"
            value={isEditing ? editForm.last_name : profile.last_name}
            onChange={handleEdit}
            disabled={!isEditing}
          />
          <InputComponent
            label="Phone"
            name="phone"
            value={isEditing ? editForm.phone : profile.phone}
            onChange={handleEdit}
            disabled={!isEditing}
          />
          <InputComponent
            label="Address"
            name="address"
            value={isEditing ? editForm.address : profile.address}
            onChange={handleEdit}
            disabled={!isEditing}
          />
        </div>

        {isEditing && (
          <div className="mt-6 flex justify-end">
            <ButtonComponent type="submit" className="bg-green-500 text-white">
              Save Changes
            </ButtonComponent>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile;
