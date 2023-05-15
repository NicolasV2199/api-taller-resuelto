import { CharacterCard } from "./CharacterCard"
import PropTypes from 'prop-types';

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

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
}