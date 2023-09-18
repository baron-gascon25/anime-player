import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ReactPlayer from "react-player";
import AnimeContext from "../../context/AnimeContext";

const Episode = () => {
  const animeContext = useContext(AnimeContext);
  const [videoUrl, setVideoUrl] = useState("");

  const { setAnimeEpisode, animeEpisodeUrl, animeEpisodesList, loading } =
    animeContext;

  const { id } = useParams();

  useEffect(() => {
    setAnimeEpisode(id);
    animeEpisodeUrl.map(
      (link) => link.quality === "default" && setVideoUrl(link.url)
    );
    // eslint-disable-next-line
  }, [videoUrl]);

  if (loading) {
    return <Spinner />;
  }
  console.log(animeEpisodesList);

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        height={"100%"}
        width={"100%"}
        playsinline={true}
      />
      <br />
      <div className='dropdown'>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Video Quality
        </button>
        <ul className='dropdown-menu'>
          {Array.isArray(animeEpisodeUrl) ? (
            animeEpisodeUrl.map((qual) => (
              <li>
                <a className='dropdown-item'>{qual.quality}</a>
              </li>
            ))
          ) : (
            <p>No other qualities</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Episode;
