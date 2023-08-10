import React, { useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Contact from './Contact';

function App() {
  // useState hook to pass callback down to child component
  // update user state name to something that is more of a reference to grafid
  const [user, setUser] = useState('');
  function funcSetUser(str) {
    setUser(str);
    return;
  }
  //
  return (
    <div data-testid='app-element'>
      <Navbar setUser={funcSetUser} />
      <Routes>
        <Route path='/login' element={<Login setUser={funcSetUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={<Dashboard user={user} setUser={funcSetUser} />}
        />
        <Route path='/' element={<Login setUser={funcSetUser} />} />
        <Route path='/contact' element={<Contact setUser={funcSetUser} />} />
      </Routes>
    </div>
  );
}

export default App;
