import{ useState } from 'react';

export default function Header() {
  const [micSpinning, setMicSpinning] = useState(false);

  const handleMicHover = () => {
    setMicSpinning(true);
  };

  const handleMicLeave = () => {
    setMicSpinning(false);
  };

  const micImgStyle = {
    transition: 'transform 0.3s ease',
    transform: micSpinning ? 'rotate(360deg)' : 'rotate(0deg)',
  };

  const headingStyle = {
    color: '#fff',
    paddingTop: '5rem',
    paddingLeft: '4rem',
    marginBottom: 0,
    fontFamily: 'Your Custom Font, sans-serif',
  };

  return (
    <div className="header" style={{ backgroundColor: '#343a40', padding: '1rem' }}>
      <div className="container p-1">
        <div
          className="d-flex flex-row mb-3 justify-content-center me-5"
          onMouseEnter={handleMicHover}
          onMouseLeave={handleMicLeave}
        >
          <div className="p2">
            <img
              src="https://images.pexels.com/photos/17807184/pexels-photo-17807184.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt="mic"
              className="img-thumbnail mt-3"
              width="120"
              height="120"
              style={micImgStyle}
            />
          </div>
          <div className="p2">
            <h1 style={headingStyle}>Make A Memory</h1>
          </div>
        </div>
        <nav className="navbar">
          <div className="container-fluid"></div>
        </nav>
      </div>
    </div>
  );
}
