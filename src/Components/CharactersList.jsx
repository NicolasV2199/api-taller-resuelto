import { CharacterCard } from "./CharacterCard"


export const CharactersList = ({ characters }) => {
  return (
    <>
      <div className="cards-container">
        {
          characters.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))
        }
      </div>
    </>
  )
}