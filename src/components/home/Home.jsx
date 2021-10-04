/* eslint-disable max-len */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
      <p>You thought this was an API, but it was me, DIO! </p>
      <div>
        <img src={randomGif()}/>
      </div>
      <p>
       Welcome to Jojo's Bizarre API, host to a collection 
        of routes containing all the Jojo characters and stands
        you would ever care to look for.
      </p>
  
      <div className={styles.home}>
        <table>
          <tr>
            <th>Routes</th>
            <th>Examples</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>GET /api/v1/characters</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters" target="_blank" rel="noreferrer">Example</a>
            <td>Get all characters</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/:id</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/1" target="_blank" rel="noreferrer">Example</a>
            <td>Get a character by an id</td>
          </tr>
          <tr>
            <td>GET /api/v1/stands</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/stands" target="_blank" rel="noreferrer">Example</a>
            <td>Get all stands</td>
          </tr>
          <tr>
            <td>GET /api/v1/stands/:id</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/stands/1" target="_blank" rel="noreferrer">Example</a>
            <td>Get a stand by an id</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/chapter?chapter=query</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/chapter?chapter=stardust" target="_blank" rel="noreferrer">Example</a>
            <td>Get characters by chapter</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/human?isHuman=boolean</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/human?isHuman=true" target="_blank" rel="noreferrer">Example</a>
            <td>Get characters dependent on whether they are human</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/living?living=boolean</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/living?living=false" target="_blank" rel="noreferrer">Example</a>
            <td>Get characters dependent on whether they are living</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/nationality?nationality=query</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/nationality?nationality=egyptian" target="_blank" rel="noreferrer">Example</a>
            <td>Get characters based on nationality</td>
          </tr>
          <tr>
            <td>GET /api/v1/characters/family?family=query</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/family?family=joestar" target="_blank" rel="noreferrer">Example</a>
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
