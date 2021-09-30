/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Stand({ id, name, image, standUser }) {
  return (
    <>
      <Link to={`/stands/${id}`}>
        <p>Name: {name}</p>
        <img src={`./assets/${image}`}/>
        <p>Stand User: {standUser}</p>
      </Link>
    </>
  );
}
