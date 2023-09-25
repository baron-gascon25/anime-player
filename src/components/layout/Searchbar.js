import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import animeContext from "../../context/AnimeContext";
import alertContext from "../../context/alert/AlertContext";

const Searchbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const AnimeContext = useContext(animeContext);
  const AlertContext = useContext(alertContext);

  const onSearch = (e) => {
    setInput(e.target.value);
  };

  const searchAnime = (e) => {
    e.preventDefault();
    if (input !== "") {
      AnimeContext.setAnimeList(input);
      navigate("/list");
      setInput("");
    } else {
      AlertContext.setAlert("  Please enter an input", "danger");
    }
  };

  return (
    <form className='d-flex' role='search'>
      <input
        className='form-control me-2 text-dark bg-light'
        type='search'
        placeholder='Search anime'
        aria-label='Search'
        onChange={onSearch}
        value={input}
        onKeyDown={(e) => e.key === "Enter" && searchAnime(e)}
      />
      <button className='btn btn-secondary' onClick={searchAnime}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
