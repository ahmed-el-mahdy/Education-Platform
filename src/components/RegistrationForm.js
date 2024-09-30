import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'learner'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      // Handle successful registration (e.g., redirect to login page or dashboard)
    } catch (error) {
      console.error('Registration error:', error.response.data);
      // Handle registration error (e.g., display error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="username" name="username" required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
               onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
               onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" required
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
               onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
        <select id="role" name="role" required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                onChange={handleChange}>
          <option value="learner">Learner</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Administrator</option>
          <option value="professor">Professor</option>
        </select>
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;