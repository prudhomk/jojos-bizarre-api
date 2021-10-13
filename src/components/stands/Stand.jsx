/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacter } from '../../state/customHooks';
import styles from '../styles/lists.scss';

export default function Stand({ id, name, image, standUser }) {

  
  const character = useCharacter(standUser);
  
  return (
    <>
      <Link to={`/stands/${id}`}>
        <div className={styles.stand}>
          <p>Name: {name}</p>
          <img src={`./assets/${image}`}/>
          <p>Stand User: { character.name }</p>
        </div>
      </Link>
    </>
  );
}
