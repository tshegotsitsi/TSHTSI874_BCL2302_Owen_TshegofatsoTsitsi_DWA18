import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * ShowDetails component represents the page that displays details of a specific podcast.
 * It fetches the podcast details from the API based on the provided ID in the URL parameters.
 */
function ShowDetails() {
  // State to store the podcast data and loading status
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the podcast ID from the URL parameters using react-router-dom's useParams hook
  const params = useParams();

  // Fetch the podcast details from the API when the component mounts or the podcast ID changes
  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPodcast(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [params.id]);

  // Debug information
  console.log('params.id:', params.id);
  console.log('podcast:', podcast);

  // Render loading message while waiting for API response
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render the podcast details if available, or a message if the podcast is not found
  return (
    <div className="container p-3 m-0">
      <div className="row">
        {podcast ? (
          <div key={podcast.id} className="col-md-3 mb-4 mx-auto ">
            <div className="card" style={{ width: '35rem' }}>
              <img src={podcast.image} alt={podcast.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{podcast.title}</h5>
                {/* Display a truncated description if it exceeds 100 characters */}
                <p className="card-text">
                  {podcast.description.length > 100 ? podcast.description.slice(0, 100) + '...' : podcast.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Podcast not found.</h2>
        )}
      </div>
    </div>
  );
}

export default ShowDetails;
