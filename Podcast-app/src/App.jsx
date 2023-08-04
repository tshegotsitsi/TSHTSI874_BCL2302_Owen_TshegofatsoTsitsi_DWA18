import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import supabase from '@supabase/supabase-js';

// Import the page components
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Podcasts from './Components/Pages/Podcasts';
import ShowDetails from './Components/Pages/ShowDetails';

const App = () => {
  // Initialize the Supabase client
  const supabaseClient = supabase.createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

function App() 
  return (
    <BrowserRouter>
      {/* Header */}
      <header className="bg-dark">
        <nav className="nav nav-pills flex-row P-2">
          {/* Home Link */}
          <Link to="/" className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page">
            Home
          </Link>

          {/* Genres Dropdown */}
          <a className="flex-sm-fill text-sm-center nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            Genres
          </a>
          <ul className="dropdown-menu">
            {/* List of Genre Links */}
            <li>
              <a className="dropdown-item" href="#">
                Personal Growth
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                True Crime & Investigative Journalism
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                History
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Comedy
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Entertainment
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Business
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Fiction
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                News
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Kids & Family
              </a>
            </li>
          </ul>

          {/* Podcasts Link */}
          <Link to="/podcasts" className="flex-sm-fill text-sm-center nav-link text-light" href="#">
            Podcasts
          </Link>

          {/* About Link */}
          <Link to="/about" className="flex-sm-fill text-sm-center nav-link text-light" href="#">
            About
          </Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Podcasts Page */}
        <Route path="/podcasts" element={<Podcasts />} />

        {/* ShowDetails Page */}
        <Route path="/podcasts/:id" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
