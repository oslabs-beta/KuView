import React from 'react';
import LoadingCube from './LoadingCube';
import { Link, useNavigate, userNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Iframe from './Iframe';
import Cookies from 'js-cookie';

const Dashboard = (props) => {
  // fake simulation of loading and then displaying data afterwards
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const URL = 'http://localhost:4000/users/sendgraf';
  useEffect(() => {
    const fetchData = async () => {
      console.log(props.login);

      try {
        const res = await fetch(URL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(props.user),
        });
        if (res.ok) {
          const objUser = await res.json();
          props.setUser(objUser);
          Cookies.set('grafid', objUser.grafid, { expires: 1 });
          console.log('stopping loading');
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (Cookies.get('grafid') !== undefined) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      props.user !== '' ? fetchData() : navigate('/');
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingCube />
      ) : (
        <div>
          <Iframe cookie={Cookies.get('grafid')} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
