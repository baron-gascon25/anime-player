import React from "react";
import { Link } from "react-router-dom";

const Episodes = ({ episode: { id } }) => {
  return (
    <div>
      <div>
        <Link to={`/episode/${id}`}>
          <h6>{id}</h6>
        </Link>
      </div>
    </div>
  );
};

export default Episodes;
