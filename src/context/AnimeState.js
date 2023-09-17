import React, { useReducer } from "react";
import axios from "axios";
import AnimeContext from "./AnimeContext";
import AnimeReducer from "./animeReducer";
import {
  GET_ANIME,
  SET_ANIME_LIST,
  SEARCH_ANIME,
  SET_LOADING,
  SET_QUERY,
} from "../Types";

const AnimeState = (props) => {
  const initialState = {
    anime: [],
    animeInfo: [],
    animeList: [],
    animeEpisodes: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  const getAnime = async (query) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.consumet.org/anime/gogoanime/info/${query}`
      );

      dispatch({
        type: GET_ANIME,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  const setAnimeList = async (query) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.consumet.org/anime/gogoanime/${query}`
      );

      dispatch({
        type: SET_ANIME_LIST,
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AnimeContext.Provider
      value={{
        anime: state.anime,
        animeInfo: state.animeInfo,
        animeList: state.animeList,
        animeEpisodes: state.animeEpisodes,
        loading: state.loading,
        getAnime,
        setAnimeList,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};

export default AnimeState;
