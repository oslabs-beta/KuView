import React from 'react';
import styled from 'styled-components';
const Input = (props) => {
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      minLength={props.minLength}
    />
  );
};

export default Input;
