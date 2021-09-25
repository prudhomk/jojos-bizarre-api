export const mungeSearch = (characters) => {
  console.log('mungeSearch', characters);
  const data = characters.map(character => 
  {
    return {
      name: character.name,
      id: character.id,
    };
  }
  );
  console.log(data);
  return data;
};
