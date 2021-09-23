import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter, fetchStands } from '../services/jojoApi.js';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    fetchCharacters()
      .then(setCharacters);

  }, []);

  return { characters };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    
    fetchCharacter(id)
      .then(setCharacter);

  }, [id]);

  return character;
};

export const useStands = () => {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    
    fetchStands()
      .then(setStands);
  }, []);

  return { stands };
};

