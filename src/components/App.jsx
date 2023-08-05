import React, { useState } from 'react';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Contact from './Contact';
import About from './About';
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
<<<<<<< HEAD
  useEffect(() => {
    console.log('this is the cookie', Cookies.get('grafid'));
    if (Cookies.get('grafid')) {
      setUser(Cookies.get('grafid'));
      navigate('/dashboard', { user: user });
    }
  }, []);
=======
>>>>>>> dev
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
<<<<<<< HEAD
        <Route path='/contact' element={<Contact />} />
=======
        <Route path='/about' element={<About setUser={funcSetUser} />} />
        <Route path='/contact' element={<Contact setUser={funcSetUser} />} />
>>>>>>> dev
      </Routes>
    </div>
  );
}

export default App;
