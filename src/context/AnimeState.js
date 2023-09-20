import React, { useReducer } from "react";
import axios from "axios";
import AnimeContext from "./AnimeContext";
import AnimeReducer from "./animeReducer";
import {
  GET_ANIME,
  GET_ANIME_EPISODES,
  SET_ANIME_EPISODE,
  SET_ANIME_LIST,
  SET_URL,
  CLEAR_URL,
  CLEAR_ANIME_URL,
  SET_LOADING,
} from "./Types";

const AnimeState = (props) => {
  const initialState = {
    animeInfo: [],
    animeList: [],
    animeEpisodes: {},
    animeEpisodeUrl: [],
    animeUrl: "",
    animeUrlList: {},
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

      getAnimeEpisodes(res.data.episodes);
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

  const getAnimeEpisodes = (episodes) => {
    setLoading();

    dispatch({
      type: GET_ANIME_EPISODES,
      payload: episodes,
    });
  };

  const setAnimeEpisode = async (query) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.consumet.org/anime/gogoanime/watch/${query}?server=gogocdn`
      );

      dispatch({
        type: SET_ANIME_EPISODE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  const setAnimeUrl = (url) => {
    dispatch({
      type: SET_URL,
      payload: url,
    });
  };

  const clearUrl = () => {
    dispatch({
      type: CLEAR_ANIME_URL,
    });
  };

  const clearAnimeUrl = (url) => {
    clearUrl();
    dispatch({
      type: CLEAR_URL,
      payload: url,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AnimeContext.Provider
      value={{
        anime: state.anime,
        animeInfo: state.animeInfo,
        animeList: state.animeList,
        animeEpisodes: state.animeEpisodes,
        animeEpisodeUrl: state.animeEpisodeUrl,
        animeUrl: state.animeUrl,
        loading: state.loading,
        getAnime,
        setAnimeUrl,
        setAnimeList,
        clearAnimeUrl,
        setAnimeEpisode,
        getAnimeEpisodes,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};

export default AnimeState;
