import React from "react";

const Episodes = ({ episode: { url, id } }) => {
  return (
    <div>
      <div>
        <a href={`${url}`} target='_blank'>
          <h6>{id}</h6>
        </a>
      </div>
    </div>
  );
};

export default Episodes;
