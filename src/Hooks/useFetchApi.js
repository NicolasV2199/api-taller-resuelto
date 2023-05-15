import { useState } from "react"

export const useFetchApi = (page = 1) => {
  
  const [characters, setCharacters] = useState([]);
  
  const getCharacters = async (page) => {

    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const {results} = await resp.json();

    setCharacters(results);

  }
  
  return {
    characters,
    getCharacters,
  }
}