/* eslint-disable max-len */
export const fetchCharacters = async () => {

  const res = await fetch('https://stormy-beach-42304.herokuapp.com/api/v1/characters');
  const characters = await res.json();
  
  return characters;
};

export const fetchCharacter = async (id) => {
  
  const res = await fetch(`https://stormy-beach-42304.herokuapp.com/api/v1/characters/${id}`);

  const character = await res.json();

  return character;
};

export const fetchStands = async () => {

  const res = await fetch('https://stormy-beach-42304.herokuapp.com/api/v1/stands');
  const stands = await res.json();

  return stands;
};

export const fetchStand = async (id) => {
  
  const res = await fetch(`https://stormy-beach-42304.herokuapp.com/api/v1/stands/${id}`);
  const stand = await res.json();
  
  return stand;
};
