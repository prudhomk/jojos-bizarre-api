import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { deleteCharacter } from '../../services/jojoApi';
import { useCharacter } from '../../state/customHooks';

export default function CharacterDetails() {
  const { id } = useParams();
  const character = useCharacter(id);
  const history = useHistory();

  const handleEdit = async () => {
    history.push(`/characters/edit/${id}`);
  };

  const handleDelete = async () => {

    if(window.confirm('Are you sure you want to delete this character?')) {
      await deleteCharacter(id);
      history.push('/characters');
    }

  };

  const handleReturn = async () => {
    history.push('/characters');
  };
  
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

      <button onClick={handleEdit}>Edit Character</button>
      <button onClick={handleDelete}>Delete Character</button>
      <button onClick={handleReturn}>View All Characters</button>
    </div>
  );
}
