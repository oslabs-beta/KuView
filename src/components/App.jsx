import React from 'react';
import LoadingCube from './LoadingCube';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
}

export default App;
