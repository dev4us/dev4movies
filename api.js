import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a658558021f386d42de63ce01f55a88c",
    language: "es-US"
  }
});

api.get("tv/popular");

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, { parms: { append_to_response: "videos" } }),
  search: term =>
    api.get("search/tv", { params: { query: encodeURIComponent(term) } })
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`/movie/${id}`, { parms: { append_to_response: "videos" } }),
  search: term =>
    api.get("search/movie", { params: { query: encodeURIComponent(term) } })
};
