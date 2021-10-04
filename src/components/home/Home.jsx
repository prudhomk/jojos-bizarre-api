/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { gifs } from './gifs';
import styles from '../styles/home.scss';

const Home = () => {

  const history = useHistory();

  const handleCharacter = () => {
    history.push('/characters');
  };

  const handleStand = () => {
    history.push('/stands');
  };

  const randomGif = () => {
    const x = Math.floor(Math.random() * gifs.length);
    return '../../../gifs/' + gifs[x];
  };

  return (
    <>
      <div>
        <img src={randomGif()}/>
      </div>
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
            <td>Get a character by an id</td>
          </tr>
          <tr>
            <td>GET /api/v1/stands</td>
            <td>Get all stands</td>
          </tr>
          <tr>
            <td>GET /api/v1/stands/:id</td>
            <td>Get a stand by an id</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/chapter?chapter=</td>
            <td>Get characters by chapter</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/human?isHuman=boolean</td>
            <td>Get characters dependent on whether they are human</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/characters?isHuman=boolean?living=boolean</td>
            <td>Get characters dependent on whether they are living</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/nationality?nationality=</td>
            <td>Get characters based on nationality</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/family?family=</td>
            <td>Get all based on their family</td>
          </tr>
        </table>
        <button onClick={handleCharacter}>View All Characters</button>
        <button onClick={handleStand}>View All Stands</button>
      </div>
    </>
  );
};

export default Home;
