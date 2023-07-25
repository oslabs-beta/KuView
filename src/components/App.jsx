import React from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
