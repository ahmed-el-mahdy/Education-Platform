import React from 'react';
import { BookOpenIcon } from '@heroicons/react/solid';

const CourseCard = ({ title, description, instructor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <BookOpenIcon className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500">Instructor: {instructor}</p>
      </div>
      <div className="bg-gray-50 px-4 py-3">
        <button className="btn btn-primary w-full">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;