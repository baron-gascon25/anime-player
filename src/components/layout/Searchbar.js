import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import animeContext from "../../context/AnimeContext";

const Searchbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const AnimeContext = useContext(animeContext);

  const onSearch = (e) => {
    setInput(e.target.value);
  };

  const searchAnime = (e) => {
    e.preventDefault();
    console.log(input);
    AnimeContext.setAnimeList(input);
    navigate("/list");
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
        onKeyDown={(e) => e.key === "Enter" && searchAnime(e)}
      />
      <button className='btn btn-outline-success' onClick={searchAnime}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
