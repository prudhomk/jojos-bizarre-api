import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useStands } from '../../state/customHooks';
import Stand from './Stand';
import Loader from '../../services/Loader';
import styles from '../styles/lists.scss';

const StandList = () => {
  const [page, setPage] = useState(1);
  const { stands, stanLength, loader } = useStands(page);
  const history = useHistory();

  const standElements = stands.map(stand => (
    <li key={stand.id}>
      <Stand {...stand} />
    </li>
  ));

  const handleClick = () => {
    history.push('/stands/add');
  };

  return (
    <>
      {
        loader ? <Loader/> :
          <>
            <h1>Stands</h1>
            <button onClick={handleClick}>Add Stand</button>
            <ul className={styles.list}>{standElements}</ul>
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
        Prev
            </button>
            <p>Page {page}</p>
            <button
              disabled={page >= (stanLength / 15)}
              onClick={() => setPage(page + 1)}
            >
        Next
            </button>
          </>
      }
    </>
  );
};

export default StandList;
