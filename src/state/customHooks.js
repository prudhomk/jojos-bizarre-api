/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharacter, fetchStands, fetchStand } from '../services/jojoApi.js';

export const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [charLength, setCharLength] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {

    const res = await fetchCharacters(page);
    setCharLength(res.length);
    setCharacters(res.slice((page - 1) * 15, page * 15));
    setLoader(false);
  }, [page, loader]);

  return { characters, charLength, loader };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    
    fetchCharacter(id)
      .then(setCharacter);

  }, [id]);
  
  return character;
};

export const useStands = (page) => {
  const [stands, setStands] = useState([]);
  const [stanLength, setStanLength] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    
    const res = await fetchStands(page);
    setStanLength(res.length);
    setStands(res.slice((page - 1) * 15, page * 15));
    setLoader(false);
  }, [page, loader]);

  return { stands, stanLength, loader };
};

export const useStand = (id) => {
  const [stand, setStand] = useState({});

  useEffect(() => {
    
    fetchStand(id)
      .then(setStand);
  }, [id]);
  
  return stand;
};

