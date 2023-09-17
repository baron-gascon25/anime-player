import React, { useState } from "react";

const VideoList = () => {
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState([]);

  const searchText = async (query) => {
    try {
      const res = await axios.get(
        `https://api.consumet.org/anime/gogoanime/${query}`
      );
      setShows(res.data);
      setShow(res.data.results);
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  return (
    <div className='card'>
      <div className='row m-3'></div>
    </div>
  );
};

export default VideoList;
