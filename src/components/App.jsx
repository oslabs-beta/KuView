import React, { useState, useEffect } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import About from './About';

function App() {
  // useState hook to pass callback down to child component
  // update user state name to something that is more of a reference to grafid
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
  }, [user]);
  return (
    <div data-testid='app-element'>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login setUser={funcSetUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard user={user} />} />
        <Route path='/' element={<Login setUser={funcSetUser} />} />
      </Routes>
    </div>
  );
}

export default App;
