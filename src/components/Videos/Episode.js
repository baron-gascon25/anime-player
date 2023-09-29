import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ReactPlayer from "react-player";
import AnimeContext from "../../context/AnimeContext";

import "./Episode.css";

const Episode = () => {
  const animeContext = useContext(AnimeContext);
  const [videoUrl, setVideoUrl] = useState("");
  const [clicked, setClicked] = useState(false);
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  const {
    animeInfo,
    getAnime,
    animeEpisodeUrl,
    loading,
    setAnimeUrl,
    setAnimeEpisode,
    animeEpisodes,
  } = animeContext;

  const { id } = useParams();

  useEffect(() => {
    let isCancelled = false;
    setState(true);
    setVideoUrl("");
    if (!clicked) {
      getAnime(idSlice(id));
      setAnimeEpisode(id);
    }
    if (!isCancelled) {
      animeEpisodeUrl.filter(
        (link) => link.quality === "default" && setAnimeUrl(link.url.toString())
      );
    }
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line
  }, [id]);

  const epSlice = (ep) => {
    if (ep.number < 9) {
      return ep.id.slice(0, ep.id.length - 10);
    } else if (ep.number > 9) {
      return ep.id.slice(0, ep.id.length - 11);
    } else if (ep.number > 99) {
      return ep.id.slice(0, ep.id.length - 12);
    }
  };

  const idSlice = (id) => {
    var number = parseInt(id.replace(/\D/g, ""));
    if (number < 9) {
      return id.slice(0, id.length - 10);
    } else if (number > 9) {
      return id.slice(0, id.length - 11);
    } else if (number > 99) {
      return id.slice(0, id.length - 12);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <div
        className={`d-flex justify-content-between ${
          state ? alertShow : alertHide
        }`}
        role='alert'
      >
        <p className='mb-0'>
          Please select a quality to load the video player.
        </p>
        <button
          className='mb-0'
          style={{ background: "none", border: "none" }}
          onClick={() => setState(false)}
        >
          <i className='bi bi-x' />
        </button>
      </div>
      <div className='d-flex flex-row'>
        <a href={`/info/${animeInfo.id}`} className='text-secondary'>
          <i className='bi bi-caret-left-square me-2' />
        </a>
        <h5 className='me-2'>
          {animeInfo.title} -{" "}
          <span className='opacity-75'>
            {id.replace(`${animeInfo.id}-episode-`, "")}
          </span>
        </h5>
      </div>
      <ReactPlayer
        className='mt-3 mx-auto'
        url={videoUrl}
        controls={true}
        height='100%'
        width='100%'
        onReady={() => videoUrl}
      />
      <div className='card d-flex flex-row p-2 mt-3 justify-content-center'>
        <div className='dropdown flex-fill text-center'>
          <button
            className='btn dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Episodes
          </button>
          <ul className='dropdown-menu bg-secondary' role='menu'>
            {Array.isArray(animeEpisodes) ? (
              animeEpisodes.map((ep) => (
                <li key={ep.id}>
                  <button
                    className='text-secondary-emphasis dropdown-item li-a'
                    style={{ background: "none" }}
                    onClick={() => {
                      setClicked(true);
                      getAnime(epSlice(ep));
                      setAnimeEpisode(ep.id);
                      navigate(`/episode/${ep.id}`);
                    }}
                  >
                    {`Episode ${ep.number}`}
                  </button>
                </li>
              ))
            ) : (
              <p>No other episodes</p>
            )}
          </ul>
        </div>
        <div className='vr' />
        <div className='dropdown flex-fill text-center'>
          <button
            className='btn dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Video Quality
          </button>
          <ul className='dropdown-menu bg-secondary' role='menu'>
            {Array.isArray(animeEpisodeUrl) ? (
              loading ? (
                <Spinner />
              ) : (
                animeEpisodeUrl.map((qual) => (
                  <li key={qual.quality}>
                    <button
                      className='text-secondary-emphasis dropdown-item li-a'
                      onClick={() => setVideoUrl(qual.url)}
                      style={{ background: "none" }}
                    >
                      {qual.quality}
                    </button>
                  </li>
                ))
              )
            ) : (
              <p>No other qualities</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const alertHide = "alert alert-warning visually-hidden";
const alertShow = "alert alert-warning";

export default Episode;
