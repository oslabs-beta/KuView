import React from 'react';
import LoadingCube from './LoadingCube';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Login /> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {/* <Signup /> */}
    </>
  );
}

export default App;
