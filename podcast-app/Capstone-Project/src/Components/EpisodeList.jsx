import PropTypes from 'prop-types'; // Import PropTypes

const EpisodeList = ({ episodes, onEpisodeSelect }) => {
  return (
    <div>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button onClick={() => onEpisodeSelect(episode.id)}>
              {episode.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add PropTypes validation for the props
EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // Add other properties of the episodes object if available
    })
  ).isRequired,
  onEpisodeSelect: PropTypes.func.isRequired,
};

export default EpisodeList;
