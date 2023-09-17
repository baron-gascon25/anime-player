import React, { useState } from "react";
import axios from "axios";

const Searchbar = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [results, setResult] = useState([]);

  const onSearch = (e) => {
    setText(e.target.value);
  };

  const searchText = async (query) => {
    try {
      const res = await axios.get(
        `https://api.consumet.org/anime/gogoanime/${query}`
      );
      setData(res.data);
      setResult(res.data.results);
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  const searchAnime = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <form className='d-flex' role='search'>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search anime'
        aria-label='Search'
        onChange={onSearch}
      />
      <button
        className='btn btn-outline-success'
        type='submit'
        onClick={searchAnime}
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
