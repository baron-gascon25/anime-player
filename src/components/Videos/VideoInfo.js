import React, { useState, useEffect } from "react";
import axios from "axios";
import Videos from "./Videos";
import Spinner from "../layout/Spinner";

const VideoInfo = () => {
  const [videos, setVideo] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    // es-lint-disable-next-line
  }, []);

  const url = "https://api.consumet.org/anime/gogoanime/info/spy-x-family";

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setVideo(res.data);
      setEpisodes(res.data.episodes);
      setLoading(false);
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-2 clearfix'>
            <img
              src={videos.image}
              className='mx-auto d-block m-4'
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
