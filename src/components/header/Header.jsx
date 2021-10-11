import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/home.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <img src="JojoApiLogo.png"/>
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/characters">
          Characters
        </NavLink>
        <NavLink to="/stands">
          Stands
        </NavLink>
      </div>
    </div>
  );
}
