import React from 'react';
import { useHistory } from 'react-router';
import { useCharacters } from '../../state/customHooks';
import Character from './Character';

const CharacterList = () => {
  const { characters } = useCharacters();
  const history = useHistory();

  const handleAdd = () => {
    history.push('/characters/add');
  };
  
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));


  return (
    <>
      <button onClick={handleAdd}>Add Character</button>
      <h1>{characterElements}</h1>;
    </>
  );
};

export default CharacterList;
