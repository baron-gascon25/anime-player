import React, { useContext } from "react";
import Anime from "./Anime";
import Spinner from "../layout/Spinner";
import animeContext from "../../context/AnimeContext";

const AnimeRecent = () => {
  const AnimeContext = useContext(animeContext);

  const { loading, animeRecent } = AnimeContext;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h4 className='mt-4'>Recent</h4>
      <hr />
      <div className='row justify-content-center'>
        {animeRecent.map((animes) => (
          <Anime key={animes.id} animes={animes} />
        ))}
      </div>
    </div>
  );
};

export default AnimeRecent;
