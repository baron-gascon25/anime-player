import React, { useContext } from "react";
import animeContext from "../../context/AnimeContext";
import Anime from "./Anime";
import Spinner from "../layout/Spinner";

const AnimeList = () => {
  const AnimeContext = useContext(animeContext);

  const { loading, animeList } = AnimeContext;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h4 className='m-4'>Results</h4>
      <hr className='m-4' />
      <div className='row justify-content-center'>
        {animeList.map((animes) => (
          <Anime key={animes.id} animes={animes} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
