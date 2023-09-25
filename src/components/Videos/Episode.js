import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ReactPlayer from "react-player";
import AnimeContext from "../../context/AnimeContext";

import "./Episode.css";

const Episode = () => {
  const animeContext = useContext(AnimeContext);
  const [videoUrl, setVideoUrl] = useState("");
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
    getAnime(animeInfo.id);
    setAnimeEpisode(id);
    if (isCancelled === false) {
      animeEpisodeUrl.filter(
        (link) => link.quality === "default" && setAnimeUrl(link.url.toString())
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
      <div className='card d-flex flex-row p-2 justify-content-center'>
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
                      getAnime(
                        ep.number > 9
                          ? ep.id.slice(0, ep.id.length - 11)
                          : ep.id.slice(0, ep.id.length - 10)
                      );
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
            ) : (
              <p>No other qualities</p>
            )}
          </ul>
        </div>
      </div>
      <div className='d-flex'>
        <img
          src={animeInfo.image}
          className='mt-3'
          style={{ height: "100px", width: "auto" }}
          alt='anime_img'
        />
        <div className='m-3'>
          <h6>{animeInfo.title}</h6>
          <p>
            {id.replace(`${animeInfo.id}-`, "").charAt(0).toUpperCase() +
              id.replace(`${animeInfo.id}-e`, "").replace("-", " ")}
          </p>
        </div>
      </div>
    </div>
  );
};

const alertHide = "alert alert-warning visually-hidden";
const alertShow = "alert alert-warning";

export default Episode;
