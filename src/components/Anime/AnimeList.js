import React, { useContext } from "react";
import animeContext from "../../context/AnimeContext";
import Anime from "./Anime";
import Spinner from "../layout/Spinner";

const AnimeList = () => {
  const AnimeContext = useContext(animeContext);

  if (!AnimeContext.loading && AnimeContext.animeList != null) {
    return <Spinner />;
  }

  return (
    <div>
      <h4 className='m-4'>Results</h4>
      <hr className='m-4' />
      <div className='row justify-content-center'>
        {AnimeContext.animeList.map((animes) => (
          <Anime key={animes.id} animes={animes} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
