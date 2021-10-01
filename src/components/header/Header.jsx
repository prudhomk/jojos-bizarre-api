import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/styles.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">Jojo's Bizarre API</NavLink>
    </div>
  );
}
