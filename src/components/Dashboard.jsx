import React from 'react';
import LoadingCube from './LoadingCube';
import { Link, useNavigate, userNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Iframe from './Iframe';

const Dashboard = (props) => {
  // fake simulation of loading and then displaying data afterwards
  console.log(props);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    props.user === '' ? navigate('/') : fetchData();
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingCube />
      ) : (
        <div>
          <Iframe uid={props.user} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
