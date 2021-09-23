import React from 'react';
import { useParams } from 'react-router-dom';
import { useStand } from '../../state/customHooks.js';


export default function StandDetails() {
  const { id } = useParams();

  const stand = useStand(id);

  return (
    <div>
      <p>Name: {stand.name}</p>
      <p>Alternate Name: {stand.alternateName}</p>
      <p>Japanese: {stand.japaneseName}</p>
      <p>Image: {stand.image}</p>
      <p>Stand User: {stand.standUser}</p>
      <p>Chapter: {stand.chapter}</p>
      <p>Abilities: {stand.abilities}</p>
      <p>Battlecry: {stand.battlecry}</p>
    </div>
  );
}
