import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deleteStand } from '../../services/jojoApi.js';
import { useStand, useCharacter } from '../../state/customHooks.js';
import styles from '../styles/lists.scss';

export default function StandDetails() {
  const { id } = useParams();
  const history = useHistory();
  const stand = useStand(id);

  const character = useCharacter(stand.standUser);

  const handleEdit = () => {
    history.push(`/stands/edit/${id}`);
  };

  const handleDelete = async () => {

    if(window.confirm('Are you sure you want to delete this stand?')) {
      await deleteStand(id);
      history.push('/stands');
    }

  };

  const handleReturn = async () => {
    history.push('/stands');
  };

  return (
    <div className={styles.details}> 
      <img src={`/assets/${stand.image}`}/>
      <div className={styles.detailInfo}>
        <h1>{stand.name}'s Profile</h1>
        <p>Name: {stand.name}</p>
        <p>Alternate Name: {stand.alternateName}</p>
        <p>Japanese: {stand.japaneseName}</p>
        <p>Stand User: {character.name}</p>
        <p>Chapter: {stand.chapter}</p>
        <p>Abilities: {stand.abilities}</p>
        <p>Battlecry: {stand.battlecry}</p>
        <div className={styles.buttons}></div>
        <button onClick={handleEdit}>Edit Stand</button>
        <button onClick={handleDelete}>Delete Stand</button>
        <button onClick={handleReturn}>View All Stands</button>
      </div>
    </div>
  );
}

