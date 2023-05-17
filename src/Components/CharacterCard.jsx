import PropTypes from 'prop-types';

export const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="card character-card">
        <h5 className="character-name">{character.name}</h5>
        <img src={character.image} alt={character.name} />
        <p>
          Status: {character.status} <br />
          Gender: {character.gender}
        </p>
      </div>
    </>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
}