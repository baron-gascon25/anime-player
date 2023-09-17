import React from "react";

const Home = () => {
  return (
    <div className='m-5'>
      <h3 className='text-center lh-lg'>
        Find and discover countless of anime shows to watch!
      </h3>
      <div className='input-group input-group-lg mt-5'>
        <input
          className='form-control'
          type='search'
          placeholder='Search anime'
          aria-label='Search'
        />
        <i className='input-group-text bi bi-search'></i>
      </div>
    </div>
  );
};

export default Home;
