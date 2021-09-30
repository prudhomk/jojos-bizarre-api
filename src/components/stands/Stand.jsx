/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Stand.scss';

export default function Stand({ id, name, image, standUser }) {
  return (
    <>
      <div className={styles.stand}>
        <Link to={`/stands/${id}`}>
          <p>Name: {name}</p>
          <img src={`./assets/${image}`}/>
          <p>Stand User: {standUser}</p>
        </Link>
      </div>
    </>
  );
}
