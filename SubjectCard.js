import React from 'react';
import { Link } from 'react-router-dom';

const SubjectCard = ({ id, name, description, nextSession }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {nextSession && (
          <p className="text-sm text-gray-500 mb-2">
            Next session: {new Date(nextSession.start_time).toLocaleString()}
          </p>
        )}
        <Link 
          to={`/subjects/${id}`}
          className="btn btn-primary w-full block text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SubjectCard;