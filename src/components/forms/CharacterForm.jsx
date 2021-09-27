import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createCharacter } from '../../services/jojoApi';

export default function CharacterForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [japaneseName, setJapaneseName] = useState('');
  const [image, setImage] = useState('');
  const [catchphrase, setCatchphrase] = useState('');
  const [nationality, setNationality] = useState('');
  const [abilities, setAbilities] = useState('');
  const [chapter, setChapter] = useState('');
  const [family, setFamily] = useState('');
  const [isHuman, setIsHuman] = useState(false);
  const [living, setLiving] = useState(false);

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'japaneseName':
        setJapaneseName(target.value);
        break;
      case 'image':
        setImage(target.value);
        break;
      case 'catchphrase':
        setCatchphrase(target.value);
        break;
      case 'nationality':
        setNationality(target.value);
        break;
      case 'abilities':
        setAbilities(target.value);
        break;
      case 'chapter':
        setChapter(target.value);
        break;
      case 'family':
        setFamily(target.value);
        break;
      case 'isHuman':
        setIsHuman(target.value);
        break;
      case 'living':
        setLiving(target.value);
        break;
      default:
        console.log('No matches found');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCharacter = await createCharacter({
      name,
      japaneseName,
      image,
      catchphrase,
      nationality,
      abilities,
      chapter,
      family,
      isHuman,
      living
    });
    
    history.push(`/characters/${newCharacter.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        Name: 
          <input 
            required
            name="name" 
            placeholder="Name" 
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
        Japanese Name: 
          <input 
            required
            name="japaneseName" 
            placeholder="Japanese Name" 
            value={japaneseName}
            onChange={handleChange}
          />
        </label>
        <label>
        Image: 
          <input 
            required
            name="image" 
            placeholder="Image" 
            value={image}
            onChange={handleChange}
          />
        </label>
        <label>
        Catchphrase: 
          <input 
            required
            name="catchphrase" 
            placeholder="Catchphrase" 
            value={catchphrase}
            onChange={handleChange}
          />
        </label>
        <label>
        Nationality: 
          <input 
            required
            name="nationality" 
            placeholder="Nationality" 
            value={nationality}
            onChange={handleChange}
          />
        </label>
        <label>
        Abilities: 
          <input 
            required
            name="abilities" 
            placeholder="Abilities" 
            value={abilities}
            onChange={handleChange}
          />
        </label>
        <label>
        Chapter: 
          <input 
            required
            name="chapter" 
            placeholder="Chapter" 
            value={chapter}
            onChange={handleChange}
          />
        </label>
        <label>
        Family: 
          <input 
            required
            name="family" 
            placeholder="Family" 
            value={family}
            onChange={handleChange}
          />
        </label>
        <label>
        Is a human? 
          <input 
            name="isHuman" 
            type="checkbox"
            value={isHuman}
            onChange={((e) => setIsHuman(e.target.checked))}
          />
        </label>
        <label>
        Is currently living? 
          <input 
            name="living"  
            type="checkbox"
            value={living}
            onChange={((e) => setLiving(e.target.checked))}
          />
        </label>
        <button>Create New Character</button>
      </form>
    </div>
  );
}
