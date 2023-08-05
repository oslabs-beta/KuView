import React, { useState, useEffect } from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
  // useState hook to pass callback down to child component
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  function funcSetUser(str) {
    setUser(str);
  }
  //
  useEffect(() => {
    console.log('this is the cookie', Cookies.get('grafid'));
    if (Cookies.get('grafid')) {
      setUser(Cookies.get('grafid'));
      navigate('/dashboard', { user: user });
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login setUser={funcSetUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard user={user} />} />
        <Route path='/' element={<Login setUser={funcSetUser} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
