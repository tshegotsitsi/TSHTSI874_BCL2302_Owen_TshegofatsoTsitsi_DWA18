import { useEffect, useState } from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';



const App = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [podcastDetails, setPodcastDetails] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false even if there's an error
      });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const showIds = podcasts.map((pod) => pod.id);
        const detailsPromises = showIds.map((id) =>
          fetch(`https://podcast-api.netlify.app/id/${id}`).then((response) => response.json())
        );
        const detailsData = await Promise.all(detailsPromises);
        setPodcastDetails(detailsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [podcasts]);

  // Separate function to log the episodes for each podcast
  const logEpisodes = (podcast) => {
    podcast.seasons.forEach((season) => {
      season.episodes.forEach((episode) => {
        console.log(episode);
      });
    });
  };

  // Log the podcasts state to the console
  console.log(podcasts);
  

// Log the podcasts state to the console

  return (
    <div>
      <Header />
      <h1>Podcast App</h1>
      {isLoading ? (
        <p>Loading...</p> // Show a loading message while fetching data
      ) : (
        <>
          <PodcastList podcasts={podcasts} details={podcastDetails} />
          {podcastDetails.map((podcast) => logEpisodes(podcast))} {/* Call the function here */}
         
        </>
      )}
    </div>
  );
};

export default App;
