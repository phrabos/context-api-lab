import React, { useEffect, useState } from 'react';
import Character from '../components/Character';
import PageControls from '../components/PageControls';
import Header from '../components/Header';
import { getCharacters } from '../services/apiUtils';
import { useTheme } from '../state/ThemeProvider';
import styles from '../components/app/app.css';

const Display = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState(null);
  const theme = useTheme();


  useEffect(() => {
    setLoading(true);
    getCharacters(page)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [page]);

  const handleClick = (e) => {
    if(e.target.value === 'back') setPage(prev => prev - 1);
    if(e.target.value === 'forward') setPage(prev => prev + 1);
  };

  if(loading) return <h1>loading...</h1>;
  return (
    <div  className={theme ? styles.dark : styles.light}>
      <Header />
      <h1>Star Wars Characters</h1>
      <Character handleClick={handleClick} character={character} />
      <PageControls handleClick={handleClick} page={page} />
    </div>
  );
};

export default Display;
