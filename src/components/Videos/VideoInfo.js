import React, { useState, useEffect } from "react";
import axios from "axios";
import Videos from "./Videos";

const VideoInfo = () => {
  const [videos, setVideo] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getData();
    // es-lint-disable-next-line
  }, []);

  const url = "https://api.consumet.org/anime/gogoanime/info/spy-x-family";

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setVideo(res.data);
      setEpisodes(res.data.episodes);
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-2 clearfix'>
            <img
              src={videos.image}
              className='mx-auto d-block'
              style={imageStyle}
              alt='anime_image'
            ></img>
            <p style={{ marginBottom: "0px" }}>
              <span className='fw-semibold'>Release Date:</span>{" "}
              {videos.releaseDate}
            </p>
            <p>
              <span className='fw-semibold'>Status:</span> {videos.status}
            </p>
          </div>
          <div className='col-xxl-10'>
            <br />
            <h4>{videos.title}</h4>
            <br />
            <p>{videos.description}</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <hr />
        <h5>Episodes</h5>
        <div className={episodeStyle}>
          {episodes.map((episode) => (
            <Videos key={episode.number} episode={episode} />
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

export default VideoInfo;
