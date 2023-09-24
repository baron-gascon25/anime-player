import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Episodes from "../Videos/Episodes";
import Spinner from "../layout/Spinner";
import AnimeContext from "../../context/AnimeContext";

const AnimeInfo = () => {
  const animeContext = useContext(AnimeContext);

  const { loading, animeInfo, animeEpisodes, getAnime, clearAnimeUrl } =
    animeContext;

  const { id } = useParams();

  useEffect(() => {
    getAnime(id);
    clearAnimeUrl();
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-3 clearfix'>
            <img
              src={animeInfo.image}
              className='mx-auto d-block m-4'
              style={imageStyle}
              alt='anime_image'
            ></img>
            <div className='m-2'>
              <p className='mb-0'>
                <span className='fw-semibold'>Release Date:</span>{" "}
                {animeInfo.releaseDate}
              </p>
              <p className='mb-0'>
                <span className='fw-semibold'>Status:</span> {animeInfo.status}
              </p>
              <p>
                <span className='fw-semibold'>Genre:</span>{" "}
                {Array.isArray(animeInfo.genres) &&
                  animeInfo.genres.map((genre) => genre + ", ")}
              </p>
            </div>
          </div>
          <div className='col-xxl-9'>
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
        <div className='mt-3 row'>
          {Array.isArray(animeEpisodes) ? (
            animeEpisodes.map((episode) => (
              <Episodes key={episode.number} episode={episode} />
            ))
          ) : (
            <p>No Episodes Available...</p>
          )}
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

export default AnimeInfo;
