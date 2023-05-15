import { CharactersList } from "./Components/CharactersList";
import { useFetchApi } from "./Hooks/useFetchApi"

export const ApiApp = () => {

  const {characters, getCharacters} = useFetchApi();

  getCharacters();

  return (
    <>
      <h1>Api app</h1>
      <CharactersList characters={characters}/>
    </>
  )
}