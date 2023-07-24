import React from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
