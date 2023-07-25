import React, { useState, useEffect } from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  // useState hook to pass callback down to child component
  const [user, setUser] = useState({});
  function funcSetUser(obj) {
    setUser(obj);
  }

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
