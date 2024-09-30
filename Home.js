import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubjectCard from './SubjectCard';

const Home = () => {
  const [featuredSubjects, setFeaturedSubjects] = useState([]);

  useEffect(() => {
    const fetchFeaturedSubjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/subjects/featured');
        setFeaturedSubjects(response.data);
      } catch (error) {
        console.error('Error fetching featured subjects:', error);
      }
    };

    fetchFeaturedSubjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to EduPlatform</h1>
          <p className="text-xl mb-8">Expand your knowledge with our wide range of subjects</p>
          <a href="/subjects" className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Explore Subjects
          </a>
        </div>
      </div>

      {/* Featured Subjects Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSubjects.map(subject => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Subject</h3>
              <p>Browse our wide range of subjects and find what interests you.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Enroll in Classes</h3>
              <p>Sign up for upcoming class sessions at times that suit you.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Attend via Zoom</h3>
              <p>Join live classes through Zoom and interact with instructors and peers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;