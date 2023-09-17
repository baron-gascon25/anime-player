import React, { useContext } from "react";
import animeContext from "../../context/AnimeContext";

const AnimeList = () => {
  const AnimeContext = useContext(animeContext);
  console.log(AnimeContext.animeList);

  return (
    <div className='card'>
      <div className='col'>
        <p>test</p>
      </div>
    </div>
  );
};

const imageStyle = {
  height: "300px",
  width: "200px",
};

export default AnimeList;
