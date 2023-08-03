import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from '../scss/Navbar.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
//Comment

function Navbar() {
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
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
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
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
}

const Button = () => {
  return <button className={styles.button}> Home </button>;
};

//This is for pull request purposes

export default Navbar;
