import { useState } from 'react';
import PropTypes from 'prop-types';
import './PodcastItem.css';

const PodcastItem = ({ podcast }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleToggleOverlay = () => {
    setShowOverlay((prevShowOverlay) => !prevShowOverlay);
  };

  // const handleAudioPlay = () => {
  //   console.log('Audio started playing.');
  // };

  // const handleAudioPause = () => {
  //   console.log('Audio paused.');
  // };

  // const logSeasonIds = () => {
  //   if (podcast && podcast.seasons) {
  //     const seasonIds = podcast.seasons.map((season) => season.id);
  //     console.log('Season Ids:', seasonIds);
  //   }
  // };

  return (
    <div className={`podcast-item ${showOverlay ? 'show-overlay' : ''}`} onClick={handleToggleOverlay}>
      {/* Display the podcast image with fixed height and width */}
      <img src={podcast.image} alt={`Podcast - ${podcast.title}`} height="200" width="200" />
      <h3>{podcast.title}</h3>

      <div className="overlay" onClick={handleToggleOverlay}>
        <h3>{podcast.title}</h3>
        {showOverlay ? (
          <p className="description">{podcast.description}</p>
        ) : (
          <p className="description-preview">{podcast.description.slice(0, 100)}...</p>
        )}
      </div>


      {/* <audio controls onPlay={handleAudioPlay} onPause={handleAudioPause}>
        <source src={podcast.audio} type="episode.episode" />
        Your browser does not support the audio element.
      </audio> */}

      {/* Add onClick event to the button */}
      {/* <button onClick={logSeasonIds}>Log Season Ids</button> */}
    </div>
  );
};

// Prop-types validation
PodcastItem.propTypes = {
  podcast: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    audio: PropTypes.string,
    seasons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        // Other season properties...
      })
    ),
  }).isRequired,
};

export default PodcastItem;
