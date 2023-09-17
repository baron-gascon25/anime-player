import React, { useState, useContext, useEffect } from "react";
import Episodes from "../Videos/Episodes";
import Spinner from "../layout/Spinner";
import AnimeContext from "../../context/AnimeContext";

const AnimeInfo = () => {
  const animeContext = useContext(AnimeContext);

  const { loading, animeInfo, animeEpisodes, getAnime } = animeContext;

  useEffect(() => {
    getAnime("spy-x-family");
    // es-lint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-2 clearfix'>
            <img
              src={animeInfo.image}
              className='mx-auto d-block m-4'
              style={imageStyle}
              alt='anime_image'
            ></img>
            <p style={{ marginBottom: "0px" }}>
              <span className='fw-semibold'>Release Date:</span>{" "}
              {animeInfo.releaseDate}
            </p>
            <p>
              <span className='fw-semibold'>Status:</span> {animeInfo.status}
            </p>
          </div>
          <div className='col-xxl-10'>
            <br />
            <h4>{animeInfo.title}</h4>
            <br />
            <p>{animeInfo.description}</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <hr />
        <h5>Episodes</h5>
        <div className={episodeStyle}>
          {animeEpisodes.map((episode) => (
            <Episodes key={episode.number} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

const imageStyle = {
  height: "300px",
  width: "200px",
  marginBottom: "10px",
};

const episodeStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default AnimeInfo;
