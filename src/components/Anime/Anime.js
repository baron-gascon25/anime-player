import React from "react";
import { Link } from "react-router-dom";

const Anime = ({ animes: { id, title, image, episodeNumber } }) => {
  return (
    <div className='card m-1' style={{ width: "260px", height: "420px" }}>
      <div className='card-body overflow-hidden'>
        <Link to={`/info/${id}`} className='text-decoration-none'>
          <img
            src={image}
            style={imageStyle}
            alt={id}
            className='card-image-top mb-1'
          />
          <p className='card-title text-center text-light mb-0'>{title}</p>
          {episodeNumber && (
            <p className='text-light opacity-75 text-center'>
              Episode: {episodeNumber}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
};

const imageStyle = {
  height: "300px",
  width: "200px",
};

export default Anime;
