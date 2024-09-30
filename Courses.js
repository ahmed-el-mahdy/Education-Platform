import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React', instructor: 'John Doe' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master JavaScript concepts', instructor: 'Jane Smith' },
    { id: 3, title: 'Web Design Fundamentals', description: 'Create beautiful web layouts', instructor: 'Mike Johnson' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;