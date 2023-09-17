import {
  GET_ANIME,
  SET_ANIME_LIST,
  SEARCH_ANIME,
  SET_LOADING,
  SET_QUERY,
} from "../Types";

const animeReducer = (state, action) => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        animeInfo: action.payload,
        animeEpisodes: action.payload.episodes,
        loading: false,
      };
    case SET_ANIME_LIST:
      return {
        ...state,
        animeList: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default animeReducer;
