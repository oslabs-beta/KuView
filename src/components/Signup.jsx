import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  // fetch request handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // logs the form data
    const submission = Object.fromEntries(data.entries());
    console.log('submission', submission);
    //
  };
  return (
    <div className='signup'>
      <div className='card'>
        <div className='left'>
          <h1>Welcome to KuView!</h1>
          <p>
            Monitor your Kubernetes clusters all in one place. Built with
            Prometheus and Grafana.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              name='username'
              type='text'
              placeholder='Username'
              required
            />
            <input name='email' type='email' placeholder='Email' required />
            <input
              name='password'
              type='password'
              placeholder='Password'
              required
            />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
