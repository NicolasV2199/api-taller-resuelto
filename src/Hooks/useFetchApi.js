import { useState } from "react"

export const useFetchApi = () => {
  
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getCharacters = async (url) => {

    const resp = await fetch(url);
    const {results} = await resp.json();

    setCharacters(results);
    setIsLoading(false);
  }
  
  return {
    characters,
    getCharacters,
    isLoading,
  }
}