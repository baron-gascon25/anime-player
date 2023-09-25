import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import AlertContext from "../../context/alert/AlertContext";

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const animeContext = useContext(AnimeContext);
  const alertContext = useContext(AlertContext);

  const onSearch = (e) => {
    setText(e.target.value);
  };

  const searchAnime = () => {
    if (text === "") {
      alertContext.setAlert("  Please enter an input", "danger");
    } else {
      animeContext.setAnimeList(text);
      navigate("/list");
    }
  };

  return (
    <div className='m-5' style={{ height: "75vh" }}>
      <h3 className='text-center lh-lg'>AniPlayer - Watch Anime Online</h3>
      <h5 className='text-center lh-lg'>
        Find and discover countless of anime shows to watch!
      </h5>
      <div className='input-group input-group-lg mt-5'>
        <input
          className='form-control'
          type='search'
          placeholder='Search anime'
          aria-label='Search'
          onChange={onSearch}
          onKeyDown={(e) => e.key === "Enter" && searchAnime()}
        />
        <button className='input-group-text' onClick={searchAnime}>
          <i className='bi bi-search' />
        </button>
      </div>
    </div>
  );
};

export default Home;
