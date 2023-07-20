import React from 'react';
import styled from 'styled-components';
const TestTwo = () => {
  return (
    <Wrapper>
      <Title>Welcome to Kuview!</Title>
      <Button>click me!</Button>
      <Button primary>click me!</Button>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  display: flex;
`;
const Button = styled.button`
  /* Adapt the colors based on the 'primary' prop */
  background: ${(props) => (props.primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#BF4F74')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

export default TestTwo;
