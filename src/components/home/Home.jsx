/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/home.scss';

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
        <table>
          <tr>
            <th>Routes</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>GET /api/v1/characters</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/:id</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/stands</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/stands/:id</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/chapter?chapter=</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/human?isHuman=boolean</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/characters?isHuman=boolean?living=boolean</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/nationality?nationality=</td>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/family?family=</td>
            <td>Get all characters</td>
          </tr>
        </table>
        <button onClick={handleCharacter}>View All Characters</button>
        <button onClick={handleStand}>View All Stands</button>
      </div>
    </>
  );
};

export default Home;
