/* eslint-disable max-len */
export const fetchCharacters = async () => {

  const res = await fetch('https://stormy-beach-42304.herokuapp.com/api/v1/characters');
  const characters = await res.json();

  console.log(characters);
  
  return characters;
};

export const fetchStands = async () => {

  const res = await fetch('https://stormy-beach-42304.herokuapp.com/api/v1/stands');
  const stands = await res.json();

  console.log(stands);

  return stands;
};
