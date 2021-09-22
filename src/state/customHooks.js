import { useEffect, useState } from 'react';
import { fetchCharacters, fetchStands } from '../services/jojoApi.js';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    fetchCharacters()
      .then(setCharacters);

  }, []);

  return { characters };
};

export const useStands = () => {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    
    fetchStands()
      .then(setStands);
  }, []);

  return { stands };
};

