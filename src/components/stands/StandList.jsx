import React from 'react';
import { useStands } from '../../state/customHooks';
import Stand from './Stand';

const StandList = () => {
  const { stands } = useStands();

  const standElements = stands.map(stand => (
    <li key={stand.id}>
      <Stand {...stand} />
    </li>
  ));

  return <h1>{standElements}</h1>;
};

export default StandList;
