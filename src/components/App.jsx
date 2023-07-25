import React, { useState, useEffect } from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function App() {
  // useState hook to pass callback down to child component
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  function funcSetUser(str) {
    setUser(str);
  }
  //
  useEffect(() => {
    if (Cookies.get('ssid')){
      setUser(Cookies.get('ssid'))
      navigate('/dashboard')
      navigate('/dashboard', { user: user });
    } 
  }, [])
  let newPath = ''
  //request to backend /
    //depending on if it reutrns a string we asign either '/' or '/dashboard'
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login setUser={funcSetUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard user={user} />} />
        <Route path='/' element={<Login setUser={funcSetUser} />} />
      </Routes>
    </>
  );
}

export default App;
