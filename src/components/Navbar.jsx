import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <NavContainer>
      <a href='/' className='site-title'>
        KuView
      </a>
      <ul>
        <li>
          <Link to='#'>Dashboard</Link>
        </li>
        <li>
          <Link to='#'>About</Link>
        </li>
        <li>
          <Link to='#'>Contact</Link>
        </li>
      </ul>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;
  .site-title {
    font-size: 2.5rem;
    padding: 0.8rem;
  }

  a {
    color: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.25rem;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;

    li:hover {
      background-color: #777;
    }

    li.active {
      background-color: #555;
    }
  }
`;

export default Navbar;
