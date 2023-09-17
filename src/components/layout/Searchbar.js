import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import animeContext from "../../context/AnimeContext";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const AnimeContext = useContext(animeContext);

  const onSearch = (e) => {
    setInput(e.target.value);
  };

  const searchAnime = (e) => {
    e.preventDefault();
    AnimeContext.setAnimeList(input);
    setInput("");
  };

  return (
    <form className='d-flex' role='search'>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search anime'
        aria-label='Search'
        onChange={onSearch}
        value={input}
      />
      <button className='btn btn-outline-success' onClick={searchAnime}>
        <Link to='/list' style={{ textDecoration: "none" }}>
          Search
        </Link>
      </button>
    </form>
  );
};

export default Searchbar;
