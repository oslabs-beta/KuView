import React from 'react';
import LoadingCube from './LoadingCube';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
const Dashboard = () => {
  // fake simulation of loading and then displaying data afterwards
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000); // Simulated delay of 2 seconds (adjust as needed)
    };

    fetchData();
  }, []);

  return <div>{isLoading ? <LoadingCube /> : <div>Hello</div>}</div>;
};

export default Dashboard;
