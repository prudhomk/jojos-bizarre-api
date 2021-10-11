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

  const x = Math.floor(Math.random() * gifs.length);
  
  const randomQuote = () => {
    return gifs[x].quote;
  };

  const randomGif = () => {
    return '../../../gifs/' + gifs[x].gif;
  };

  return (
    <div className={styles.home}>
      <p className={styles.speechbubble}>{randomQuote()}</p>
      <img src={randomGif()}/>
      <div className={styles.wrapper}>
        <img className={styles.zipper} src="/zipper.png"/>
      </div>
      <p className={styles.welcome}>
       Welcome to Jojo's Bizarre API! 
      </p>
      <p className={styles.description}>
        Host to a collection 
        of routes containing all the Jojo characters and stands
        you would ever care to look for.
      </p>
  
      <div className={styles.table}>
        <table>
          <tr>
            <th>Routes</th>
            <th>Examples</th>
            <th>Description</th>
          </tr>
          <tr>
            <td className={styles.route}>GET /api/v1/characters</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters" target="_blank" rel="noreferrer">Example</a>
            <td className={styles.desc}>Get all characters</td>
          </tr>
          <tr>
            <td className={styles.route}>GET /api/v1/characters/&lt;character_id&gt;</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/1" target="_blank" rel="noreferrer">Example</a>
            <td className={styles.desc}>Get a character by an id</td>
          </tr>
          <tr>
            <td className={styles.route}>GET /api/v1/stands</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/stands" target="_blank" rel="noreferrer">Example</a>
            <td className={styles.desc}>Get all stands</td>
          </tr>
          <tr>
            <td className={styles.route}>GET /api/v1/stands/&lt;stand_id&gt;</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/stands/1" target="_blank" rel="noreferrer">Example</a>
            <td className={styles.desc}>Get a stand by an id</td>
          </tr>
          <tr>
            <td className={styles.route}>GET /api/v1/characters/query/query?&lt;category&gt;=&lt;query&gt;</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/characters/query/query?chapter=stardust&nationality=british" target="_blank" rel="noreferrer">Example</a>
            <td className={styles.desc}>Get characters by query.<sup>*</sup></td>
          </tr>
          <tr>
            <td className={styles.route}>GET /api/v1/stands/query/query?&lt;category&gt;=&lt;query&gt;</td>
            <a className={styles.examples} href="https://stand-by-me.herokuapp.com/api/v1/stands/query/query?chapter=stardust&abilities=time" target="_blank" rel="noreferrer">Example</a>
            <td className={styles.desc}>Get stands by query.<sup>**</sup></td>
          </tr>
        </table>
        <p>
          <sup>*</sup>&nbsp;Valid Queries: name, chapter, nationality, family, abilities, isHuman, living, catchphrase.
        </p>
        <p>
          <sup>**</sup>&nbsp;Valid Queries: name, alternateName, standUser, chapter, abilities, battlecry.
        </p>
        <div className={styles.buttons}>
          <button onClick={handleCharacter}>View All Characters</button>
          <button onClick={handleStand}>View All Stands</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
