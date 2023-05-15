import { useFetchApi } from "./Hooks/useFetchApi"

export const ApiApp = () => {

  const {characters, getCharacters} = useFetchApi();

  getCharacters();

  return (
    <>
      <h1>Api app</h1>
      {
        characters.map(char => (
          <h1 key={char.id}>{char.name}</h1>
        ))
      }
    </>
  )
}