import React from 'react';
import { useCharacters } from '../../state/customHooks';
import Character from './Character';

const CharacterList = () => {
  const { characters } = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));


  return <h1>{characterElements}</h1>;
};

export default CharacterList;
