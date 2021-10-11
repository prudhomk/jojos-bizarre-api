/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/lists.scss';

export default function Character({ id, chapter, image, name }) {
  return (
    <>
      <div className={styles.character}>
        <Link to={`/characters/${id}`}>
          <p>Name: {name}</p>
          <img src={`./assets/${image}`}/>
          <p>Chapter: {chapter}</p>
        </Link>
      </div>    
    </>
  );
}
