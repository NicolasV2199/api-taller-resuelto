

export const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="card">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>
          Status: {character.status} <br />
          Gender: {character.gender}
        </p>
      </div>
    </>
  )
}