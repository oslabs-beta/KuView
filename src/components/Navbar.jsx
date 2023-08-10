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
          <a className={styles.logo} href='/dashboard'>KuView</a>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav__open`] : ''}`}
            data-testid='menu'
          >
            <a className={styles.nav__item} href={'/login'}>
              Dashboard
            </a>
            <a className={styles.nav__item} href={'https://kuview.io'} target='_blank'>
              Website
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
};

export default Navbar;
