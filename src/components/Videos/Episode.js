import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ReactPlayer from "react-player";
import AnimeContext from "../../context/AnimeContext";

import "./Episode.css";

const Episode = () => {
  const animeContext = useContext(AnimeContext);
  const [videoUrl, setVideoUrl] = useState("");

  const { animeEpisodeUrl, loading, setAnimeEpisode } = animeContext;

  const { id } = useParams();

  useEffect(() => {
    let isCancelled = false;
    setAnimeEpisode(id);
    if (!isCancelled) {
      animeEpisodeUrl.filter(
        (link) => link.quality === "default" && setVideoUrl(link.url.toString())
      );
    }
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className='alert alert-warning' role='alert'>
        <p>
          I have yet to fix this problem, please select a quality to manually
          load the video player.
        </p>
      </div>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        height='100%'
        width='100%'
        onReady={() => videoUrl}
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
        <ul className='dropdown-menu bg-secondary' role='menu'>
          {Array.isArray(animeEpisodeUrl) ? (
            animeEpisodeUrl.map((qual) => (
              <li>
                <a
                  className='text-light dropdown-item li-a'
                  href='#'
                  onClick={() => setVideoUrl(qual.url)}
                >
                  {qual.quality}
                </a>
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
