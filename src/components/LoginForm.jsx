import React from 'react';
import { useState } from 'react';
import Input from './Input';
import styled from 'styled-components';
const LoginForm = () => {
  const [values, setValues] = useState({});
  // add functionality for validating form before submission

  // fetch request here
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // logs the form data
    console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div className='form-container'>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Input name='username' placeholder='Username' />
          <Input name='password' placeholder='Password' type='password' />
          <button type='submit'>Submit</button>
        </form>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  min-width: 50%;
  height: 50%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    input {
      color: #fff;
      display: block;
      padding: 1em;
      border-radius: 0.5em;
      background-color: #252a35;
      outline: none;
      &::placeholder {
        color: #878787;
      }
    }
    button {
      padding: 1em 0.5em;
      border-radius: 5px;
      background-color: #5069ff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }
`;

export default LoginForm;
