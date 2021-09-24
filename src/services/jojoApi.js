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

export const createCharacter = async (character) => {

  console.log('jojoapi', character.name);
  console.log('jojo char', character);

  const res = await fetch('https://stormy-beach-42304.herokuapp.com/api/v1/characters', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  }); 

  const newCharacter = await res.json();

  console.log('res', res);
  
  return newCharacter;
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

