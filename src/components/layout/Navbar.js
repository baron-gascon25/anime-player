import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import animeContext from "../../context/AnimeContext";

const Navbar = () => {
  const AnimeContext = useContext(animeContext);

  return (
    <nav
      className='navbar navbar-expand-lg bg-dark'
      data-bs-theme='dark'
      style={{ marginBottom: "1.5rem" }}
    >
      <div className='container container-fluid'>
        <p className='navbar-brand m-2 h1'>AniPlayer</p>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0' role='menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-link li-b' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recent'
                className='nav-link li-b'
                onClick={() => AnimeContext.setRecentAnime()}
              >
                Anime
              </Link>
            </li>
          </ul>
          <Searchbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
