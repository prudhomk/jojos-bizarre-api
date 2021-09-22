/* eslint-disable max-len */
import React from 'react';

export default function Stand({ name, japaneseName, alternateName, image, standUser, chapter, abilities, battlecry }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Japanese: {japaneseName}</p>
      <p>Alternate Name: {alternateName}</p>
      <p>Image: {image}</p>
      <p>Stand User: {standUser}</p>
      <p>Chapter: {chapter}</p>
      <p>Abilities: {abilities}</p>
      <p>Battlecry: {battlecry}</p>
    </>
  );
}
