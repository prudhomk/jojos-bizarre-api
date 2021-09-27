/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createStand } from '../../services/jojoApi';
import { useCharacters } from '../../state/customHooks';
import { mungeSearch } from '../../services/mungeData';


export default function StandForm() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [alternateName, setAlternateName] = useState('');
  const [japaneseName, setJapaneseName] = useState('');
  const [image, setImage] = useState('');
  const [standUser, setStandUser] = useState('');
  const [chapter, setChapter] = useState('');
  const [abilities, setAbilities] = useState('');
  const [battlecry, setBattlecry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStand = await createStand({
      name,
      alternateName,
      japaneseName,
      image,
      standUser,
      chapter,
      abilities,
      battlecry
    });

    console.log('new character', newStand);
    history.push(`/stands/${newStand.id}`);
  };

  const { characters } = useCharacters();

  
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log('search', search);
    const searchData = await mungeSearch(characters);
    const filteredData = searchData.find(({ name }) => name.toLowerCase() === search.toLowerCase());
    setStandUser(filteredData.id);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <label>
            <input
              name="search"
              type="text"
              value={search}
              onChange={((e) => setSearch(e.target.value))}
            />
          </label>
          <button>Search</button>
        </form>
      </div>
      <div>
        <ul>
          <li>

          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="input"
            value={name}
            onChange={((e) => setName(e.target.value))}
          />
        </label>
        <label>
          Alternate Name
          <input
            name="alternateName"
            type="input"
            value={alternateName}
            onChange={((e) => setAlternateName(e.target.value))}
          />
        </label>
        <label>
          Japanese Name
          <input
            name="japaneseName"
            type="input"
            value={japaneseName}
            onChange={((e) => setJapaneseName(e.target.value))}
          />
        </label>
        <label>
          Image
          <input
            name="image"
            type="input"
            value={image}
            onChange={((e) => setImage(e.target.value))}
          />
        </label>
        <label>
          Stand User
          <input
            name="standUser"
            type="input"
            value={standUser}
            readOnly={standUser}
          />
        </label>
        <label>
          Chapter
          <input
            name="chapter"
            type="input"
            value={chapter}
            onChange={((e) => setChapter(e.target.value))}
          />
        </label>
        <label>
          Abilities
          <input
            name="abilities"
            type="input"
            value={abilities}
            onChange={((e) => setAbilities(e.target.value))}
          />
        </label>
        <label>
          Battlecry
          <input
            name="battlecry"
            type="input"
            value={battlecry}
            onChange={((e) => setBattlecry(e.target.value))}
          />
        </label>
        <button>Create New Stand</button>
      </form>
    </div>
  );
}
