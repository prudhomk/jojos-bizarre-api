import React from 'react';
import { useHistory } from 'react-router';
import { useStands } from '../../state/customHooks';
import Stand from './Stand';
import styles from '../styles/styles.scss';

const StandList = () => {
  const history = useHistory();
  const { stands } = useStands();

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
      <button onClick={handleClick}>Add Stand</button>
      <ul className={styles.list}>{standElements}</ul>
    </>
  );
};

export default StandList;
