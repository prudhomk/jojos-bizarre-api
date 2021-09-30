import React from 'react';
import { useHistory } from 'react-router';
import { useCharacters } from '../../state/customHooks';
import Character from './Character';
import styles from '../styles/styles.scss';

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
      <ul className={styles.list}>{characterElements}</ul>;
    </>
  );
};

export default CharacterList;
