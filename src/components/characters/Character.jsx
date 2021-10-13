/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/lists.scss';

export default function Character({ id, chapter, image, name }) {
  return (
    <>
      <Link to={`/characters/${id}`}>
        <div className={styles.character}>
          <p>Name: {name}</p>
          <img src={`./assets/${image}`}/>
          <p>Chapter: {chapter}</p>
        </div>    
      </Link>
    </>
  );
}
