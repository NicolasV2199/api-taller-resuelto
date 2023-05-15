import { useEffect } from "react";
import { CharactersList } from "./Components/CharactersList";
import { useFetchApi } from "./Hooks/useFetchApi"
import { usePagination } from "./Hooks/usePagination";

export const ApiApp = () => {

  const { pagination, decrement, increment } = usePagination();
  const { characters, getCharacters, isLoading } = useFetchApi();

  useEffect(() => {
    getCharacters(pagination);
  }, [pagination])


  return (
    <>
      <div className="main-container">
        <h1>Rick and Morty Characters</h1>
        {isLoading && (<p>Cargando...</p>)}

        <div className="pagination">
          <button onClick={decrement}>Previous</button>
          <span>Page: {pagination}</span>
          <button onClick={increment}>Next</button>
        </div>

        <CharactersList characters={characters} />

        {!isLoading && (
          <div className="pagination">
            <button onClick={decrement}>Previous</button>
            <span>Page: {pagination}</span>
            <button onClick={increment}>Next</button>
          </div>
        )}
      </div>
    </>
  )
}