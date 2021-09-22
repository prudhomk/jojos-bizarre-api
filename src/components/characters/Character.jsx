/* eslint-disable max-len */
import React from 'react';

export default function Character({ abilities, catchphrase, chapter, family, id, image, isHuman, japaneseName, living, name, nationality }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Japanese Name: {japaneseName}</p>
      <p>{image}</p>
      <p>Catchphrase: {catchphrase}</p>
      <p>Nationality: {nationality}</p>
      <p>Abilities: {abilities}</p>
      <p>Chapter: {chapter}</p>
      <p>Family: {family}</p>
      <p>IsHuman: {isHuman.toString()}</p>
      <p>Living: {living.toString()}</p>
    </>
  );
}
