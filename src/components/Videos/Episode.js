import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ReactPlayer from "react-player";
import AnimeContext from "../../context/AnimeContext";

import "./Episode.css";

const Episode = () => {
  const animeContext = useContext(AnimeContext);
  const [videoUrl, setVideoUrl] = useState("");
  const [state, setState] = useState(true);

  const { animeEpisodeUrl, loading, setAnimeEpisode, setAnimeUrl } =
    animeContext;

  const { id } = useParams();

  useEffect(() => {
    let isCancelled = false;
    setAnimeEpisode(id);
    if (isCancelled === false) {
      animeEpisodeUrl.filter(
        (link) => link.quality === "default" && setAnimeUrl(link.url)
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
      <div
        className={`d-flex justify-content-between ${
          state ? alertShow : alertHide
        }`}
        role='alert'
      >
        <p className='mb-0'>
          Please select a quality to manually load the video player.
        </p>
        <button
          className='mb-0'
          style={{ background: "none", border: "none" }}
          onClick={() => setState(false)}
        >
          <i className='bi bi-x' />
        </button>
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
              <li key={qual.quality}>
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

const alertHide = "alert alert-warning visually-hidden";
const alertShow = "alert alert-warning";

export default Episode;
