import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useCharacters } from '../../state/customHooks';
import Character from './Character';
import Loader from '../../services/Loader';
import styles from '../styles/lists.scss';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, charLength, loader } = useCharacters(page);
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
      {
        loader ? <Loader/> :
          <div className={styles.wrapper}>
            <h1>Characters</h1>
            {/* <button onClick={handleAdd}>Add Character</button> */}
            <ul className={styles.list}>{characterElements}</ul>
            <div className={styles.pagination}>
              <button 
                disabled={page <= 1}
                onClick={() => setPage(page - 1)} 
              > 
              Prev
              </button>
              <p>Page {page}</p>
              <button 
                disabled={page >= (charLength / 15)}
                onClick={() => setPage(page + 1)}
              >
              Next
              </button>
            </div>
          </div>
    
      }
    </>
  );
};

export default CharacterList;
