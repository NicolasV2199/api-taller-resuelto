import { useEffect } from "react";
import { CharactersList } from "./Components/CharactersList";
import { useFetchApi } from "./Hooks/useFetchApi"
import { usePagination } from "./Hooks/usePagination";

export const ApiApp = () => {

  const {pagination, decrement, increment} = usePagination();
  const {characters, getCharacters, isLoading} = useFetchApi();

  useEffect(() => {
    getCharacters(pagination);
  }, [pagination])
  

  return (
    <>
      <h1>Api app</h1>
      { isLoading && (<p>Cargando...</p>) }

      <button onClick={decrement}>Anterior</button>
      <span>{pagination}</span>
      <button onClick={increment}>Siguiente</button>

      <CharactersList characters={characters}/>
    </>
  )
}