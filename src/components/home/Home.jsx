import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/styles.scss';

const Home = () => {

  const history = useHistory();

  const handleCharacter = () => {
    history.push('/characters');
  };

  const handleStand = () => {
    history.push('/stands');
  };

  return (
    <>
      <div className={styles.home}>
        <p>GET /api/v1/characters</p>
        <p>GET /api/v1/characters/:id</p>
        <p>GET /api/v1/stands</p>
        <p>GET /api/v1/stands/:id</p>
        <button onClick={handleCharacter}>View All Characters</button>
        <button onClick={handleStand}>View All Stands</button>
      </div>
    </>
  );
};

export default Home;
