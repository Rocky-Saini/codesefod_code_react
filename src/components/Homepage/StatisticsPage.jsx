import React, { useState, useEffect } from 'react';

const StatisticsPage = () => {
  // State to hold the statistics values
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);
  const [hours, setHours] = useState(0);
  const [projects, setProjects] = useState(0);

  // Target values for the statistics
  const targetClients = 500;
  const targetAwards = 15;
  const targetHours = 10000;
  const targetProjects = 200;

  // Animation duration in milliseconds
  const animationDuration = 3000; // 3 seconds

  // Function to animate the numbers
  useEffect(() => {
    const increment = (target, setState) => {
      const startTime = Date.now();
      const updateNumber = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        const currentValue = Math.floor(progress * target);
        setState(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };
      requestAnimationFrame(updateNumber);
    };

    increment(targetClients, setClients);
    increment(targetAwards, setAwards);
    increment(targetHours, setHours);
    increment(targetProjects, setProjects);
  }, [targetClients, targetAwards, targetHours, targetProjects]);

  return (
    <div className="container py-20 text-center bg-black text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Our <b className='text-blue-500'>Achievement's</b>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Clients */}
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-5xl font-bold text-blue-500">{clients}+</h2>
          <p className="text-lg text-gray-300 mt-2">Clients with 5-Star Ratings</p>
        </div>
        {/* Awards */}
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-5xl font-bold text-blue-500">{awards}</h2>
          <p className="text-lg text-gray-300 mt-2">Award-Winning Years</p>
        </div>
        {/* Hours */}
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-5xl font-bold text-blue-500">{hours}+</h2>
          <p className="text-lg text-gray-300 mt-2">Hours of Expertise</p>
        </div>
        {/* Projects */}
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-5xl font-bold text-blue-500">{projects}+</h2>
          <p className="text-lg text-gray-300 mt-2">Successful Projects</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;