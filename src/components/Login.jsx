import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

function Login(props) {
  //import .env variable
  const URL = 'http://localhost:4000/users/login';
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  // fetch request handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    //gives FormData the submitted entries from form
    const data = new FormData(e.target);
    // form data - turns form data into object
    const submission = Object.fromEntries(data.entries());
    // submit fetch request to backend here
    try {
      const res = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });
      console.log('response: ', res);
      if (res.ok) {
        // take that response data (which holds the UID and pass it down through props)
        const objUser = await res.json();
        // call the setter to set state of user
        Cookies.set('grafid', objUser.grafid, { expires: 1 });
        props.setUser(objUser.grafid);
        navigate('/dashboard', { user: objUser.grafid });
      } else {
        setShowConfirmation(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Welcome to KuView!</h1>
          <p>
            Monitor your Kubernetes clusters all in one place. Built with
            Prometheus and Grafana.
          </p>
          <span>Don't have an account?</span>
          <Link to='/signup'>
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              name='username'
              type='text'
              placeholder='Username'
              required
            />
            <input
              name='password'
              type='password'
              placeholder='Password'
              required
            />
            <button>Login</button>
          </form>
          {showConfirmation && <p id='error'>Wrong username or password! </p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
