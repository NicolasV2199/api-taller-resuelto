

export const CharactersList = ({ characters }) => {
  return (
    <>
      <div className="cards-container">
        {
          characters.map(char => (
            <h1 key={char.id}>{char.name}</h1>
          ))
        }
      </div>
    </>
  )
}