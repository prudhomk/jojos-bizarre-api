import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useStand } from '../../state/customHooks.js';


export default function StandDetails() {
  const { id } = useParams();
  const history = useHistory();
  const stand = useStand(id);

  const handleEdit = () => {
    history.push(`/stands/edit/${id}`);
  };

  const handleDelete = async () => {

    if(window.confirm('Are you sure you want to delete this stand?')) {
      // await deleteCharacter(id);
      history.push('/stands');
    }

  };

  const handleReturn = async () => {
    history.push('/stands');
  };

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

      <button onClick={handleEdit}>Edit Stand</button>
      <button onClick={handleDelete}>Delete Stand</button>
      <button onClick={handleReturn}>View All Stand</button>
    </div>
  );
}

