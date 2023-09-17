import React from "react";
import { Link } from "react-router-dom";

const Anime = ({ animes: { id, title, image } }) => {
  console.log(id);
  return (
    <div className='card' style={{ width: "250px" }}>
      <div className='card-body'>
        <img
          src={image}
          style={imageStyle}
          alt={id}
          className='card-image-top'
        />
        <Link to={`/info/${id}`}>
          <p className='card-title text-center'>{title}</p>
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
