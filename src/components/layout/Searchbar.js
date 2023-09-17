import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import animeContext from "../../context/AnimeContext";

const Searchbar = () => {
  const [text, setText] = useState("");
  const AnimeContext = useContext(animeContext);

  const onSearch = (e) => {
    setText(e.target.value);
  };

  const searchAnime = (e) => {
    e.preventDefault();
    AnimeContext.setAnimeList(text);
  };

  return (
    <form className='d-flex' role='search'>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search anime'
        aria-label='Search'
        onChange={onSearch}
      />
      <button className='btn btn-outline-success' onClick={searchAnime}>
        <Link to='/info'>Search</Link>
      </button>
    </form>
  );
};

export default Searchbar;
