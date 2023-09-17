import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import animeContext from "../../context/AnimeContext";

const Home = () => {
  const [text, setText] = useState("");
  const AnimeContext = useContext(animeContext);

  const onSearch = (e) => {
    setText(e.target.value);
  };

  const searchAnime = (e) => {
    AnimeContext.setAnimeList(text);
  };

  return (
    <div className='m-5'>
      <h3 className='text-center lh-lg'>
        Find and discover countless of anime shows to watch!
      </h3>
      <div className='input-group input-group-lg mt-5'>
        <input
          className='form-control'
          type='search'
          placeholder='Search anime'
          aria-label='Search'
          onChange={onSearch}
        />
        <button className='input-group-text' onClick={searchAnime}>
          <Link to='/list' className='bi bi-search'></Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
