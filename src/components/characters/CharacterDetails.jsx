import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/customHooks';

export default function CharacterDetails() {
  const { id } = useParams();

  const character = useCharacter(id);
  
  return (
    <div>
      <p>Name: {character.name}</p>
      <p>Japanese Name: {character.japaneseName}</p>
      <p>{character.image}</p>
      <p>Catchphrase: {character.catchphrase}</p>
      <p>Nationality: {character.nationality}</p>
      <p>Abilities: {character.abilities}</p>
      <p>Chapter: {character.chapter}</p>
      <p>Family: {character.family}</p>
      <p>IsHuman: {JSON.stringify(character.isHuman)}</p>
      <p>Living: {JSON.stringify(character.living)}</p>
    </div>
  );
}
