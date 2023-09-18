import {
  GET_ANIME,
  SET_ANIME_LIST,
  SET_LOADING,
  SET_ANIME_EPISODE,
  GET_ANIME_EPISODES,
} from "./Types";

const animeReducer = (state, action) => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        animeInfo: action.payload,
        loading: false,
      };
    case GET_ANIME_EPISODES:
      return {
        ...state,
        animeEpisodes: action.payload,
        loading: false,
      };
    case SET_ANIME_EPISODE:
      return {
        ...state,
        animeEpisodeUrl: action.payload.sources,
        loading: false,
      };
    case SET_ANIME_LIST:
      return {
        ...state,
        animeList: action.payload,
        loading: false,
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
