import { Link } from 'react-router-dom';

/**
 * About Component
 *
 * The About component represents the about page of the Moments Unplugged website.
 * It displays information about the podcast and invites users to discover the podcast's content.
 *
 * @returns {JSX.Element} The JSX element representing the About page.
 */
function About() {
  return (
    <div className="about-page-container">
      {/* Podcast Logo */}
      <img
        src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg"
        alt="Podcast Logo"
        className="about-hero-image"
      />

      {/* About Content */}
      <div className="about-page-content">
        <h1>Discover Tranquility and Inspiration Through Our Podcast</h1>
        <p>
          At Moments Unplugged, we invite you to immerse yourself in moments of bliss as you embark on a captivating journey into the art of chill.
          Our carefully curated episodes are designed to transport you to a realm of relaxation and wonder.
        </p>
        <p>
          With a shared commitment to enhancing your experience, our podcast is here to accompany you on your path of self-discovery and mindfulness.
          We believe in the power of soothing conversations and contemplative narratives to soothe your spirit and rejuvenate your mind.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="about-page-cta">
        <h2>Embark on Enchanting Journeys<br />Where Your Dreams Hit the Road.</h2>
        <p>
          Indulge in the magic of our podcast and set forth on enchanting mental voyages that evoke serenity and creativity.
          Join us as we explore topics that resonate with your soul and kindle the flames of imagination.
        </p>
        {/* Link to Latest Episodes */}
        <Link className="explore-button" to="/vans">
          Find The Latest Episodes
        </Link>
      </div>
    </div>
  );
}

export default About;
