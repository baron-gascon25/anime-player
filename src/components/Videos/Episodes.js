import React from "react";
import { Link } from "react-router-dom";

const Episodes = ({ episode: { id } }) => {
  return (
    <div className='col-xxl-4 mt-3 li-c'>
      <Link className='text-decoration-none li-d' to={`/episode/${id}`}>
        <h6>{id}</h6>
      </Link>
    </div>
  );
};

export default Episodes;
