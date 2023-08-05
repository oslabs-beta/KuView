import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from '../scss/Navbar.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div data-testid='navbar-element' className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>KuView</span>
        </div>
        <div>
          <nav
<<<<<<< HEAD
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : ''}`}
=======
            className={`${styles.nav} ${menuOpen ? styles[`nav__open`] : ''}`}
            data-testid='menu'
>>>>>>> dev
          >
            <a className={styles.nav__item} href={'/login'}>
              Dashboard
            </a>
            <a className={styles.nav__item} href={'/about'}>
              About
            </a>
            <a className={styles.nav__item} href={'/contact'}>
              Contact
            </a>
            <div className={styles.nav__button__container}>
              <Button setUser={props.setUser} />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button setUser={props.setUser} />
          </div>
          <button
            className={styles.header__toggler}
            onClick={menuToggler}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
//change to logout
const Button = () => {
  return <button className={styles.button}> Home </button>;
=======
const Button = (props) => {
  const navigate = useNavigate();

  const loggingOut = (e) => {
    e.preventDefault();
    Cookies.remove('grafid');
    props.setUser('');
    navigate('/');
  };
  return (
    <button
      className={styles.button}
      onClick={loggingOut}
      aria-label='Logout Button'
    >
      Logout
    </button>
  );
>>>>>>> dev
};

export default Navbar;
