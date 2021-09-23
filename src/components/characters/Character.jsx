/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Character({ id, chapter, image, name }) {
  return (
    <>
      <Link to={`/characters/${id}`}>
        <p>Name: {name}</p>
        <p>{image}</p>
        <p>Chapter: {chapter}</p>
      </Link>
    </>
  );
}
